<?php
// Fallback entry point for Apache/LiteSpeed web servers (Hostinger)
$distFile = __DIR__ . '/frontend/dist/index.html';

if (file_exists($distFile)) {
    // If request is for a static asset, serve with correct Content-Type
    $requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $assetPath = __DIR__ . '/frontend/dist' . $requestUri;
    
    if ($requestUri !== '/' && file_exists($assetPath) && is_file($assetPath)) {
        $ext = pathinfo($assetPath, PATHINFO_EXTENSION);
        $mimes = [
            'css' => 'text/css',
            'js' => 'application/javascript',
            'png' => 'image/png',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'json' => 'application/json',
            'txt' => 'text/plain',
            'xml' => 'application/xml',
        ];
        if (isset($mimes[$ext])) {
            header("Content-Type: {$mimes[$ext]}");
        }
        readfile($assetPath);
        exit;
    }

    // Serve SPA index.html
    header('Content-Type: text/html; charset=UTF-8');
    readfile($distFile);
    exit;
} else {
    header('HTTP/1.1 503 Service Unavailable');
    echo 'Codemario Infotech: Application build initializing... Please check back in a few seconds.';
}
