<?php
// Formdan gelen verileri al
$kullanici = $_POST['username'];
$sifre = $_POST['password'];

// Kriter: şifre, kullanıcı adının '@' öncesi kısmı ile aynı olmalı
$dogru_sifre = explode("@", $kullanici)[0];

if ($sifre === $dogru_sifre) {
    ?>
    <!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Giriş Başarılı</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <header class="bg-dark text-white text-center p-4">
            <h1>Hoş Geldiniz</h1>
        </header>

        <main class="container mt-4 text-center">
            <div class="alert alert-success mb-4">
                <h2>Hoşgeldiniz, <?php echo htmlspecialchars($sifre); ?></h2>
            </div>
            <h1 class="display-4 text-success">GİRİŞ YAPILDI</h1>
            <div class="mt-4">
                <a href="index.html" class="btn btn-primary">Ana Sayfaya Dön</a>
            </div>
        </main>

        <footer class="bg-light text-center p-3 mt-5">
            <p>&copy; 2025 | Web Teknolojileri Projesi</p>
        </footer>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    <?php
} else {
    header("Location: login.html");
    exit();
}
?>
