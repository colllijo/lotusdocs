//Low light switcher
const mode = document.getElementById('mode');

if (mode !== null) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-dark-mode', '');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.removeAttribute('data-dark-mode');
        }
    })
    mode.addEventListener('click', () => {
        document.documentElement.toggleAttribute('data-dark-mode');

        const theme = document.documentElement.hasAttribute('data-dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        updateTheme(theme)
    });
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-dark-mode', '');
    } else {
        document.documentElement.removeAttribute('data-dark-mode');
    }
}

function updateTheme(theme) {
  // Update theme for mermaid
  if (mermaid) {
    window.mermaidConfig.theme = theme === 'dark' ? "dark" : "default"
    mermaid.mermaidAPI.initialize(window.mermaidConfig);

    const diagrams = document.querySelectorAll('.mermaid');
    diagrams.forEach(diagram => {
        if (diagram.dataset.originalContent) {
            diagram.innerHTML = diagram.dataset.originalContent;
            delete diagram.dataset.processed;
        }
    });

    mermaid.run();
  }
}
