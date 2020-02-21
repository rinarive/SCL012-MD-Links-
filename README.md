# Markdown Links

*md-links-* es una libreria que permite extraer los links presentes en un archivo Markdown (.md). Puedes utilizarlo como módulo o requerirlo desde un archivo javascript en tu proyecto. Además indica la ruta del archivo donde se encontró el link y el texto que aparece dentro del link.

 #### Objetivo del proyecto

Crear una librería desde cero que haga uso de otras librerías para retornar los links detectados en un archivo MD y validar que estos sean funcionales o no. Así como entregar estadísticas respecto a estos mismos links.

Diagrama de flujo del programa md-links-md.

![Diagrama](flujo-MD-Links-.png)

#### Plan de Acción.📑
Para este proyecto se siguio el siguiente plan de acción:

## Inicializar el proyecto.💻
* [x] Forkear y clonar repositorio de Laboratoria.
* [ ] Instalar dependencias (jest, eslint).
* [x] Leer librerías sugeridas para implementar la adecuada a mi proyecto.

## NPM.📁
* [x] Crear cuenta en NPM.
* [x] Crear archivo package.json.
* [x] Vincular proyecto con NPM.
* [x] Versionar archivo package.json.
* [ ] Subir archivos a NPM.
* [x] Elegir Librerias.📰
* [x] node-fetch.
* [x] colors.
* [x] path.
* [x] fs.

## Boilerplate.📋
* [x] README.md.
* [x] index.js.
* [x] package.json.
* [ ] test/md-links.spec.js.
* [x] mdLinks().

## Planificación
Para la planificación se utilizo issues y milestones, revisar en el siguiente link: mdLinksmd Markdown Planificación.



## Checklist General

* [x] README. md
* [x] Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
* [ ] Un board con el backlog para la implementación de la librería.
* [ ] Documentación técnica de la librería.
* [ ] Guía de uso e instalación de la librería
### API mdLinks(path, opts)
* [x] El módulo exporta una función con la interfaz (API) esperada.
* [x] Implementa soporte para archivo individual.
* [x] Implementa soporte para directorios.
* [ ] Implementa options.validate.
### Pruebas / tests
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions, lines, y branches.
* [ ] Pasa tests (y linters) (npm test).
## CLI
* [ ] Expone ejecutable md-links en el path (configurado en package.json).
* [ ] Se ejecuta sin errores / output esperado.
* [ ] Implementa --validate.
* [ ] Implementa --stats.
