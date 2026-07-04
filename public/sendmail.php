<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Accepter uniquement les requêtes POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Récupérer le corps de la requête JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON payload"]);
    exit;
}

// Nettoyer les données
$name = htmlspecialchars(strip_tags(trim($data["name"] ?? '')));
$email = filter_var(trim($data["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($data["message"] ?? '')));

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Veuillez remplir tous les champs."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "L'adresse email n'est pas valide."]);
    exit;
}

// Configuration de l'email
$to = "contact@okamilink.com";
$subject = "Nouveau message de contact - Okamilink OS : $name";

$email_content = "Vous avez reçu un nouveau message depuis le terminal Okamilink.\n\n";
$email_content .= "Nom: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

$headers = "From: terminal@okamilink.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Envoyer l'email
if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Message envoyé avec succès."]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Le serveur n'a pas pu envoyer l'email."]);
}
?>
