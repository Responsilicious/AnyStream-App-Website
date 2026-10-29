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

    // Placeholder links: avoid jumping to a missing anchor.
    document.querySelectorAll('[data-placeholder-link]').forEach(function (link) {
      link.addEventListener('click', function (e) { e.preventDefault(); });
    });

    var year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
