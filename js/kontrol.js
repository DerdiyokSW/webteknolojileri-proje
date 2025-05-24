
/**
 * Form Validasyon Modülü - JavaScript ile form doğrulama işlemleri
 * Bu modül, iletişim formundaki tüm alanların doğruluğunu kontrol eder
 * - Ad/Soyad minimum uzunluk kontrolü
 * - E-posta format kontrolü
 * - Telefon numarası format kontrolü (5 ile başlayan 10 haneli)
 * - Zorunlu alan kontrolü
 */

function kontrolEt() {
    // Form elemanlarını al ve boşlukları temizle
    const form = document.getElementById('form');
    const ad = document.getElementById('ad').value.trim();
    const soyad = document.getElementById('soyad').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefon = document.getElementById('telefon').value.trim();
    const konu = document.getElementById('konu').value;
    const mesaj = document.getElementById('mesaj').value.trim();
    const cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    
    let hatalar = [];

    // Ad kontrolü
    if (ad.length < 3) {
        hatalar.push('Ad en az 3 karakter olmalıdır.');
    }

    // Soyad kontrolü
    if (soyad.length < 2) {
        hatalar.push('Soyad en az 2 karakter olmalıdır.');
    }

    // Email kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        hatalar.push('Geçerli bir e-posta adresi giriniz.');
    }    // Telefon kontrolü
    const telefonRegex = /^5[0-9]{9}$/;
    if (!telefonRegex.test(telefon)) {
        hatalar.push('Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır (Örn: 5321234567).');
    }

    // Konu kontrolü
    if (!konu) {
        hatalar.push('Lütfen bir konu seçiniz.');
    }

    // Zorunlu alan kontrolü
    if (!ad || !soyad || !email || !telefon || !konu || !cinsiyet || !mesaj) {
        hatalar.push('Beni haberdar et seçeneği hariç tüm alanlar zorunludur.');
    }

    // Cinsiyet kontrolü
    if (!cinsiyet) {
        hatalar.push('Lütfen cinsiyet seçiniz.');
    }

    // Mesaj kontrolü
    if (mesaj.length < 10) {
        hatalar.push('Mesaj en az 10 karakter olmalıdır.');
    }

    if (hatalar.length > 0) {
        alert('Lütfen aşağıdaki hataları düzeltin:\n\n' + hatalar.join('\n'));
        return false;
    }

    alert('Form başarıyla doğrulandı! Gönder butonuna tıklayarak devam edebilirsiniz.');
    return true;
}
