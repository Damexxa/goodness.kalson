function toggleMenu() {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }
  document.addEventListener("DOMContentLoaded", function () {
    // ✅ Initialize AOS (Animate On Scroll)
    AOS.init();

    // ✅ Typewriter Effect
    const texts = ["Look Fresh", "Feel Confident", "Welcome to G.KALSON"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;

    function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];

      if (isDeleting) {
        letter = currentText.slice(0, --index);
      } else {
        letter = currentText.slice(0, ++index);
      }

      document.getElementById("typewriter").textContent = letter;

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && letter.length === currentText.length) {
        speed = 1500;
        isDeleting = true;
      } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        speed = 500;
      }

      setTimeout(type, speed);
    }

    type(); // Start typewriter

    // ✅ Toggle Navbar Menu (Mobile View)
    window.toggleMenu = function () {
      const nav = document.getElementById('navLinks');
      nav.classList.toggle('active');
    }

    // ✅ Testimonial Section Rotation
    const testimonials = document.querySelectorAll('.testimonial');
    const section = document.getElementById('testimonial-section');
    let current = 0;
    let intervalStarted = false;

    function rotateTestimonials() {
      testimonials[current].classList.remove('active');
      current = (current + 1) % testimonials.length;
      testimonials[current].classList.add('active');
    }

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function checkAndStartRotation() {
      if (isInViewport(section) && !intervalStarted) {
        intervalStarted = true;
        setInterval(rotateTestimonials, 10000); // every 10 seconds
      }
    }

    window.addEventListener('scroll', checkAndStartRotation);

    // ✅ Header Hide on Scroll Down / Show on Scroll Up
    let lastScrollY = window.scrollY;
    const header = document.getElementById('mainHeader');

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.top = "-100px";
      } else {
        // Scrolling up
        header.style.top = "0";
      }
      lastScrollY = window.scrollY;
    });

    // ✅ Expandable Image Containers
    window.toggleExpand = function (clicked) {
      const containers = document.querySelectorAll('.image-container');
      containers.forEach(c => {
        if (c !== clicked) c.classList.remove('expanded');
      });
      clicked.classList.toggle('expanded');
    }
  });
