    // menú responsive
    const menuBtn = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // formulario simulación (solo feedback visual)
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            if(!nombre || !email) {
                feedback.innerHTML = '⚠️ Por favor completa nombre y correo.';
                feedback.style.color = '#f9738d';
                return;
            }
            feedback.innerHTML = '✅ ¡Mensaje enviado! Nancy te responderá a la brevedad. ✨';
            feedback.style.color = '#6f9e6f';
            form.reset();
            setTimeout(() => { feedback.innerHTML = ''; }, 4000);
        });
    }

    // smooth scroll (mejora de experiencia)
    document.querySelectorAll('.nav-links a, .btn-primary[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetEl = document.querySelector(targetId);
                if(targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if(navLinks.classList.contains('show')) navLinks.classList.remove('show');
                }
            }
        });
    });

  
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));
document.addEventListener("DOMContentLoaded", () => {

    const projects = document.querySelectorAll('.project');
    let index = 0;

    function showProject(i) {
        projects.forEach(p => p.classList.remove('active'));
        projects[i].classList.add('active');
    }

    document.getElementById('next').addEventListener('click', () => {
        index = (index + 1) % projects.length;
        showProject(index);
    });

    document.getElementById('prev').addEventListener('click', () => {
        index = (index - 1 + projects.length) % projects.length;
        showProject(index);
    });

});