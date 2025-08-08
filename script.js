// Scroll effect for navbar
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const toggleBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("nav-links");
const dropdown = document.querySelector(".dropdown");

// Toggle mobile menu open/close
toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggleBtn.classList.toggle("open");
  toggleBtn.textContent = toggleBtn.classList.contains("open") ? "✕" : "☰";
});

// Toggle dropdown submenu (on click in mobile)
dropdown.querySelector('a').addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault(); // prevent href="#"
    dropdown.classList.toggle("open");
  }
});

// Collapse full mobile menu when any submenu or normal link is clicked
document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    const parentIsDropdownToggle = link.parentElement.classList.contains("dropdown");
    const insideDropdown = link.closest(".dropdown-content");

    if (window.innerWidth <= 768 && !parentIsDropdownToggle) {
      navLinks.classList.remove("show");
      toggleBtn.classList.remove("open");
      toggleBtn.textContent = "☰";
    }

    if (window.innerWidth <= 768 && insideDropdown) {
      navLinks.classList.remove("show");
      toggleBtn.classList.remove("open");
      toggleBtn.textContent = "☰";
      dropdown.classList.remove("open"); // collapse dropdown too
    }
  });
});
const scrollElements = document.querySelectorAll('.scroll-fade');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, appearOptions);

scrollElements.forEach(el => {
  appearOnScroll.observe(el);
});

const menuImages = document.querySelectorAll(".menu-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

menuImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

(function() {
  const scrollElements = document.querySelectorAll('.scroll-fade');

  if (!window.scrollFadeObserver) {
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    scrollElements.forEach(el => {
      appearOnScroll.observe(el);
    });

    // Store in global to prevent redeclaration
    window.scrollFadeObserver = appearOnScroll;
  }
})();

(function () {
  const scrollElements = document.querySelectorAll('.scroll-fade');

  if (!window.scrollFadeObserver) {
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    scrollElements.forEach(el => {
      appearOnScroll.observe(el);
    });

    window.scrollFadeObserver = appearOnScroll;
  }
})();

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });