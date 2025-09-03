// script.js

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});


// MOBILE MENU TOGGLE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("active"); // close menu after click
  });
});

// REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".service-card, .why-card");
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
      el.style.transition = "all 0.6s ease-out";
    }
  });
};
window.addEventListener("scroll", revealOnScroll);


const track = document.querySelector('.carousel-track');
track.innerHTML += track.innerHTML; // Duplique le contenu pour le scroll infini


 

// HERO SLIDER
  const slides = document.querySelectorAll(".hero-slide");
  const prevBtn = document.querySelector(".hero-btn.prev");
  const nextBtn = document.querySelector(".hero-btn.next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }); 




  // Script pour déclencher l'animation quand les cartes entrent dans le viewport
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".services-intro");
  const cards = document.querySelectorAll(".card");
  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image");
  const whyTitle = document.querySelector(".why-us h2");
  const whySubtitle = document.querySelector(".why-us .subtitle");
  const whyItems = document.querySelectorAll(".why-item");
  const testimonialsTitle = document.querySelector(".testimonials .section-title");
  const testimonialsSubtitle = document.querySelector(".testimonials .section-subtitle");
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const contactImage = document.querySelector(".contact-image");
  const contactInfo = document.querySelector(".contact-info");
  const contactDetails = document.querySelectorAll(".contact-details li");
  const footer = document.querySelector("footer");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Services Intro
          if (entry.target.classList.contains("services-intro")) {
            entry.target.classList.add("show");
          } 
          // Cards en cascade
          else if (entry.target.classList.contains("card")) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200);
          } 
          // About (texte + image)
          else if (
            entry.target.classList.contains("about-text") ||
            entry.target.classList.contains("about-image")
          ) {
            entry.target.classList.add("show");
          } 
          // Why-us titre et sous-titre
          else if (
            entry.target === whyTitle ||
            entry.target === whySubtitle
          ) {
            entry.target.classList.add("show");
          } 
          // Why-us items en cascade
          else if (entry.target.classList.contains("why-item")) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 150);
          }
          // Testimonials
          else if (
            entry.target === testimonialsTitle ||
            entry.target === testimonialsSubtitle
          ) {
            entry.target.classList.add("show");
          } 
          else if (entry.target.classList.contains("testimonial-card")) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200);
          }
          // Contact (image + info + détails)
          else if (
            entry.target.classList.contains("contact-image") ||
            entry.target.classList.contains("contact-info")
          ) {
            entry.target.classList.add("show");
          } 
          else if (entry.target.parentElement.classList.contains("contact-details")) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 200);
          }
          // Footer
          else if (entry.target.tagName.toLowerCase() === "footer") {
            entry.target.classList.add("show");
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Services
  observer.observe(intro);
  cards.forEach(card => observer.observe(card));

  // About
  observer.observe(aboutText);
  observer.observe(aboutImage);

  // Why-us
  observer.observe(whyTitle);
  observer.observe(whySubtitle);
  whyItems.forEach(item => observer.observe(item));

  // Testimonials
  observer.observe(testimonialsTitle);
  observer.observe(testimonialsSubtitle);
  testimonialCards.forEach(card => observer.observe(card));

  // Contact
  observer.observe(contactImage);
  observer.observe(contactInfo);
  contactDetails.forEach(item => observer.observe(item));

  // Footer
  observer.observe(footer);
});


