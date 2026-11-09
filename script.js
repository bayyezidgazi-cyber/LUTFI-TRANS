// PENTING: Ganti nomor di bawah dengan nomor WhatsApp bisnis Anda.
// Gunakan kode negara 62, tanpa tanda +, spasi, atau angka 0 di depan.
const WHATSAPP_NUMBER = "6281234567890";

const makeWhatsAppLink = message =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
  const opened = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Tombol tanya pada setiap kartu mobil.
document.querySelectorAll(".car-ask").forEach(button => {
  button.addEventListener("click", () => {
    const car = button.dataset.car;
    const message = `Halo LUTFI TRANS HOLIDAY SEALU, saya ingin bertanya tentang ${car}. Mohon informasi harga dan ketersediaannya.`;
    window.open(makeWhatsAppLink(message), "_blank", "noopener");
  });
});

// Form pemesanan menyusun pesan otomatis untuk WhatsApp.
const bookingForm = document.querySelector("#booking-form");
bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.querySelector("#customer-name").value.trim();
  const car = document.querySelector("#customer-car").value;
  const date = document.querySelector("#customer-date").value;
  const destination = document.querySelector("#customer-destination").value.trim();
  const note = document.querySelector("#customer-note").value.trim();

  if (!name || !car || !date || !destination) {
    alert("Mohon lengkapi nama, kendaraan, tanggal, dan tujuan perjalanan.");
    return;
  }

  const formattedDate = new Date(`${date}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric"
  });

  const message = [
    "Halo LUTFI TRANS HOLIDAY SEALU, saya ingin melakukan pemesanan rental mobil.",
    "",
    `Nama: ${name}`,
    `Kendaraan: ${car}`,
    `Tanggal berangkat: ${formattedDate}`,
    `Tujuan: ${destination}`,
    `Catatan: ${note || "-"}`,
    "",
    "Mohon informasi harga dan ketersediaannya. Terima kasih."
  ].join("\n");

  window.open(makeWhatsAppLink(message), "_blank", "noopener");
});

// Tombol WhatsApp mengambang.
document.querySelector("#wa-float").href = makeWhatsAppLink(
  "Halo LUTFI TRANS HOLIDAY SEALU, saya ingin konsultasi rental mobil."
);

// Tanggal minimal adalah hari ini.
const dateInput = document.querySelector("#customer-date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split("T")[0];
dateInput.min = localToday;

document.querySelector("#year").textContent = new Date().getFullYear();