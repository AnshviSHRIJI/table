// hamburger toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('#navmenu');

burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
});

// alerts — JS adds .hidden, CSS handles the fade/collapse
document.querySelectorAll('.alert button').forEach(btn => {
  btn.addEventListener('click', () => {
    const alert = btn.closest('.alert');
    alert.classList.add('hidden');
    alert.addEventListener('transitionend', () => alert.remove(), { once: true });
  });
});

// accordion
document.querySelectorAll('.item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // close all
    document.querySelectorAll('.item button').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).classList.remove('open');
    });

    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      document.getElementById(btn.getAttribute('aria-controls')).classList.add('open');
    }
  });
});