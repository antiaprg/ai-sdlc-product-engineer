const milestones = [
  {
    phase: 'Fase 1',
    title: 'Descubrimiento y estrategia',
    description: 'Se contextualiza el negocio y se identifican oportunidades de valor, stakeholders y objetivos estratégicos.'
  },
  {
    phase: 'Fase 2',
    title: 'Requisitos y priorización',
    description: 'Se convierten necesidades en requisitos claros, criterios de éxito y decisiones de prioridad con base en evidencia.'
  },
  {
    phase: 'Fase 3',
    title: 'Diseño y arquitectura',
    description: 'Se diseña la solución con enfoque en producto, datos, calidad, IA y capacidad de scalability.'
  },
  {
    phase: 'Fase 4',
    title: 'Entrega y mejora continua',
    description: 'Se despliega, observa y aprende del impacto real para cerrar el ciclo de valor.'
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

document.addEventListener('DOMContentLoaded', renderRoadmap);
