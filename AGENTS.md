# AI-SDLC Product Engineer

Proyecto web y portfolio formativo para perfiles de Product Owner y Business Analyst que quieren transicionar hacia Product Engineer aplicando la metodología AI-SDLC y construyendo una narrativa profesional clara, técnica y académica.

## Stack
- Lenguaje: HTML5 semántico, CSS3 moderno y JavaScript vanilla
- Framework / runtime: sitio estático servido con Python/HTTP server; entorno local con `uv`
- Base de datos: no aplica para este proyecto estático
- Tests: no aplica en esta fase; se recomienda validación manual en navegador antes de cada commit

## Comandos
- `uv run python -m http.server 8000` — arranca el sitio en local
- `git status` — revisa los cambios antes de cada commit
- `git add . && git commit -m "..."` — prepara y guarda los cambios con mensajes claros
- `git push` — publica los cambios en GitHub
- `git pull` — sincroniza cambios del remoto antes de seguir trabajando
- `git remote -v` — comprueba el origen remoto configurado

## Estructura del proyecto
- `index.html` — punto de entrada principal de la web y estructura de contenido
- `css/` — estilos globales, diseño visual, variables, layout y responsive
- `js/` — lógica de la página, datos dinámicos y renderizado de secciones
- `assets/` — recursos gráficos, imágenes o iconos del proyecto
- `docs/` — documentación de contexto, referencias y metodología AI-SDLC
- `README.md` — descripción general del proyecto, objetivos y instrucciones de uso

## Convenciones
- Se usan nombres descriptivos y consistentes para clases, IDs y funciones.
- El HTML debe ser semántico: encabezados, listas, secciones y navegación bien estructurados.
- Los estilos van en `css/styles.css` y no se mezclan con el HTML ni con el JavaScript.
- La lógica se mantiene en `js/main.js` y se separa de la estructura visual.
- Las modificaciones deben mantenerse enfocadas en una tarea a la vez y documentarse con mensajes de commit claros.
- Antes de subir cambios, se valida manualmente el resultado en el navegador.
- Se evita la lógica innecesaria y el código duplicado.

## No hagas
- No instalar dependencias ni añadir frameworks sin avisar antes.
- No tocar contenido de referencia clave sin confirmar el objetivo del cambio.
- No subir archivos sensibles ni secretos al repositorio.
- No mezclar cambios de estilo, contenido y estructura en un único commit si pueden separarse.
- No usar `any` ni soluciones improvisadas en JavaScript cuando se puede mantener claridad y legibilidad.
- No dejar código sin revisar ni secciones sin validar visualmente.

## Flujo de trabajo
- Antes de una tarea no trivial, propón un plan y espera mi OK.
- Una tarea a la vez; al terminar, dime qué cambiaste para que lo revise.
- Si no estás seguro al 80%, pregunta. No inventes.
- Haz revisiones pequeñas y verificables antes de cada commit.
- Antes de cada PR o entrega, comprueba que el sitio se visualiza correctamente y que no hay cambios accidentales.

## Documentación
- README principal del proyecto: `README.md`
- Documentación de contexto y metodología: `docs/ai-sdlc.md`
- Referencias del proyecto y evolución del portfolio: se mantienen en la carpeta `docs/` y en la estructura del repositorio
