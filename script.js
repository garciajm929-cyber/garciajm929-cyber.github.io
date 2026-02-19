// ===================================
// NAVIGATION FUNCTIONALITY
// ===================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Add scrolled class for styling
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
  });
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Change icon
  if (navMenu.classList.contains('active')) {
    mobileToggle.textContent = '✕';
  } else {
    mobileToggle.textContent = '☰';
  }
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars when skills section is visible
      if (entry.target.id === 'skills') {
        animateSkillBars();
      }
    }
  });
}, observerOptions);

// Observe all fade-in elements
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// ===================================
// SKILL BARS ANIMATION
// ===================================

function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');

  skillBars.forEach((bar, index) => {
    const progress = bar.getAttribute('data-progress');

    setTimeout(() => {
      bar.style.width = progress + '%';
    }, index * 100); // Stagger animation
  });
}

// ===================================
// SCROLL TO TOP ON LOGO CLICK
// ===================================

const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===================================
// PARALLAX EFFECT FOR HERO (Optional)
// ===================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxSpeed = 0.5;

  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================

const footerYear = document.querySelector('.footer p');
if (footerYear) {
  const currentYear = new Date().getFullYear();
  footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// ===================================
// PREVENT FLASH OF UNSTYLED CONTENT
// ===================================

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ===================================
// PROJECT CARD INTERACTIONS
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.zIndex = '10';
  });

  card.addEventListener('mouseleave', () => {
    card.style.zIndex = '1';
  });
});

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  // Add loaded class to body for any CSS transitions
  document.body.classList.add('loaded');

  // Set initial active nav link
  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add('active');
  }

  console.log('Portfolio website loaded successfully! 🎉');
});

// ===================================
// LIGHTBOX FUNCTIONALITY
// ===================================

function openLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function openLightbox2() {
  const lightbox = document.getElementById('lightbox2');
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox2() {
  const lightbox = document.getElementById('lightbox2');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function openLightbox3() {
  const lightbox = document.getElementById('lightbox3');
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox3() {
  const lightbox = document.getElementById('lightbox3');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeLightbox2();
    closeLightbox3();
  }
});

// ===================================
// ABOUT SLIDESHOW
// ===================================

let currentSlide = 0;

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Auto-advance slideshow every 4 seconds
setInterval(() => {
  goToSlide(currentSlide + 1);
}, 4000);

// ===================================
// PROJECT CAROUSEL
// ===================================

let currentProject = 0;

function goToProject(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  slides[currentProject].classList.remove('active');
  dots[currentProject].classList.remove('active');

  currentProject = (index + slides.length) % slides.length;

  slides[currentProject].classList.add('active');
  dots[currentProject].classList.add('active');
}

function prevProject() {
  goToProject(currentProject - 1);
}

function nextProject() {
  goToProject(currentProject + 1);
}



