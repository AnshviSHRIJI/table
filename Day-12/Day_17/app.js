// mobile nav toggle
var navToggle = document.querySelector('.nav-toggle');
var navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close the menu once a link is picked, so it doesn't stay open on mobile
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// back to top button
var backToTop = document.querySelector('.back-to-top');

if (backToTop) {
  window.addEventListener('scroll', function () {
    backToTop.classList.toggle('is-visible', window.scrollY > 400);
  });

  backToTop.addEventListener('click', function () {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

// form handling shared by the sign-up form and the contact form.
// native required/aria-required attributes do most of the validation work;
// this just adds the one check HTML can't do on its own (the checkbox
// group on the sign-up form) and reveals the success message by toggling
// a class, leaving the styling and transition to CSS.
function setupForm(formId, successId) {
  var form = document.getElementById(formId);
  if (!form) return;

  var success = document.getElementById(successId);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var checkboxGroup = form.querySelector('.checkbox-group');
    var errorMessage = form.querySelector('.form-error');

    if (checkboxGroup) {
      var checked = checkboxGroup.querySelectorAll('input[type="checkbox"]:checked');
      if (checked.length === 0) {
        if (errorMessage) errorMessage.hidden = false;
        return;
      }
      if (errorMessage) errorMessage.hidden = true;
    }

    form.reset();
    success.classList.add('is-visible');
  });
}

setupForm('signup-form', 'signup-success');
setupForm('contact-form', 'contact-success');