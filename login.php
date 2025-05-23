<?php
// Formdan gelen verileri al
$kullanici = $_POST['username'];
$sifre = $_POST['password'];

// Kriter: şifre, kullanıcı adının '@' öncesi kısmı ile aynı olmalı
$dogru_sifre = explode("@", $kullanici)[0];

if ($sifre === $dogru_sifre) {
  echo "<h2 style='text-align:center;'>Hoşgeldiniz $sifre</h2>";
} else {
  header("Location: login.html");
  exit();
}
?>
