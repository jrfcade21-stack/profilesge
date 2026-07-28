import { Language, ChatMessage } from '../types';

/**
 * Generates a streaming response from Gemini based on user input and chat history.
 */
export async function* generateChatResponseStream(history: ChatMessage[], userMessage: string, language: Language = 'es') {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ history, message: userMessage, language }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("No reader available");
    }

    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const cleaned = line.trim();
        if (!cleaned) continue;

        if (cleaned.startsWith("data: ")) {
          const dataStr = cleaned.substring(6).trim();
          if (dataStr === "[DONE]") {
            return;
          }
          try {
            const parsed = JSON.parse(dataStr);
            if (parsed.text) {
              yield parsed.text;
            }
          } catch (e) {
            console.error("Error parsing SSE chunk:", e);
          }
        }
      }
    }
  } catch (error: any) {
    console.error("Gemini Streaming Error:", error);
    yield language === 'es' 
      ? "Lo siento, tengo dificultades técnicas. Por favor, contáctanos por WhatsApp al +58 424 1397759."
      : "I'm sorry, I'm having technical difficulties. Please contact us via WhatsApp at +58 424 1397759.";
  }
}
