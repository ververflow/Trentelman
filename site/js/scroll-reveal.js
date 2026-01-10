/**
 * Scroll Reveal & Page Transitions
 * Uses IntersectionObserver for scroll animations
 * Adds smooth page transitions between pages
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ==========================================
  // PAGE TRANSITIONS
  // ==========================================

  // Add page-loaded class after page loads (for entrance animation)
  function initPageTransitions() {
    // Remove loading state
    document.body.classList.add('page-loaded');

    if (prefersReducedMotion) return;

    // Handle link clicks for exit animation
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');

      // Skip external links, anchors, and special links
      if (!href ||
          href.startsWith('#') ||
          href.startsWith('http') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          link.target === '_blank') {
        return;
      }

      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('page-exit');

        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    });
  }

  // ==========================================
  // SCROLL REVEAL
  // ==========================================

  function initScrollReveal() {
    if (prefersReducedMotion) {
      // Show all elements immediately if user prefers reduced motion
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger').forEach(el => {
        el.classList.add('visible');
      });
      return;
    }

    // Configuration
    const config = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, config);

    // Observe all reveal elements
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'
    );

    revealElements.forEach(el => {
      observer.observe(el);
    });
  }

  // ==========================================
  // INITIALIZE
  // ==========================================

  function init() {
    initPageTransitions();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
