const milestones = [
  {
    id: 'descubrimiento',
    phase: 'Fase 1',
    title: 'Descubrimiento y estrategia',
    description: 'Se contextualiza el negocio y se identifican oportunidades de valor, stakeholders y objetivos estratégicos.'
  },
  {
    id: 'requisitos',
    phase: 'Fase 2',
    title: 'Requisitos y priorización',
    description: 'Se convierten necesidades en requisitos claros, criterios de éxito y decisiones de prioridad con base en evidencia.'
  },
  {
    id: 'diseno',
    phase: 'Fase 3',
    title: 'Diseño y arquitectura',
    description: 'Se diseña la solución con enfoque en producto, datos, calidad, IA y capacidad de scalability.'
  },
  {
    id: 'entrega',
    phase: 'Fase 4',
    title: 'Entrega y mejora continua',
    description: 'Se despliega, observa y aprende del impacto real para cerrar el ciclo de valor.'
  }
];

const competencies = [
  { id: 'estrategia', title: 'Visión y estrategia', label: 'Producto' },
  { id: 'analisis', title: 'Requisitos y datos', label: 'Análisis' },
  { id: 'ia', title: 'Inteligencia artificial', label: 'IA' },
  { id: 'solucion', title: 'Solución y experiencia', label: 'Diseño' },
  { id: 'operacion', title: 'Operación y mejora', label: 'Entrega' },
  { id: 'calidad', title: 'Calidad y riesgo', label: 'Gobernanza' }
];

