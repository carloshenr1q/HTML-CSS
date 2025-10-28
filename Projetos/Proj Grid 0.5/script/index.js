const toggleLink = document.getElementById('toggle-theme');
const root = document.documentElement;

  // Carrega o tema salvo
if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
}

toggleLink.addEventListener('click', (event) => {
event.preventDefault();
    root.classList.toggle('dark');

    // Salva a preferência
    const currentTheme = root.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});
