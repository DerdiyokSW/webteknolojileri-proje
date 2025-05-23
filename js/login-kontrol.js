// js/login-kontrol.js

function validateForm() {
  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Boşluk kontrolü
  if (email === "" || password === "") {
    alert("Lütfen tüm alanları doldurun.");
    return false;
  }

  // Şifre formatı kontrolü
  const passwordPattern = /^[a-zA-Z][0-9]{2}[a-zA-Z0-9]*$/;
  const twoDigits = parseInt(password.substr(1, 2));
  
  if (!passwordPattern.test(password)) {
    alert("Şifre bir harf ile başlamalı ve sonrasında iki rakam içermelidir.");
    return false;
  }
  
  if (twoDigits < 0 || twoDigits > 25) {
    alert("Şifredeki rakamlar 00-25 aralığında olmalıdır.");
    return false;
  }

  // E-posta kontrolü
  const emailPattern = /^[a-zA-Z0-9]+@(ogr\.)?sakarya\.edu\.tr$/;
  if (!emailPattern.test(email)) {
    alert("Geçerli bir sakarya.edu.tr veya ogr.sakarya.edu.tr mail adresi giriniz.");
    return false;
  }

  return true; // Form gönderilebilir
}
