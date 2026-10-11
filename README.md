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

> **Punto de partida:** la interfaz incluye tarjetas ilustrativas y controles visibles, pero el registro, búsqueda, filtrado y actualización de indicadores todavía no están programados. Esas funcionalidades forman parte del trabajo del aprendiz.

## Tecnología

- JavaScript nativo (sin frameworks).
- Bootstrap **5.3.8** mediante CDN oficial de jsDelivr.
- HTML5 y un archivo CSS adicional.

Documentación de consulta: [JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide) y [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
