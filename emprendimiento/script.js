document.addEventListener("DOMContentLoaded", () => {
  console.log("Portal C-137 iniciado exitosamente. Creado por Santiago David Quispe Choque.");

  // Efecto suave al hacer clic en los enlaces del menú
  const links = document.querySelectorAll('.nav a');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Animación interactiva en las tarjetas del portafolio al pasar el ratón
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = "all 0.3s ease";
    });
  });
});