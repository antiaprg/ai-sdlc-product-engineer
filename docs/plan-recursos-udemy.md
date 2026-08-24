# Plan: Recursos Udemy para el itinerario

Ampliar la web estática AI-SDLC Product Engineer con un catálogo curado de cursos de Udemy que aterrice las 6 competencias visibles y las relacione con las 4 fases del roadmap. Se mantendrá JavaScript vanilla y la estructura existente; los cursos se modelarán como datos para evitar duplicación y facilitar la actualización de enlaces.

## Pasos

1. **Definir el catálogo y el modelo de relación**
   - Comprobar que cada URL de Udemy responde y que el curso sigue disponible antes de incorporarlo.
   - Priorizar cursos creados o actualizados desde el 24 de febrero de 2026, tomando como referencia la fecha actual del 24 de agosto de 2026.
   - Investigar propuestas actuales y verificables, priorizando una combinación equilibrada de cursos en español e inglés.
   - Seleccionar aproximadamente 2 propuestas por competencia, unas 12 en total.
   - Añadir al menos una propuesta en español por competencia, priorizando la mejor combinación disponible de valoración y alumnado.
   - Registrar título, instructor cuando esté disponible, idioma, nivel o foco, URL directa, competencia y fase AI-SDLC asociadas.
   - Evitar afirmar precios o valoraciones porque cambian; registrar la fecha de comprobación de disponibilidad.
   - Conservar en un apartado separado algunos cursos anteriores que destaquen por volumen de valoraciones o alumnado, con un aviso explícito de posible desactualización.

2. **Integrar los datos en el renderizado**
   - Ampliar `js/main.js` con identificadores estables para competencias y fases, además de la colección de cursos.
   - Generar una sección de recursos agrupada por las 6 competencias.
   - Renderizar los cursos antiguos y populares en un bloque independiente, claramente diferenciado del catálogo reciente.
   - Abrir los enlaces externos en una pestaña nueva con `rel="noopener noreferrer"`.

3. **Actualizar la estructura semántica**
   - Añadir una entrada de navegación y una sección dedicada en `index.html`.
   - Mantener las competencias como contenido principal y hacer que el catálogo sea complementario.
   - Incluir una nota sobre el carácter orientativo y sujeto a cambios de los enlaces.

4. **Dar estilo responsive al catálogo**
   - Añadir estilos para la rejilla, agrupaciones, metadatos y enlaces de curso en `css/styles.css`.
   - Reutilizar las variables y breakpoints existentes.
   - Revisar estados hover y focus, contraste y lectura en móvil.

5. **Documentar y verificar**
   - Documentar que el catálogo es complementario, curado y sujeto a revisión periódica.
   - Comprobar que cada URL responde, que cada competencia tenga propuestas y que cada curso tenga una fase y competencia válidas.
   - Ejecutar `uv run python -m http.server 8000` y revisar manualmente la web en escritorio y móvil.

## Archivos relevantes

- `js/main.js`: modelo de fases, competencias, cursos y renderizado dinámico.
- `index.html`: navegación y nueva sección semántica de recursos.
- `css/styles.css`: layout, tarjetas, metadatos, estados de interacción y responsive.
- `README.md` o `docs/ai-sdlc.md`: nota sobre el uso y mantenimiento del catálogo.

## Decisiones

- Se cubrirán competencias y fases mediante metadatos de relación, sin duplicar innecesariamente los cursos.
- Se usarán las 4 fases visibles del roadmap; las fases adicionales documentadas se agruparán dentro de ellas.
- Se combinarán cursos en español e inglés, priorizando su ajuste al itinerario.
- La primera versión tendrá enlaces directos, sin filtros ni dependencias nuevas.
- No se mostrarán precios, valoraciones ni disponibilidad permanente.
- Los cursos consolidados se conservarán como referencia histórica, con advertencia de posible desactualización y comprobación del enlace.
- Se incorporan tres referencias adicionales en español: Product Owner, Business Analysis con UML e Ingeniería de LLM, por su ajuste al itinerario y sus señales de valoración y alumnado.
