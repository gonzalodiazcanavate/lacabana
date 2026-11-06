<?php
// Destinatario y remitente: el remitente debe ser un buzón del propio dominio para evitar spam.
const DESTINO = '2025lacabanha@gmail.com';
const REMITENTE = 'no-reply@reformaslacabanha.com';

header('Content-Type: application/json; charset=utf-8');

function responder(int $codigo, string $mensaje): never {
    http_response_code($codigo);
    echo json_encode(['ok' => $codigo < 400, 'mensaje' => $mensaje]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(405, 'Método no permitido');
}

// Honeypot: los bots rellenan este campo oculto.
if (!empty($_POST['_gotcha'])) {
    responder(200, 'OK');
}

$limpiar = fn(string $v): string => trim(str_replace(["\r", "\n"], ' ', strip_tags($v)));

$nombre = $limpiar($_POST['nombre'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefono = $limpiar($_POST['telefono'] ?? '');
$mensaje = trim(strip_tags($_POST['mensaje'] ?? ''));

if ($nombre === '' || $mensaje === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    responder(422, 'Datos no válidos');
}

if (mb_strlen($nombre) > 100 || mb_strlen($telefono) > 30 || mb_strlen($mensaje) > 5000) {
    responder(422, 'Datos demasiado largos');
}

$cuerpo = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\n\n$mensaje\n";

$cabeceras = [
    'From' => 'Web La Cabaña <' . REMITENTE . '>',
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'PHP',
];

$ok = mail(
    DESTINO,
    '=?UTF-8?B?' . base64_encode('Solicitud de presupuesto desde la web') . '?=',
    $cuerpo,
    $cabeceras
);

$ok ? responder(200, 'Enviado') : responder(500, 'No se pudo enviar');
