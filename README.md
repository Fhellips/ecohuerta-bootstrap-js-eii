# EcoHuerta — Fundamentos de JavaScript

EcoHuerta es una aplicación web de práctica para aprender **JavaScript desde cero** utilizando una interfaz preparada con **HTML, CSS y Bootstrap 5.3**. El objetivo es transformar una página estática en un gestor sencillo de cultivos.

## Laboratorio

- [Laboratorio 1 — Fundamentos de JavaScript y programación en el navegador](laboratorios/laboratorio-01.md)

## Archivos de trabajo

| Archivo | Uso |
| --- | --- |
| [fundamentos.html](fundamentos.html) | Página de apoyo para ejecutar instrucciones y observar la consola. |
| [js/fundamentos.js](js/fundamentos.js) | Variables, tipos, operadores, condiciones, ciclos, arreglos, objetos y funciones. |
| [index.html](index.html) | Interfaz inicial del gestor de cultivos. |
| [js/main.js](js/main.js) | Manipulación del DOM, eventos, formularios y actividad integradora. |
| [css/style.css](css/style.css) | Estilos propios sobre Bootstrap. |

## Cómo comenzar

1. Descarga o clona el repositorio y abre la carpeta en **Visual Studio Code**.
2. Abre `fundamentos.html` en el navegador para realizar las primeras prácticas. Presiona **F12**, entra a **Consola** y observa la salida de `js/fundamentos.js`.
3. Abre `index.html` para observar la interfaz de EcoHuerta. Utiliza `js/main.js` para incorporar la interacción indicada en el laboratorio.
4. Sigue las instrucciones de [Laboratorio 1](laboratorios/laboratorio-01.md), desde la Práctica 1.1 hasta la actividad integradora.

No necesitas Node.js, npm ni un servidor para los ejercicios propuestos. Puedes abrir los archivos HTML directamente en un navegador moderno. Se requiere **conexión a internet para cargar Bootstrap desde su CDN**; la lógica JavaScript propia se ejecuta en el navegador sin servicios externos.


## Tecnología

- JavaScript nativo (sin frameworks).
- Bootstrap **5.3.8** mediante CDN oficial de jsDelivr.
- HTML5 y un archivo CSS adicional.

Documentación de consulta: [JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide) y [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/).



## Funcionalidades implementadas

La aplicación EcoHuerta permite gestionar cultivos mediante JavaScript:

- Visualizar cultivos en tarjetas dinámicas.
- Registrar nuevos cultivos mediante un formulario.
- Validar los datos ingresados.
- Buscar cultivos por nombre sin distinguir mayúsculas y minúsculas.
- Filtrar cultivos por estado.
- Actualizar los indicadores de cultivos registrados, en crecimiento y en cosecha.
- Mostrar un mensaje cuando no hay resultados.

## Pruebas realizadas

| Prueba | Resultado esperado |
|---|---|
| Abrir la aplicación con los tres cultivos iniciales | Se muestran Tomate, Lechuga y Zanahoria. |
| Buscar un cultivo por su nombre | Se muestran los cultivos que coinciden con la búsqueda. |
| Filtrar por estado | Se muestran únicamente los cultivos del estado seleccionado. |
| Registrar un cultivo con datos válidos | El cultivo aparece en la lista y se actualizan los indicadores. |

## Problema encontrado y solución

Durante el desarrollo fue necesario conectar los controles de la interfaz con JavaScript. Se utilizaron eventos para gestionar las búsquedas, los filtros y el envío del formulario, y se implementaron funciones para actualizar las tarjetas y los indicadores.

## Punto de partida

El proyecto comenzó con una interfaz preparada en HTML, CSS y Bootstrap. Durante el laboratorio se incorporó la lógica JavaScript para convertirla en un gestor interactivo de cultivos.