// ── MOBILE MENU ──
function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
}

// Fecha o menu mobile ao clicar fora
document.addEventListener('click', function (e) {
  const menu = document.getElementById('navMobile');
  const btn = document.querySelector('.hamburger');
  if (
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !btn.contains(e.target)
  ) {
    menu.classList.remove('open');
  }
});

// ── FORMULÁRIO DE CONTATO ──
function sendForm(e) {
  e.preventDefault();
  const nome     = document.getElementById('nome').value;
  const email    = document.getElementById('email').value;
  const assunto  = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;
  const body     = `De: ${nome} (${email})\n\n${mensagem}`;
  window.location.href = `mailto:juanmxavieer@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
}

// ── ANIMAÇÃO DAS BARRAS DE SKILL ──
// Salva as larguras originais e zera para animar depois
const bars   = document.querySelectorAll('.skill-bar-fill');
const widths = [];

bars.forEach(b => {
  widths.push(b.style.width);
  b.style.width = '0';
});

// Dispara a animação quando a seção de skills entrar na tela
const skillSection = document.getElementById('skills');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bars.forEach((b, i) => {
        b.style.transition = `width 1s ${i * 0.1}s ease`;
        b.style.width = widths[i];
      });
      skillObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

skillObserver.observe(skillSection);
