const readout = document.querySelector('#readout');
const projects = document.querySelectorAll('.project');
const defaultReadout = '4 PROJECTS';

document.querySelector('#year').textContent = new Date().getFullYear();

projects.forEach((project) => {
  const show = () => { readout.textContent = project.dataset.readout; };
  const reset = () => { readout.textContent = defaultReadout; };

  project.addEventListener('mouseenter', show);
  project.addEventListener('focus', show);
  project.addEventListener('mouseleave', reset);
  project.addEventListener('blur', reset);
});
