/* Glorious Morning Consulting — Main JS */

(function () {
  'use strict';

  /* Mobile navigation toggle */
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    /* Close when a nav link is clicked */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close when focus moves outside the nav */
    document.addEventListener('focusin', function (e) {
      const header = document.querySelector('.site-header');
      if (header && !header.contains(e.target)) {
        menu.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Formspree contact form with AJAX */
  const form = document.getElementById('contactForm');
  if (form) {
    const btn    = document.getElementById('submitButton');
    const errEl  = document.getElementById('formError');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending…';
      }

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (res.ok) {
          form.innerHTML =
            '<div class="form-success" role="status">' +
            '<strong>Inquiry received.</strong><br>' +
            'Thank you for reaching out. The principal will review your inquiry and respond in due course — likely in the afternoon.' +
            '</div>';
        } else {
          throw new Error('Submission failed: ' + res.status);
        }
      } catch (err) {
        console.error(err);
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Submit Inquiry';
        }
        if (errEl) {
          errEl.removeAttribute('hidden');
        }
      }
    });
  }
})();
