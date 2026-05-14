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



const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // active button
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    skillCards.forEach(card => {

      if(filter === "all") {
        card.classList.remove("hide");
      } else {
        if(card.classList.contains(filter)) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      }

    });

  });

});



const projects = {

  honda: {
    title: "Honda",
    subtitle: "CRM + Salesforce + Wordpress +  Angular + Mantenimiento web",

    image: "imagenes/honda.png",

description: `
  Participé en el mantenimiento, desarrollo y mejora continua de múltiples plataformas web de Honda Perú.

  Trabajé en la maquetación y desarrollo de nuevas secciones para las webs de motos, autos y productos de fuerza, además de implementar mejoras visuales y optimización de performance.

  Desarrollé landing pages orientadas a campañas comerciales y generación de leads, integrando formularios conectados con CRM y Salesforce para automatización de seguimiento de clientes.

  También participé en el desarrollo y soporte de:
  
  • Blog de noticias y novedades
  • Plataforma de recall y campañas postventa
  • Integraciones con Contact Center
  • Múltiples acciones CRM y automatización comercial
  • Web de seminuevos
  • Optimización de formularios y tracking
  • Actualización de contenido dinámico para campañas

  Brindé soporte técnico continuo, resolución de incidencias y mejoras frontend utilizando HTML, CSS y JavaScript.
`,

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Salesforce",
      "CRM",
      "Landing Pages",
      "WordPress",
      "Angular"
    ],

    links: [
      {
        label: "Honda Motos",
        url: "https://motos.honda.com.pe/"
      },
      {
        label: "Honda Autos",
        url: "https://autos.honda.com.pe/"
      },
      {
        label: "Honda Fuerza",
        url: "https://pf.honda.com.pe/"
      }
    ]
  },

  mbe: {
    title: "MBE Chile & Perú",
    subtitle: "WordPress + E-commerce + soporte",

    image: "imagenes/mbe.png",

    description: `
      Desarrollo y mantenimiento de plataformas web para MBE Chile y Perú.
      Implementación de funcionalidades e-commerce con WooCommerce,
      personalización de plugins e integraciones a sus sistemas.

      Participé en gestión de contenido, soporte técnico y mejoras UI/UX.
    `,

    tech: [
      "WordPress",
      "Integraciones API BMC",
      "PHP",
      "WooCommerce",
      "JavaScript",
      "CSS"
    ],

    links: [
      {
        label: "MBE Chile",
        url: "https://mbechile.cl/"
      },
      {
        label: "MBE Perú",
        url: "https://mbe.pe/"
      }
    ]
  },

  soulbike: {
    title: "Soulbike",
    subtitle: "CRM personalizado + web app",

    image: "imagenes/soulbike.png",

    description: `
      Desarrollo completo de plataforma web y CRM personalizado.
      Implementación de módulos de clientes, ventas,
      seguimiento de pedidos y panel administrativo.

      Participación completa como Fullstack
    `,

    tech: [
      "Web",
      "SQL",
      "CRM",
      "Mantenimiento"
    ],

    links: [
      {
        label: "Soulbike",
        url: "https://soulbike.cl/"
      }
    ]
  },

  churromania: {
    title: "Churromanía",
    subtitle: "Landing pages + automatización de leads",

    image: "imagenes/churromania.png",

    description: `
      Desarrollo y mantenimiento de landing pages orientadas a campañas.
      Integración de formularios con plataformas de leads y automatización en su CRM.
    `,

    tech: [
      "Mantenimiento",
      "CRM"
    ],

    links: [
      {
        label: "Churromanía",
        url: "https://churromania.cl/"
      }
    ]
  },

  mrjoy: {
    title: "Mr Joy",
    subtitle: "Soporte multicountry + optimización web",

    image: "imagenes/mrjoy.png",

    description: `
      Soporte técnico y mantenimiento de plataformas web para Perú,
      Chile y Ecuador.

      Gestión de contenido y soporte continuo.
    `,

    tech: [
      "WordPress",
      "Frontend",
      "Mantenimiento"
    ],

    links: [
      {
        label: "Mr Joy Perú",
        url: "https://www.mrjoy.com.pe/"
      },
      {
        label: "Mr Joy Ecuador",
        url: "https://www.mrjoy.com.ec/"
      },
      {
        label: "Mr Joy Chile",
        url: "https://mrjoy.cl/"
      }
    ]
  },

  frenchill: {
    title: "Frenchill & CO",
    subtitle: "Freelance · tienda online mascotas",

    image: "imagenes/frenchill.png",

    description: `
      Desarrollo freelance de tienda online para productos de mascotas.
      Implementación completa de e-commerce,
      diseño UI/UX y configuración de catálogo.

      Integración de pasarela de pagos y optimización responsive.
    `,

    tech: [
      "WordPress",
      "WooCommerce",
      "UI/UX",
      "Responsive Design",
      "E-commerce"
    ],

    links: [
      {
        label: "Frenchill & CO",
        url: "https://frenchillandco.com/"
      }
    ]
  }

};

function openProject(projectKey) {

  const project = projects[projectKey];

  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
  
    <img src="${project.image}" alt="${project.title}">

    <h2 class="modal-title">${project.title}</h2>

    <p class="modal-subtitle">
      ${project.subtitle}
    </p>

    <div class="modal-tech">
      ${project.tech.map(t => `<span>${t}</span>`).join("")}
    </div>

<p class="modal-description">
  ${project.description.replace(/\n/g, "<br>")}
</p>

   <div class="modal-links">
  ${project.links.map(link => `
    <a href="${link.url}" target="_blank">
      <i class="fas fa-external-link-alt"></i>
      ${link.label}
    </a>
  `).join("")}
</div>

  `;

  modal.classList.add("show");
}

document
.getElementById("closeModal")
.addEventListener("click", () => {

  document
  .getElementById("projectModal")
  .classList.remove("show");

});

window.addEventListener("click", (e) => {

  const modal = document.getElementById("projectModal");

  if(e.target === modal) {
    modal.classList.remove("show");
  }

});
