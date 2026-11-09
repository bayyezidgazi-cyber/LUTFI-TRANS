// GANTI nomor ini dengan nomor WhatsApp bisnis Anda.
const WHATSAPP_NUMBER = "6281234567890"; // Format internasional, tanpa + atau spasi.

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelector("#whatsapp-cta").href = whatsappUrl(
  "Halo LUTFI TRANS HOLIDAY SEALU, saya ingin bertanya tentang layanan rental mobil."
);
document.querySelector("#floating-wa").href = whatsappUrl(
  "Halo, saya ingin konsultasi rental mobil."
);

document.querySelectorAll(".booking-link").forEach(link => {
  link.href = whatsappUrl(
    `Halo LUTFI TRANS HOLIDAY SEALU, saya tertarik dengan ${link.dataset.car}. Mohon info ketersediaan dan harga rentalnya.`
  );
  link.target = "_blank";
  link.rel = "noopener";
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Animasi elemen saat masuk ke layar.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));