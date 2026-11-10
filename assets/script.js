
// =====================================
// FUNGSI TOMBOL PESAN
// =====================================

const tombolPesan = document.getElementById("tombolPesan");
const pesan = document.getElementById("pesan");

if (tombolPesan && pesan) {
    tombolPesan.addEventListener("click", function () {
        pesan.textContent =
            "Berhasil! File JavaScript sudah terhubung.";
    });
}


// =====================================
// FUNGSI FORMULIR KONTAK
// =====================================

const contactForm = document.getElementById("contactForm");
const statusForm = document.getElementById("statusForm");

if (contactForm && statusForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesanKontak = document.getElementById("pesanKontak").value.trim();

        if (nama === "" || email === "" || pesanKontak === "") {
            statusForm.textContent = "Semua kolom harus diisi!";
            return;
        }

        statusForm.textContent =
            "Terima kasih, " + nama +
            "! Pesan kamu berhasil diproses.";

        contactForm.reset();
    });
}
