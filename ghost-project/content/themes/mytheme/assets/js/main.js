/**
 * Dalai Lama Foundation — Ghost Theme JS
 * Mobile navigation toggle and smooth interactions
 */
(function () {
    'use strict';

    // Mobile Navigation Toggle
    var navToggle = document.getElementById('nav-toggle');
    var siteNav = document.getElementById('site-nav');

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', function () {
            var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isOpen));
            siteNav.classList.toggle('is-open');

            // Prevent body scroll when nav is open
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        // Close nav when a link is clicked (mobile)
        var navLinks = siteNav.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                siteNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close nav on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
                siteNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                navToggle.focus();
            }
        });
    }
})();
