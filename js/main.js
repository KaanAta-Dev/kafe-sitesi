// ===== Mobil menü =====
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-header nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

// ===== Menü sekmeleri =====
const tabButtons = document.querySelectorAll(".tab-btn");
const menuPanels = document.querySelectorAll(".menu-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    menuPanels.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    const category = button.dataset.category;
    document.getElementById(category).classList.add("active");
  });
});

// ===== Lightbox =====
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// ===== Rezervasyon formu =====
const form = document.querySelector(".reservation-form");
const formMessage = document.querySelector(".form-message");

const dateInput = document.getElementById("date");
const now = new Date();

const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("nameSurname").value;
  const people = document.getElementById("numberOfPeople").value;

  formMessage.textContent = `Teşekkürler ${name}! ${people} kişilik rezervasyon talebiniz alındı. Onaylamak için sizi arayacağız.`;

  form.reset();
});
