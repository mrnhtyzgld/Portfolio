const root = document.body;
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.theme-toggle');
const metaTheme = document.querySelector('meta[name="theme-color"]');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') setTheme(true);

toggle.addEventListener('click', () => {
  const dark = !root.classList.contains('dark');
  setTheme(dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
});

function setTheme(dark) {
  root.classList.toggle('dark', dark);
  toggle.setAttribute('aria-pressed', String(dark));
  toggle.setAttribute('aria-label', dark ? 'Açık temayı aç' : 'Koyu temayı aç');
  metaTheme.setAttribute('content', dark ? '#181816' : '#f2efe7');
}

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 18);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 80}ms`;
  observer.observe(element);
});

document.querySelector('#year').textContent = new Date().getFullYear();