const courses = [
  {
    competency: 'estrategia', phase: 'descubrimiento', language: 'Inglés', level: 'Todos los niveles',
    title: 'MBA in Product Management: Be a Product Manager (2026)',
    provider: '365 Careers',
    url: 'https://www.udemy.com/course/product-management-fundamentals-a-beginners-guide/',
    updated: '2026-08', duration: '24,5 h'
  },
  {
    competency: 'estrategia', phase: 'descubrimiento', language: 'Inglés', level: 'Todos los niveles',
    title: 'PMP Exam Prep Course', provider: 'TIA Education',
    url: 'https://www.udemy.com/course/pmp-certification-exam-prep-course-pmbok-6th-edition/', updated: '2026-08', duration: '35,5 h'
  },
  {
    competency: 'estrategia', phase: 'descubrimiento', language: 'Español', level: 'Todos los niveles',
    title: 'Scrum Master y Product Owner Certificación. Temario completo',
    provider: 'Gastón Galarza y Alvaro Chirou', rating: '4,6/5', reviews: '5.857 valoraciones', students: '41.076 alumnos',
    url: 'https://www.udemy.com/course/certificate-scrum-master-y-product-owner-ano-2021/', updated: '2026-08', duration: '18 h'
  },
  {
    competency: 'analisis', phase: 'requisitos', language: 'Inglés', level: 'Inicial',
    title: '15 Days of SQL: The Complete SQL Masterclass 2026', provider: '365 Careers',
    url: 'https://www.udemy.com/course/15-days-of-sql/', updated: '2026-08', duration: '15 h'
  },
  {
    competency: 'analisis', phase: 'requisitos', language: 'Inglés', level: 'Todos los niveles',
    title: 'Microsoft Power BI Desktop for Business Intelligence', provider: 'Maven Analytics',
    url: 'https://www.udemy.com/course/microsoft-power-bi-up-running-with-power-bi-desktop/', updated: '2026-06', duration: '17 h'
  },
  {
    competency: 'analisis', phase: 'requisitos', language: 'Español', level: 'Todos los niveles',
    title: 'Power BI TOTAL en 14 Días - Analista de Datos Avanzado',
    provider: 'Federico Garay y Escuela Directa', rating: '4,8/5', reviews: '14.366 valoraciones', students: '49.257 alumnos',
    url: 'https://www.udemy.com/course/power-bi-total/', updated: '2026-01', duration: '15,5 h'
  },
  {
    competency: 'ia', phase: 'requisitos', language: 'Inglés', level: 'Todos los niveles',
    title: 'The Complete Prompt Engineering for AI Bootcamp', provider: 'Mike Taylor y James Phoenix',
    url: 'https://www.udemy.com/course/prompt-engineering-for-ai/', updated: '2026-05', duration: '22,5 h'
  },
  {
    competency: 'ia', phase: 'entrega', language: 'Inglés', level: 'Todos los niveles',
    title: 'GitHub Copilot Beginner to Pro', provider: 'Tom Phillips y WebDevEducation',
    url: 'https://www.udemy.com/course/github-copilot/', updated: '2026-08', duration: '8 h'
  },
  {
    competency: 'ia', phase: 'requisitos', language: 'Español', level: 'Todos los niveles',
    title: 'Curso Completo de IA Generativa: ChatGPT, Midjourney y más!', provider: 'Santiago Hernández',
    rating: '4,6/5', reviews: '11.414 valoraciones', students: '45.004 alumnos',
    url: 'https://www.udemy.com/course/inteligencia-artificial-generativa-llms-chatgpt-dall-e-3/', updated: '2026-08', duration: '22 h'
  },
  {
    competency: 'solucion', phase: 'diseno', language: 'Inglés', level: 'Inicial',
    title: 'The Web Developer Bootcamp 2026', provider: 'Colt Steele',
    url: 'https://www.udemy.com/course/the-web-developer-bootcamp/', updated: '2026-06', duration: '74 h'
  },
  {
    competency: 'solucion', phase: 'diseno', language: 'Inglés', level: 'Inicial',
    title: 'Figma UI UX Design Essentials', provider: 'Daniel Walter Scott',
    url: 'https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/', updated: '2026-08', duration: '10,5 h'
  },
  {
    competency: 'solucion', phase: 'diseno', language: 'Español', level: 'Todos los niveles',
    title: 'Diseño UX: experiencia de usuario UX/UI + Figma 2026', provider: 'Espacio UX - Javier Cañas',
    rating: '4,7/5', reviews: '9.259 valoraciones', students: '40.279 alumnos',
    url: 'https://www.udemy.com/course/ux-design-disenador-ux-de-cero-a-profesional-2021/', updated: '2026-04', duration: '23 h'
  },
  {
    competency: 'operacion', phase: 'entrega', language: 'Inglés', level: 'Inicial',
    title: 'Docker and Kubernetes: The Complete Guide', provider: 'Stephen Grider',
    url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/', updated: '2026-02', duration: '21,5 h'
  },
  {
    competency: 'operacion', phase: 'entrega', language: 'Inglés', level: 'Inicial',
    title: 'DevOps Foundation: Fundamentals to Start a DevOps Career', provider: 'EXIN',
    url: 'https://www.udemy.com/course/exin-devops-foundation-fundamentals-to-start-a-devops-career/', updated: '2026-08', duration: '9 h'
  },
  {
    competency: 'operacion', phase: 'entrega', language: 'Español', level: 'Todos los niveles',
    title: 'Docker - Guía práctica de uso para desarrolladores', provider: 'Fernando Herrera y DevTalles',
    rating: '4,8/5', reviews: '4.649 valoraciones', students: '23.060 alumnos',
    url: 'https://www.udemy.com/course/docker-guia-practica/', updated: '2026-01', duration: '14 h'
  },
  {
    competency: 'calidad', phase: 'entrega', language: 'Inglés', level: 'Todos los niveles',
    title: 'AI Governance: The Fundamentals of AI Governance', provider: 'Taimur Ijlal',
    url: 'https://www.udemy.com/course/ai-governance-the-fundamentals-of-ai-governance/', updated: '2026-08', duration: '3,5 h'
  },
  {
    competency: 'calidad', phase: 'diseno', language: 'Inglés', level: 'Inicial',
    title: 'Seven Quality Tools for Quality Management', provider: 'Quality Gurus',
    url: 'https://www.udemy.com/course/seven-quality-tools/', updated: '2026-04', duration: '4,5 h'
  },
  {
    competency: 'calidad', phase: 'diseno', language: 'Español', level: 'Todos los niveles',
    title: 'Curso completo de Hacking Ético y Ciberseguridad', provider: 'Santiago Hernández',
    rating: '4,7/5', reviews: '13.416 valoraciones', students: '58.386 alumnos',
    url: 'https://www.udemy.com/course/curso-completo-de-hacking-etico-y-ciberseguridad/', updated: '2026-08', duration: '21 h'
  }
];

