
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('#nav-links');

  // Mobile navigation menu
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');

      menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
      );

      menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close menu' : 'Open menu'
      );

      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    // Close the menu after selecting a navigation link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
        menuToggle.textContent = '☰';
      });
    });
  }

  // Automatically update the footer year
  const year = document.querySelector('#year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
