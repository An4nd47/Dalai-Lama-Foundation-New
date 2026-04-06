/**
 * Dalai Lama Foundation — Ghost Theme JS
 * Premium animations, scroll reveals, counters, parallax
 */
(function () {
    'use strict';

    // =========================================
    // Mobile Navigation Toggle
    // =========================================
    var navToggle = document.getElementById('nav-toggle');
    var siteNav = document.getElementById('site-nav');

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', function () {
            var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isOpen));
            siteNav.classList.toggle('is-open');
            document.body.style.overflow = isOpen ? '' : 'hidden';
        });

        var navLinks = siteNav.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                siteNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
                siteNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                navToggle.focus();
            }
        });
    }

    // =========================================
    // Scroll Reveal (Intersection Observer)
    // =========================================
    var revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(function (el, index) {
            // Stagger children within grids
            var parent = el.closest('.stats-grid, .focus-areas-grid, .programs-scroller-inner, .stories-scroller-inner');
            if (parent) {
                var siblings = parent.querySelectorAll('.reveal');
                var idx = Array.prototype.indexOf.call(siblings, el);
                el.style.transitionDelay = (idx * 0.1) + 's';
            }
            revealObserver.observe(el);
        });
    } else {
        // Fallback: show everything immediately
        revealElements.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // =========================================
    // Animated Number Counter
    // =========================================
    var statValues = document.querySelectorAll('.stat-value[data-count]');
    if (statValues.length > 0 && 'IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statValues.forEach(function (el) { counterObserver.observe(el); });
    }

    function animateCounter(el) {
        var raw = el.getAttribute('data-count') || el.textContent;
        var finalText = el.textContent.trim();
        // Extract number and any suffix/prefix (e.g. "5000+" or "50+")
        var match = finalText.match(/^([^0-9]*)([0-9,]+)(.*)$/);
        if (!match) return;

        var prefix = match[1];
        var numStr = match[2].replace(/,/g, '');
        var suffix = match[3];
        var target = parseInt(numStr, 10);
        if (isNaN(target)) return;

        var duration = 2000;
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = Math.min((timestamp - start) / duration, 1);
            // Ease out cubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = finalText; // restore exact original
            }
        }
        requestAnimationFrame(step);
    }

    // =========================================
    // Header Scroll Enhancement
    // =========================================
    var header = document.querySelector('.site-header');
    if (header) {
        var scrollThreshold = 100;
        var ticking = false;

        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    if (window.scrollY > scrollThreshold) {
                        header.classList.add('is-scrolled');
                    } else {
                        header.classList.remove('is-scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // =========================================
    // Hero Parallax
    // =========================================
    var heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function () {
            var scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroSection.style.backgroundPositionY = (scrolled * 0.4) + 'px';
            }
        });
    }

    // =========================================
    // Stories Scroller Interactions
    // =========================================
    var scrollerInner = document.querySelector('.stories-scroller-inner');
    var prevBtn = document.querySelector('.scroller-btn.prev');
    var nextBtn = document.querySelector('.scroller-btn.next');

    if (scrollerInner && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', function() {
            var card = scrollerInner.querySelector('.story-card-inner');
            var amount = card ? card.offsetWidth + 24 : 400;
            scrollerInner.scrollBy({ left: amount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', function() {
            var card = scrollerInner.querySelector('.story-card-inner');
            var amount = card ? card.offsetWidth + 24 : 400;
            scrollerInner.scrollBy({ left: -amount, behavior: 'smooth' });
        });
    }

    // =========================================
    // Programs Scroller Interactions
    // =========================================
    var progScrollerInner = document.querySelector('.programs-scroller-inner');
    var progPrevBtn = document.querySelector('.scroller-btn.programs-prev');
    var progNextBtn = document.querySelector('.scroller-btn.programs-next');

    if (progScrollerInner && progPrevBtn && progNextBtn) {
        progNextBtn.addEventListener('click', function() {
            var card = progScrollerInner.querySelector('.program-scroller-item');
            var amount = card ? card.offsetWidth + 32 : 350;
            progScrollerInner.scrollBy({ left: amount, behavior: 'smooth' });
        });

        progPrevBtn.addEventListener('click', function() {
            var card = progScrollerInner.querySelector('.program-scroller-item');
            var amount = card ? card.offsetWidth + 32 : 350;
            progScrollerInner.scrollBy({ left: -amount, behavior: 'smooth' });
        });
    }

    // =========================================
    // Smooth scroll for anchor links
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // =========================================
    // Back to Top Button
    // =========================================
    var backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                backToTop.classList.add('is-visible');
            } else {
                backToTop.classList.remove('is-visible');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

})();
