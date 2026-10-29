// AnyStream promotional site: small progressive enhancements only.
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // ---------- Mobile navigation ----------
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');

    function setNav(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    }

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        setNav(toggle.getAttribute('aria-expanded') !== 'true');
      });
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) setNav(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          setNav(false);
          toggle.focus();
        }
      });
    }

    // ---------- Screenshot lightbox ----------
    var dialog = document.getElementById('lightbox');
    var dialogImg = document.getElementById('lightbox-img');
    var dialogCaption = document.getElementById('lightbox-caption');

    if (dialog && typeof dialog.showModal === 'function') {
      document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          var name = trigger.getAttribute('data-lightbox');
          var img = trigger.querySelector('img');
          var caption = trigger.closest('figure').querySelector('figcaption > span');
          dialogImg.src = '/assets/img/screens/' + name + '-1672.webp';
          dialogImg.alt = img ? img.alt : '';
          dialogCaption.textContent = caption ? caption.textContent : '';
          dialog.showModal();
        });
      });

      // Close when the backdrop is clicked.
      dialog.addEventListener('click', function (e) {
        if (e.target === dialog) dialog.close();
      });
    } else {
      // No <dialog> support: leave screenshots as plain, non-interactive images.
      document.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
        trigger.disabled = true;
        trigger.style.cursor = 'default';
      });
    }

    // ---------- Subscribe form (not connected yet) ----------
    // TODO before publishing: post to the real email provider and remove the preview message.
    var form = document.getElementById('subscribe-form');
    if (form) {
      var email = form.querySelector('#subscribe-email');
      var consent = form.querySelector('#subscribe-consent');
      var emailError = form.querySelector('#subscribe-email-error');
      var consentError = form.querySelector('#subscribe-consent-error');
      var status = form.querySelector('#subscribe-status');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var emailOk = email.value.trim() !== '' && email.validity.valid;
        var consentOk = consent.checked;

        emailError.hidden = emailOk;
        email.setAttribute('aria-invalid', String(!emailOk));
        consentError.hidden = consentOk;
        consent.setAttribute('aria-invalid', String(!consentOk));

        if (!emailOk) { email.focus(); status.textContent = ''; return; }
        if (!consentOk) { consent.focus(); status.textContent = ''; return; }

        status.textContent = 'Thanks for your interest. Sign-up is not open yet, so your email address has not been sent or stored.';
      });
    }

    // Placeholder links: avoid jumping to a missing anchor.
    document.querySelectorAll('[data-placeholder-link]').forEach(function (link) {
      link.addEventListener('click', function (e) { e.preventDefault(); });
    });

    var year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
