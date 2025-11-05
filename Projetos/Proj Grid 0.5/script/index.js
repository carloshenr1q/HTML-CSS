const toggleLink = document.getElementById('toggle-theme');
const root = document.documentElement;
const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');

// Função para atualizar a visibilidade dos ícones
function updateIcons() {
  const isDark = root.classList.contains('dark');
  moonIcon.style.display = isDark ? 'none' : 'inline-block';
  sunIcon.style.display = isDark ? 'inline-block' : 'none';
}

// Carrega o tema salvo
if (localStorage.getItem('theme') === 'dark') {
  root.classList.add('dark');
}
updateIcons(); // atualiza ícones ao carregar

toggleLink.addEventListener('click', (event) => {
  event.preventDefault();
  root.classList.toggle('dark');

  // Salva a preferência
  const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);

  updateIcons(); // alterna ícones
});
