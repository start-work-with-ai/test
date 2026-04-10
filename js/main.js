/* ===================================================
   Wanderly — Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Mobile Navigation Toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Header shadow on scroll ----
  const header = document.getElementById('header');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---- Contact form handling ----
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      // Basic client-side validation
      if (!data.name || !data.email) {
        showFormMessage(contactForm, 'Please fill in all required fields.', 'error');
        return;
      }

      // In a real app this would POST to a server.
      // For now we'll just show a success message.
      showFormMessage(
        contactForm,
        'Thank you! We\'ll get back to you within 24 hours.',
        'success'
      );
      contactForm.reset();
    });
  }

  /**
   * Display a temporary message below the given form.
   * @param {HTMLFormElement} form
   * @param {string} text
   * @param {'success' | 'error'} type
   */
  function showFormMessage(form, text, type) {
    // Remove existing message if present
    const existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = `form-message form-message--${type}`;
    msg.textContent = text;
    msg.style.marginTop = '1rem';
    msg.style.padding = '0.75rem 1rem';
    msg.style.borderRadius = '8px';
    msg.style.fontWeight = '600';
    msg.style.fontSize = '0.95rem';

    if (type === 'success') {
      msg.style.background = '#e6f5f0';
      msg.style.color = '#145f4b';
    } else {
      msg.style.background = '#ffeaea';
      msg.style.color = '#c0392b';
    }

    form.appendChild(msg);

    // Auto-remove after 5 seconds
    setTimeout(() => msg.remove(), 5000);
  }

  // ---- Reveal-on-scroll animation ----
  const revealElements = document.querySelectorAll(
    '.tour-card, .testimonial-card, .about-grid, .contact-grid'
  );

  if ('IntersectionObserver' in window && revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
});


