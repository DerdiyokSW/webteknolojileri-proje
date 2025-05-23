// js/login-kontrol.js

function validateForm() {
  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Boşluk kontrolü
  if (email === "" || password === "") {
    alert("Lütfen tüm alanları doldurun.");
    return false;
  }
  // E-posta kontrolü
  const emailPattern = /^[a-zA-Z][0-9]{2}[a-zA-Z0-9]*@(ogr\.)?sakarya\.edu\.tr$/;
  if (!emailPattern.test(email)) {
    alert("Geçerli bir sakarya.edu.tr veya ogr.sakarya.edu.tr mail adresi giriniz.\nFormat: [harf][2 rakam][...]@[ogr.]sakarya.edu.tr");
    return false;
  }

  return true; // Form gönderilebilir
}
