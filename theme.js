const themeBtns = document.querySelectorAll('.theme');

const handleThemeChange = (e) => {
  const theme = e.currentTarget.dataset.theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('myCustomTheme', theme);
}

// event listeners
themeBtns.forEach(t => t.addEventListener('click', handleThemeChange))

window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('myCustomTheme');
  theme && document.documentElement.setAttribute('data-theme', theme);
})