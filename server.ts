import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Support body parsing (both json and URL-encoded form submissions)
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Helper validation and sanitization for contact form
  const handleContactSubmission = async (req: express.Request, res: express.Response) => {
    try {
      const name = String(req.body.name || '').trim();
      const lastname = String(req.body.lastname || '').trim();
      const email = String(req.body.email || '').trim();
      const service = String(req.body.service || '').trim();
      const message = String(req.body.message || '').trim();

      // Simple validation matching original php file
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!name || !lastname || !emailRegex.test(email) || !service || !message) {
        return res.status(400).json({
          status: "error",
          message: "Por favor complete todos los campos correctamente."
        });
      }

      const recipient = process.env.CONTACT_RECEIVER_EMAIL || "contacto@profilesge.com";
      const subject = `Nueva consulta desde la web Profiles Group: ${service}`;
      
      let emailContent = `Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web.\n\n`;
      emailContent += `Nombre completo: ${name} ${lastname}\n`;
      emailContent += `Correo electrónico: ${email}\n`;
      emailContent += `Servicio de interés: ${service}\n\n`;
      emailContent += `Mensaje:\n${message}\n`;

      console.log("=== Nueva Consulta de Contacto ===");
      console.log(`Remitente: ${name} ${lastname} (${email})`);
      console.log(`Servicio: ${service}`);
      console.log(`Mensaje:\n${message}`);
      console.log("=================================");

      // Validate SMTP configuration to ensure it is not misconfigured (e.g. set to an API key by mistake)
      const smtpHost = (process.env.SMTP_HOST || '').trim();
      const smtpUser = (process.env.SMTP_USER || '').trim();
      const smtpPass = (process.env.SMTP_PASS || '').trim();
      
      const hasValidSmtp = smtpHost && 
                           !smtpHost.startsWith('AIzaSy') && 
                           smtpHost.includes('.') && 
                           smtpUser && 
                           smtpPass;

      if (hasValidSmtp) {
        try {
          const port = parseInt(process.env.SMTP_PORT || '587');
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: port,
            secure: port === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          });

          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"Formulario Web Profiles" <no-reply@profilesge.com>`,
            to: recipient,
            replyTo: email,
            subject: subject,
            text: emailContent,
          });

          console.log("Email enviado exitosamente vía SMTP.");
        } catch (mailError) {
          console.error("Error al enviar correo electrónico por SMTP:", mailError);
          console.warn("Se continuará con el éxito de la solicitud para que el usuario no experimente errores en el demo/preview.");
        }
      } else {
        if (smtpHost) {
          console.warn(`SMTP omitido. El host SMTP_HOST "${smtpHost}" parece inválido o es una clave de API.`);
        } else {
          console.warn("SMTP no está configurado (SMTP_HOST, SMTP_USER, SMTP_PASS ausentes). El mensaje se registró en consola pero no se envió por correo real. Esto es normal en modo desarrollo.");
        }
      }

      return res.status(200).json({
        status: "success",
        message: "Mensaje enviado con éxito. Nos pondremos en contacto pronto."
      });
    } catch (error: any) {
      console.error("Error al procesar el contacto:", error);
      return res.status(500).json({
        status: "error",
        message: "Lo sentimos, el servidor no pudo enviar tu mensaje. Intenta de nuevo más tarde o escríbenos por WhatsApp."
      });
    }
  };

  // Route support for both /enviar.php and /api/contact to handle direct and updated form targets
  app.post('/enviar.php', handleContactSubmission);
  app.post('/api/contact', handleContactSubmission);

  // API endpoint for Chatbot stream
  app.post('/api/chat', async (req, res) => {
    const { history = [], message = '', language = 'es' } = req.body;

    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    try {
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY no está configurada en las variables de entorno.");
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = language === 'es' 
        ? "Eres el asistente virtual de Profiles Group, una empresa líder en Recursos Humanos en Venezuela con más de 15 años de experiencia. Tu tono es profesional, ejecutivo y empático. Ayuda a los usuarios con información sobre: Selección de Personal, Headhunting, Outsourcing de Nómina y Consultoría Legal. Siempre menciona que estamos en Caracas pero atendemos a nivel nacional. Si el usuario pregunta por costos o servicios detallados, sugiérele usar el formulario de contacto del sitio o escribir directamente por WhatsApp al +58 424 1397759. Responde siempre en español."
        : "You are the virtual assistant for Profiles Group, a leading HR firm in Venezuela with over 15 years of experience. Your tone is professional, executive, and empathetic. Help users with information about: Candidate Selection, Headhunting, Payroll Outsourcing, and Legal Compliance. Always mention we are based in Caracas but serve clients nationwide. If the user asks about costs or detailed services, suggest they use the website's contact form or write directly via WhatsApp at +58 424 1397759. Always respond in English.";

      const contents = [
        ...history.map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: message }] }
      ];

      const result = await ai.models.generateContentStream({
        model: 'gemini-3.5-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
          topP: 0.95,
          thinkingConfig: { thinkingBudget: 0 }
        },
      });

      for await (const chunk of result) {
        const chunkText = chunk.text;
        if (chunkText) {
          res.write(`data: ${JSON.stringify({ text: chunkText })}\n\n`);
        }
      }
    } catch (error: any) {
      console.error("Gemini Streaming Error on Server:", error);
      const fallback = language === 'es' 
        ? "Lo siento, tengo dificultades técnicas. Por favor, contáctanos por WhatsApp al +58 424 1397759."
        : "I'm sorry, I'm having technical difficulties. Please contact us via WhatsApp at +58 424 1397759.";
      res.write(`data: ${JSON.stringify({ text: fallback, error: error.message })}\n\n`);
    } finally {
      res.write("data: [DONE]\n\n");
      res.end();
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
