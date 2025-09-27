'use strict';

const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('[data-section]');
const yearNode = document.querySelector('[data-year]');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const closeNav = () => {
  siteNav?.classList.remove('is-open');
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'false');
  }
};

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('is-open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

const activateLink = (id) => {
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.slice(1) === id) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
};

if (sections.length) {
  activateLink(sections[0].id);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateLink(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener('scroll', () => {
  if (!header) return;
  const currentY = window.scrollY;
  if (currentY > 24) {
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});

const formspreeForm = document.querySelector('[data-formspree]');
const statusNode = document.querySelector('[data-form-status]');

let statusTimeout;

const setStatus = (message, isError = false) => {
  if (!statusNode) {
    window.alert(message);
    return;
  }
  if (statusTimeout) {
    clearTimeout(statusTimeout);
  }
  statusNode.textContent = message;
  statusNode.hidden = false;
  statusNode.classList.toggle('is-error', Boolean(isError));
  if (!isError) {
    statusTimeout = setTimeout(() => {
      clearStatus();
    }, 2000);
  }
};

const clearStatus = () => {
  if (statusNode) {
    statusNode.hidden = true;
    statusNode.classList.remove('is-error');
  }
  if (statusTimeout) {
    clearTimeout(statusTimeout);
    statusTimeout = null;
  }
};

if (formspreeForm) {
  formspreeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearStatus();

    const submitBtn = formspreeForm.querySelector('[data-form-submit]');
    const originalLabel = submitBtn?.textContent;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    try {
      const response = await fetch(formspreeForm.action, {
        method: 'POST',
        body: new FormData(formspreeForm),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        formspreeForm.reset();
        setStatus('Thanks! Your message was sent.');
      } else {
        setStatus('Oops, something went wrong. Please try again later.', true);
      }
    } catch (error) {
      setStatus('Network error. Please try again later.', true);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel ?? 'Send message';
      }
    }
  });
}