const legacyCourses = [
  {
    title: 'Become a Product Manager | Learn the Skills & Get the Job',
    provider: 'Cole Mercer y Evan Kimbrell',
    focus: 'Producto y estrategia',
    url: 'https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/',
    updated: '2025-12', duration: '13 h', popularity: '65.000+ valoraciones · 290.000+ alumnos'
  },
  {
    title: 'The Complete SQL Bootcamp: Go from Zero to Hero',
    provider: 'Jose Portilla y Pierian Training',
    focus: 'Datos y análisis',
    url: 'https://www.udemy.com/course/the-complete-sql-bootcamp/',
    updated: '2022-12', duration: '8 h 51 min', popularity: '257.000+ valoraciones · 1.000.000+ alumnos'
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    provider: 'Dr. Angela Yu',
    focus: 'Desarrollo y solución',
    url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    updated: '2025-11', duration: '61 h 53 min', popularity: '473.000+ valoraciones · 1.500.000+ alumnos'
  },
  {
    title: 'GitHub Actions - The Complete Guide',
    provider: 'Academind y Maximilian Schwarzmuller',
    focus: 'Entrega y automatización',
    url: 'https://www.udemy.com/course/github-actions-the-complete-guide/',
    updated: '2025-11', duration: '10,5 h', popularity: '12.000+ valoraciones · 94.000+ alumnos'
  },
  {
    title: 'The EU AI Act Explained: Compliance and Practical Impact',
    provider: 'Scott Duffy',
    focus: 'Gobernanza y riesgo',
    url: 'https://www.udemy.com/course/theeuaiact/',
    updated: '2025-09', duration: '41 min', popularity: '37.000+ valoraciones · 69.000+ alumnos'
  },
  {
    title: 'Conviértete en Product Owner: la voz del cliente en Scrum',
    provider: 'EUD Academy Colombia',
    focus: 'Product Owner y valor', language: 'Español', rating: '4,7/5',
    url: 'https://www.udemy.com/course/scrum-product-owner-dg/',
    updated: '2025-10', duration: '7,5 h', popularity: '273 valoraciones · 2.074 alumnos'
  },
  {
    title: 'UML para Analistas de Negocios',
    provider: 'Jonás A. Montilva C.',
    focus: 'Business Analysis y requisitos', language: 'Español', rating: '4,6/5',
    url: 'https://www.udemy.com/course/uml-para-analistas-de-negocios/',
    updated: '2025-12', duration: '6 h', popularity: '867 valoraciones · 3.100 alumnos'
  },
  {
    title: 'Ingeniería de LLM: Domina IA, Modelos de Lenguaje y Agentes',
    provider: 'LLM Spanish, María Santos y Juan Gabriel Gomila',
    focus: 'IA Product Engineer', language: 'Español', rating: '4,8/5',
    url: 'https://www.udemy.com/course/ingenieria-llm-ia-generativa-modelos-lenguaje-gran-escala-juan-gomila/',
    updated: '2025-04', duration: '42,5 h', popularity: '678 valoraciones · 6.158 alumnos'
  }
];

const renderRoadmap = () => {
  const container = document.getElementById('roadmap');

  if (!container) return;

  container.innerHTML = milestones
    .map(
      (item) => `
        <article class="phase">
          <div class="phase-number">${item.phase.split(' ')[1]}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join('');
};

const renderCourses = () => {
  const container = document.getElementById('course-catalog');
  const phaseIds = new Set(milestones.map((item) => item.id));
  const competencyIds = new Set(competencies.map((item) => item.id));

  if (!container) return;

  const validCourses = courses.filter(
    (course) => competencyIds.has(course.competency) && phaseIds.has(course.phase)
  );

  container.innerHTML = competencies
    .map((competency) => {
      const relatedCourses = validCourses.filter((course) => course.competency === competency.id);

      return `
        <article class="course-group">
          <div class="course-group-heading">
            <span class="tag">${competency.label}</span>
            <h3>${competency.title}</h3>
          </div>
          <div class="course-grid">
            ${relatedCourses.map((course) => {
              const phase = milestones.find((item) => item.id === course.phase);

              return `
                <article class="course-card">
                  <div class="course-meta">
                    <span>${course.language}</span>
                    <span>${course.level}</span>
                    <span>${course.duration}</span>
                    ${course.rating ? `<span>${course.rating}</span>` : ''}
                  </div>
                  <h4>${course.title}</h4>
                  <p>${course.provider}</p>
                  ${course.reviews ? `<p class="course-popularity">${course.reviews} · ${course.students}</p>` : ''}
                  <p class="course-phase">${phase.phase}: ${phase.title}</p>
                    <p class="course-updated">Actualizado: ${course.updated}</p>
                  <a class="course-link" href="${course.url}" target="_blank" rel="noopener noreferrer">
                    Ver curso <span aria-hidden="true">↗</span>
                  </a>
                </article>
              `;
            }).join('')}
          </div>
        </article>
      `;
    })
    .join('');
};

const renderLegacyCourses = () => {
  const container = document.getElementById('legacy-course-list');

  if (!container) return;

  container.innerHTML = legacyCourses.map((course) => `
    <article class="legacy-course-card">
      <div class="course-meta">
        <span>${course.focus}</span>
        ${course.language ? `<span>${course.language}</span>` : ''}
        ${course.rating ? `<span>${course.rating}</span>` : ''}
        <span>${course.duration}</span>
        <span>Actualizado: ${course.updated}</span>
      </div>
      <h3>${course.title}</h3>
      <p>${course.provider}</p>
      <p class="legacy-popularity">${course.popularity}</p>
      <a class="course-link" href="${course.url}" target="_blank" rel="noopener noreferrer">
        Comprobar curso <span aria-hidden="true">↗</span>
      </a>
    </article>
  `).join('');
};

document.addEventListener('DOMContentLoaded', () => {
  renderRoadmap();
  renderCourses();
  renderLegacyCourses();
});
