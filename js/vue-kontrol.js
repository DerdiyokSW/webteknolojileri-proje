
/**
 * Form Validasyon Modülü - Vue.js ile form doğrulama işlemleri
 * Vue.js kullanarak reaktif form doğrulama sistemi
 * Özellikler:
 * - Anlık veri takibi ve doğrulama
 * - Merkezi hata yönetimi
 * - Tüm form alanları için kapsamlı kontroller
 */

const { createApp } = Vue;

// Ana Vue uygulaması oluştur
const formValidator = createApp({
    // Reaktif veri modeli tanımla
    data() {
        return {
            formData: {
                ad: '',
                soyad: '',
                email: '',
                telefon: '',
                konu: '',
                cinsiyet: '',
                mesaj: ''
            },
            hatalar: []
        };
    },    // Form doğrulama metodları
    methods: {
        /**
         * Form verilerini doğrula
         * - Tüm alanları kontrol et
         * - Hata mesajlarını yönet
         * - Doğrulama sonucunu döndür
         */
        validateForm() {
            // Form verilerini al
            const form = document.getElementById('form');
            this.formData = {
                ad: form.ad.value.trim(),
                soyad: form.soyad.value.trim(),
                email: form.email.value.trim(),
                telefon: form.telefon.value.trim(),
                konu: form.konu.value,
                cinsiyet: form.querySelector('input[name="cinsiyet"]:checked')?.value,
                mesaj: form.mesaj.value.trim()
            };

            this.hatalar = [];

            // Ad validasyonu
            if (this.formData.ad.length < 3) {
                this.hatalar.push('Ad en az 3 karakter olmalıdır.');
            }

            // Soyad validasyonu
            if (this.formData.soyad.length < 2) {
                this.hatalar.push('Soyad en az 2 karakter olmalıdır.');
            }

            // Email validasyonu
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.formData.email)) {
                this.hatalar.push('Geçerli bir e-posta adresi giriniz.');
            }            // Telefon validasyonu
            const telefonRegex = /^5[0-9]{9}$/;
            if (!telefonRegex.test(this.formData.telefon)) {
                this.hatalar.push('Telefon numarası 5 ile başlamalı ve 10 haneli olmalıdır (Örn: 5321234567).');
            }

            // Konu validasyonu
            if (!this.formData.konu) {
                this.hatalar.push('Lütfen bir konu seçiniz.');
            }

            // Zorunlu alan kontrolü
            if (!this.formData.ad || !this.formData.soyad || !this.formData.email || 
                !this.formData.telefon || !this.formData.konu || !this.formData.cinsiyet || 
                !this.formData.mesaj) {
                this.hatalar.push('Beni haberdar et seçeneği hariç tüm alanlar zorunludur.');
            }

            // Cinsiyet validasyonu
            if (!this.formData.cinsiyet) {
                this.hatalar.push('Lütfen cinsiyet seçiniz.');
            }

            // Mesaj validasyonu
            if (this.formData.mesaj.length < 10) {
                this.hatalar.push('Mesaj en az 10 karakter olmalıdır.');
            }

            if (this.hatalar.length > 0) {
                alert('Lütfen aşağıdaki hataları düzeltin:\n\n' + this.hatalar.join('\n'));
                return false;
            }

            alert('Form Vue.js ile başarıyla doğrulandı! Gönder butonuna tıklayarak devam edebilirsiniz.');
            return true;
        }
    }
}).mount('#form');

function vueKontrol() {
    formValidator.validateForm();
}
