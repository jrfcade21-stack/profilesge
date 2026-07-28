<?php
header('Content-Type: application/json');

// Permitir solicitudes desde el origen del sitio
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitización de entradas
    $name = strip_tags(trim($_POST["name"] ?? ''));
    $lastname = strip_tags(trim($_POST["lastname"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $service = strip_tags(trim($_POST["service"] ?? ''));
    $message = strip_tags(trim($_POST["message"] ?? ''));

    // Validación básica
    if (empty($name) || empty($lastname) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($service) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Por favor complete todos los campos correctamente."]);
        exit;
    }

    $recipient = "contacto@profilesge.com";
    $subject = "Nueva consulta desde la web Profiles Group: $service";
    
    $email_content = "Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web.\n\n";
    $email_content .= "Nombre completo: $name $lastname\n";
    $email_content .= "Correo electrónico: $email\n";
    $email_content .= "Servicio de interés: $service\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Cabeceras del correo
    $email_headers = "From: Formulario Web <no-reply@profilesge.com>\r\n";
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();

    // Envío del correo
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Mensaje enviado con éxito. Nos pondremos en contacto pronto."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Lo sentimos, el servidor no pudo enviar tu mensaje. Intenta de nuevo más tarde o escríbenos por WhatsApp."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Método no permitido."]);
}
?>
