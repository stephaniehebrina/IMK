document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    const phoneNumber = '6281255538431'; // Ganti dengan nomor WhatsApp Anda (tanpa +)

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.product;
            const message = `Halo, saya tertarik dengan "${productName}" yang saya lihat di website Rose & Thorn. Bisakah Anda memberikan informasi lebih lanjut?`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});