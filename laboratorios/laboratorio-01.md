# Laboratorio 1 — Fundamentos de JavaScript con EcoHuerta

JavaScript permite que una página web responda a las acciones de las personas y trabaje con información. En este laboratorio partirás de EcoHuerta, una página preparada con HTML y Bootstrap, y aprenderás a convertir datos en decisiones, cálculos e interacciones.

**Objetivo:** comprender y aplicar los fundamentos de JavaScript mediante ejercicios en la consola y la construcción progresiva de un gestor de cultivos.

## Antes de comenzar

Necesitas nociones básicas de HTML (etiquetas, atributos e identificadores), Visual Studio Code y un navegador moderno. No necesitas Node.js, npm, bases de datos ni extensiones obligatorias.

1. Abre la carpeta del repositorio en Visual Studio Code.
2. Identifica `fundamentos.html`, `index.html`, `js/fundamentos.js` y `js/main.js`.
3. Abre `fundamentos.html` en el navegador. Presiona **F12** (o **Ctrl + Mayús + I**) y selecciona **Consola**.
4. Comprueba que aparece el mensaje **EcoHuerta: JavaScript conectado correctamente.**
5. Abre `index.html`. Recorre las tarjetas, la búsqueda, los indicadores y el formulario. Los controles todavía no realizan las operaciones del gestor: las desarrollarás en las prácticas.

Trabajarás en **`js/fundamentos.js` durante las prácticas 1.1 a 1.5** y en **`js/main.js` durante las prácticas 1.6 a 1.8 y la actividad integradora**. Guarda los cambios y recarga el HTML correspondiente. Los archivos HTML cargan JavaScript con `defer`; por eso el código se ejecuta después de que el navegador analiza el documento.

**Cómo utilizar los ejemplos:** copia solamente los fragmentos de la práctica que estés realizando. Cuando se indique «agrega», coloca el código debajo del existente. Puedes separar prácticas con comentarios como `// Práctica 1.2`. Si vuelves a declarar una constante con el mismo nombre en el mismo archivo, JavaScript mostrará un error: cambia el nombre, comenta la versión anterior o encierra el ejercicio nuevo entre llaves `{ ... }`. No copies los ejemplos que estén identificados como **error intencional** dentro de un programa que debe funcionar.

Antes de ejecutar cada fragmento, escribe tu predicción en un comentario de tu archivo o en una nota breve. Después comprueba la salida real. Si es diferente, explica por qué.

---

## Práctica 1.1 — Primera ejecución y consola

### 1. ¿Qué hace JavaScript?

HTML define el contenido; Bootstrap proporciona estilos y componentes visuales; JavaScript ejecuta instrucciones. El navegador interpreta el archivo enlazado y permite mostrar información mediante la consola, modificar elementos de la página y responder a eventos.

Abre `js/fundamentos.js`. Debajo del mensaje existente, agrega:

```js
console.log("Bienvenido a EcoHuerta");
console.log(8 + 5);
console.log("8" + 5);
console.warn("Este cultivo necesita revisión");
```

Guarda, recarga `fundamentos.html` y observa la pestaña **Consola**. `console.log()` muestra valores para inspeccionarlos; `console.warn()` destaca advertencias. No son mensajes visibles dentro de la página.

**Predice antes de recargar:** ¿las dos expresiones que contienen 8 y 5 generan el mismo resultado? ¿Por qué?

**Comprueba:** la operación numérica produce `13` y la concatenación con una cadena produce `85`. Las comillas cambian el tipo de dato de `"8"`.

### Actividades

1. Muestra tu nombre y, en una instrucción diferente, el nombre de un cultivo.
2. Calcula en la consola cuántas plantas hay en cuatro filas de siete plantas. No escribas el resultado directamente: utiliza una multiplicación.
3. Calcula cuántos litros hacen falta para regar ocho plantas que necesitan dos litros cada una.
4. Prueba `console.log(20 / 4)`, `console.log(20 % 6)` y `console.log(2 ** 3)`. Explica qué operación realiza cada símbolo.
5. Escribe en un comentario cuál es la diferencia entre un error que aparece en la Consola y una advertencia que tú envías con `console.warn()`.

### Depuración: error intencional

Ejecuta este fragmento **por separado**, después de comentar temporalmente el código que funciona:

```js
console.log("Cultivo registrado);
```

Observa el mensaje de sintaxis y la línea señalada. Corrige el problema sin cambiar el texto que se desea mostrar, guarda y recarga. Después vuelve a dejar activo tu código correcto.

**Comprobación:** la Consola debe mostrar tus mensajes y operaciones sin errores no intencionales.

---

## Práctica 1.2 — Variables, tipos de datos y operadores

Una variable conserva un valor para utilizarlo después. Usa `const` cuando no necesites reasignar una variable y `let` cuando su valor vaya a cambiar. Evita `var` en los ejemplos nuevos. Recuerda que JavaScript distingue mayúsculas de minúsculas.

Agrega en `js/fundamentos.js`:

```js
const cultivoInicial = "Tomate";
let diasIniciales = 15;
const aguaSemanalInicial = 4.5;
const necesitaSolInicial = true;

console.log(cultivoInicial);
console.log(typeof cultivoInicial);
console.log(typeof diasIniciales);
console.log(typeof necesitaSolInicial);

diasIniciales = diasIniciales + 7;
console.log(diasIniciales);
console.log(aguaSemanalInicial * 3);
```

Las cadenas son textos (tipo `string`), `15` y `4.5` son números (tipo `number`) y `true` es un booleano (tipo `boolean`). `typeof` permite inspeccionar el tipo. El operador `=` asigna; `===` compara valor y tipo.

**Predice:** ¿cuánto vale `diasIniciales` al terminar? ¿Cuántos litros representan tres semanas? Confirma: `22` días y `13.5` litros.

### Conversión de datos

Los valores escritos en campos HTML llegan inicialmente como texto. Prueba en la consola:

```js
const cantidadTexto = "12";
const cantidadNumero = Number(cantidadTexto);

console.log(cantidadTexto + 3);
console.log(cantidadNumero + 3);
console.log(Number("doce"));
console.log(Number.isNaN(Number("doce")));
console.log(12 === "12");
```

**Comprueba:** `"123"`, `15`, `NaN`, `true` y `false`, respectivamente. `NaN` significa que la operación no obtuvo un número válido. También debes recordar que `Number("")` produce `0`: antes de convertir un formulario tendrás que verificar que el campo no esté vacío.

### Actividades

1. Define variables para un producto con nombre, precio unitario, unidades disponibles y disponibilidad. Muestra sus tipos.
2. Calcula el valor de diez unidades, el valor de siete unidades y la diferencia entre ambos. Explica dónde cambiarías `let` por `const`.
3. Prueba `10 + 2 * 3` y `(10 + 2) * 3`. Explica el orden de las operaciones.
4. Predice y ejecuta `10 > 8`, `10 <= 8`, `10 !== "10"`, `5 === 5` y `5 == "5"`. Para código nuevo prefiere `===` y `!==` a la comparación con conversión implícita.
5. Calcula el costo de agua de un cultivo si usa 3.5 litros por semana durante cuatro semanas y cada litro cuesta 250 unidades monetarias. Resultado esperado: **3500**.
6. Prueba los operadores abreviados: `contador += 1`, `contador -= 2` y `contador *= 3`. Crea primero la variable `contador` con `let`.

### Depuración: error intencional

```js
const diasDePrueba = 10;
diasDePrueba = 11;
console.log(diasDePrueba);
```

¿Por qué falla la reasignación? Decide si el valor debía permanecer fijo o cambiar y aplica la declaración apropiada.

**Comprobación:** demuestra con tres salidas la diferencia entre sumar números, concatenar texto y comparar con igualdad estricta.

---

## Práctica 1.3 — Condicionales y decisiones

Una condición permite escoger qué instrucciones ejecutar. En EcoHuerta puedes decidir si un cultivo requiere revisión, si una cantidad es válida o qué mensaje corresponde a determinado estado.

### Ejemplo guiado: humedad

```js
const humedadEjemplo = 37;

if (humedadEjemplo < 30) {
  console.log("Humedad baja");
} else if (humedadEjemplo <= 60) {
  console.log("Humedad adecuada");
} else {
  console.log("Humedad alta");
}
```

Predice el mensaje. Después prueba `29`, `30`, `60` y `61`. Para esta **simulación de programación** los intervalos son: menos de 30, entre 30 y 60 incluidos y más de 60. No se trata de una recomendación agronómica para una especie real.

### Condiciones combinadas

```js
const temperaturaEjemplo = 24;
const tieneAguaEjemplo = true;

if (temperaturaEjemplo >= 18 && temperaturaEjemplo <= 30 && tieneAguaEjemplo) {
  console.log("Se cumplen las condiciones de la simulación");
} else {
  console.log("Revisar condiciones");
}
```

`&&` exige que todas las condiciones sean verdaderas; `||` acepta al menos una; `!` invierte un booleano. Cambia `tieneAguaEjemplo` a `false` y predice qué sucede.

### Actividades

1. Para un inventario, muestra «Sin existencias» si la cantidad es 0; «Existencias bajas» entre 1 y 5; «Disponible» por encima de 5. Prueba `0`, `1`, `5` y `6`.
2. Clasifica una calificación entre 0 y 100 con estas reglas de práctica: 0–59 «Por mejorar», 60–79 «Aceptable» y 80–100 «Destacado». Los valores fuera del intervalo deben producir «Calificación inválida». Prueba `-1`, `0`, `59`, `60`, `79`, `80`, `100` y `101`.
3. Diseña una regla para enviar un aviso solo cuando un cultivo esté en estado `"crecimiento"` **y** el agua disponible sea menor que 2 litros.
4. Elige una de las actividades y escribe una versión equivalente con una variable booleana intermedia; explica si facilita la lectura.

### Depuración: error lógico intencional

```js
let estadoPrueba = "semilla";

if (estadoPrueba = "cosecha") {
  console.log("Listo para cosechar");
}
```

Este fragmento puede ejecutar una rama equivocada **sin generar un error de sintaxis**. Inspecciona el valor de `estadoPrueba` antes y después de la condición, identifica el operador responsable y corrígelo.

**Comprobación:** todos los límites de la clasificación deben corresponder a un único resultado, sin intervalos solapados ni valores válidos sin clasificar.

---

## Práctica 1.4 — Arreglos y repeticiones

Un **arreglo** almacena varios valores en orden. Las posiciones comienzan en `0`. Los ciclos permiten trabajar con cada elemento sin escribir una instrucción por cada valor.

### Ejemplo guiado: consumir datos de un arreglo

```js
const litrosRegistrados = [2, 3.5, 4, 1.5];
let totalLitros = 0;

for (let indice = 0; indice < litrosRegistrados.length; indice++) {
  totalLitros += litrosRegistrados[indice];
}

console.log(totalLitros);
console.log(litrosRegistrados[0]);
console.log(litrosRegistrados.length);
```

Predice las tres salidas antes de ejecutar. Comprueba: `11`, `2` y `4`.

Un `for` tiene inicio, condición de continuación y actualización del contador. El ciclo recorre índices desde `0` hasta `length - 1`.

### Agregar, consultar y eliminar elementos

```js
const herramientas = ["Pala", "Regadera", "Guantes"];
herramientas.push("Rastrillo");
console.log(herramientas.includes("Regadera"));
console.log(herramientas[1]);
herramientas.splice(0, 1);
console.log(herramientas);
```

`push()` agrega al final; `includes()` comprueba si hay coincidencia; `splice(0, 1)` elimina un elemento desde la posición cero. Prueba también `herramientas[10]` y explica por qué no devuelve una herramienta.

Puedes recorrer valores directamente:

```js
for (const herramienta of herramientas) {
  console.log("Herramienta: " + herramienta);
}
```

Cuando no conoces por adelantado la cantidad de repeticiones, `while` puede resultar útil; asegúrate de modificar su condición:

```js
let intentosEjemplo = 0;
while (intentosEjemplo < 3) {
  console.log("Intento " + (intentosEjemplo + 1));
  intentosEjemplo++;
}
```

### Actividades

1. Crea un arreglo de cinco nombres de cultivos. Muestra el primero y el último **usando `length`**.
2. Agrega un cultivo al final, elimina uno y comprueba la nueva longitud.
3. Dado el arreglo `[12, 8, 15, 5, 10]`, calcula la suma y el promedio mediante un ciclo. Comprueba: suma **50**, promedio **10**.
4. Cuenta cuántos valores de `[2, 0, 3, 0, 1]` representan existencias agotadas. Resultado esperado: **2**.
5. Recorre el arreglo `["Tomate", "Lechuga", "Maíz"]` e imprime cada nombre precedido de su número de posición comenzando en 1.
6. Modifica un ejercicio para trabajar con un arreglo vacío. ¿Qué sucede si intentas calcular el promedio dividiendo entre `0`? Define qué debería mostrar tu solución en ese caso.

### Depuración: error intencional

```js
const nombresPrueba = ["Tomate", "Papa", "Maíz"];
for (let i = 0; i <= nombresPrueba.length; i++) {
  console.log(nombresPrueba[i].toUpperCase());
}
```

Ejecuta y lee el error. Imprime `i` en cada vuelta para identificar la posición que ya no existe. Corrige el límite del ciclo y verifica que se muestren exactamente tres nombres.

**Comprobación:** las sumas deben funcionar con uno, varios y cero elementos; la solución del promedio debe indicar claramente qué ocurre cuando no hay valores.

---

## Práctica 1.5 — Objetos y funciones

Cuando cada registro tiene varias características, resulta más claro representarlo mediante un **objeto**. Una función agrupa instrucciones que pueden reutilizarse con diferentes argumentos.

### Objetos

```js
const cultivoEjemplo = {
  nombre: "Tomate",
  dias: 85,
  agua: 7,
  estado: "cosecha"
};

console.log(cultivoEjemplo.nombre);
console.log(cultivoEjemplo["agua"]);

cultivoEjemplo.agua = 7.5;
console.log(cultivoEjemplo.agua);
```

Predice las salidas: `"Tomate"`, `7` y `7.5`. Aunque el objeto esté declarado con `const`, sus **propiedades** pueden modificarse; lo que no puedes hacer es asignarle un objeto distinto a esa misma variable.

Combina arreglos y objetos:

```js
const cultivosDeEjemplo = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];

for (const cultivo of cultivosDeEjemplo) {
  console.log(cultivo.nombre + ": " + cultivo.estado);
}
```

### Funciones con parámetros y retorno

```js
function calcularAgua(aguaPorSemana, semanas) {
  return aguaPorSemana * semanas;
}

const consumoTomate = calcularAgua(7, 4);
console.log(consumoTomate);
console.log(calcularAgua(3, 2));
```

Una función recibe parámetros; `return` entrega su resultado a quien la llamó. Aquí las salidas son **28** y **6**. Un `console.log()` dentro de una función no sustituye a `return` cuando necesitas reutilizar el cálculo.

### Función para describir un cultivo

```js
function describirCultivo(cultivo) {
  return cultivo.nombre + " lleva " + cultivo.dias + " días registrado";
}

console.log(describirCultivo(cultivosDeEjemplo[1]));
```

Predice el resultado. Cambia el argumento para consultar otro objeto.

### Actividades

1. Añade al objeto `cultivoEjemplo` la propiedad `responsable`; cambia su estado e imprime una descripción actualizada.
2. Crea una función `esCantidadValida(cantidad)` que devuelva `true` solo para números finitos no negativos. Prueba con `0`, `2.5`, `-1`, `NaN` y `Infinity`. Investiga qué comprueba `Number.isFinite()`.
3. Crea una función `contarPorEstado(lista, estadoBuscado)` que recorra una lista de cultivos y **devuelva** cuántos tienen ese estado. Prueba el arreglo anterior: `"cosecha"` debe devolver **1** y `"crecimiento"` debe devolver **1**.
4. Crea una función que calcule el promedio de agua semanal de una lista de cultivos. Define un resultado adecuado si la lista está vacía. Con los tres cultivos de ejemplo, el promedio es **4**.
5. Diseña un arreglo de objetos para una situación distinta: tres productos de una tienda, con nombre, precio y existencias. Escribe una función que calcule el valor del inventario.
6. Comprueba que cambiar el estado del primer cultivo no cambia el estado de los otros registros.

### Para observar una función breve

```js
const duplicarEjemplo = (numero) => numero * 2;
console.log(duplicarEjemplo(6));
```

Este es un ejemplo de **función flecha**. Su resultado es `12`. Encontrarás esta sintaxis en los manejadores de eventos, pero puedes utilizar funciones tradicionales cuando te resulten más claras.

### Depuración: error intencional

```js
function obtenerTotal(precio, cantidad) {
  const resultado = precio * cantidad;
}

console.log(obtenerTotal(2000, 3));
```

La operación se realiza, pero la llamada muestra `undefined`. Identifica qué instrucción falta para que el resultado pueda utilizarse fuera de la función.

**Comprobación:** modifica los objetos de entrada de tus funciones y verifica que el cálculo cambia sin tener que editar el interior de cada función.

---

## Práctica 1.6 — El DOM y los eventos

Ahora trabajarás con `index.html` y `js/main.js`. El **DOM** representa el documento HTML como elementos que JavaScript puede consultar y modificar. Un **evento** informa de una acción como escribir en un campo, hacer clic o enviar un formulario.

En `js/main.js` ya encontrarás un ejemplo que obtiene el elemento con identificador `anio` y cambia su texto por el año actual.

### Consultar y modificar un elemento

Debajo del código existente en `js/main.js` agrega:

```js
const tituloCultivos = document.getElementById("cultivosTitulo");
console.log(tituloCultivos.textContent);
tituloCultivos.textContent = "Catálogo de EcoHuerta";
```

Guarda y recarga `index.html`. Busca en el HTML el elemento con `id="cultivosTitulo"`. El selector devuelve ese elemento o `null` si no existe. `textContent` cambia su texto sin interpretar etiquetas HTML.

**Predice:** ¿qué sucede si cambias el identificador en JavaScript por uno inexistente y accedes a `textContent`? Prueba en un fragmento separado, lee el error y restaura el identificador correcto.

### Escuchar lo que escribe el usuario

```js
const campoBusqueda = document.getElementById("busqueda");

campoBusqueda.addEventListener("input", () => {
  console.log("Texto buscado: " + campoBusqueda.value);
});
```

`addEventListener()` registra una función que se ejecuta cuando ocurre el evento. `input` detecta cambios mientras el usuario escribe. El código de este ejemplo **solo muestra texto en la consola**: el filtrado de las tarjetas quedará para la actividad integradora.

### Crear elementos de forma segura

Prueba este fragmento para crear una tarjeta sencilla **adicional** a las tres que ya existen:

```js
const listaEjemplo = document.getElementById("listaCultivos");
const columnaEjemplo = document.createElement("div");
columnaEjemplo.className = "col-md-6 col-lg-4";

const tarjetaEjemplo = document.createElement("article");
tarjetaEjemplo.className = "card h-100";

const cuerpoEjemplo = document.createElement("div");
cuerpoEjemplo.className = "card-body";

const nombreEjemplo = document.createElement("h3");
nombreEjemplo.className = "h5";
nombreEjemplo.textContent = "Albahaca";

cuerpoEjemplo.append(nombreEjemplo);
tarjetaEjemplo.append(cuerpoEjemplo);
columnaEjemplo.append(tarjetaEjemplo);
listaEjemplo.append(columnaEjemplo);
```

Observa cómo `createElement()` crea elementos, `className` les asigna clases Bootstrap y `append()` los agrega al documento. No utilices `innerHTML` con textos provenientes del usuario: si necesitas mostrar esos textos, usa `textContent`.

### Actividades

1. Cambia el título principal de la sección de cultivos por otro texto mediante JavaScript y vuelve al texto original.
2. Con `document.querySelector()` selecciona la primera tarjeta usando el selector `".crop-card"`. Verifica su contenido mediante la consola.
3. Agrega un segundo elemento creado dinámicamente, con nombre y estado visible. Conserva la estructura de clases de Bootstrap.
4. Prueba `listaEjemplo.replaceChildren()` **en un fragmento de prueba**, observa qué contenido desaparece y recarga el documento para restaurarlo. Explica cómo podría servir para pintar una lista actualizada sin duplicar tarjetas.
5. Crea un pequeño aviso con `document.createElement("p")` y `classList.add("alert", "alert-info")`. Insértalo en la sección de cultivos.
6. Cambia el evento `input` por `change` en el ejemplo de búsqueda y compara cuándo se ejecuta en tu navegador.

### Depuración

Provoca intencionalmente un error escribiendo `getElementByID` (con `D` mayúscula) en lugar de `getElementById`. Consulta la Consola, identifica el nombre correcto del método y vuelve a ejecutar.

**Comprobación:** al menos un elemento debe crearse desde JavaScript y un evento debe responder a una acción real sin recargar la página. Antes de avanzar, comenta o elimina los cambios de demostración que no vayas a integrar al gestor.

---

## Práctica 1.7 — Formularios y validación de entradas

En la sección **Registrar un cultivo** hay cuatro controles. El HTML define el formulario; JavaScript debe leer sus datos, comprobarlos y reaccionar. No necesitas enviar información a un servidor.

### Evitar el envío tradicional y leer datos

Agrega en `js/main.js`, después de los ejemplos anteriores:

```js
const formularioEjemplo = document.getElementById("formCultivo");
const mensajeEjemplo = document.getElementById("mensajeFormulario");

formularioEjemplo.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById("nombreCultivo").value.trim();
  const diasTexto = document.getElementById("diasCultivo").value.trim();
  const dias = Number(diasTexto);

  if (nombre === "" || diasTexto === "" || !Number.isInteger(dias) || dias < 0) {
    mensajeEjemplo.className = "mt-3 alert alert-danger";
    mensajeEjemplo.textContent = "Revisa el nombre y los días del cultivo.";
    return;
  }

  mensajeEjemplo.className = "mt-3 alert alert-success";
  mensajeEjemplo.textContent = "Datos básicos válidos: " + nombre + " (" + dias + " días)";
});
```

`submit` se produce al enviar el formulario mediante el botón o con Enter. `preventDefault()` evita su comportamiento habitual de navegación o recarga. `trim()` elimina espacios al comienzo y al final. `Number()` convierte el texto a número, mientras `Number.isInteger()` comprueba que los días sean enteros.

Este ejemplo **todavía no registra ningún cultivo**: solo valida nombre y días. Tampoco valida los campos de agua y estado; esos son parte de tu trabajo posterior.

### Actividades

1. Envía el formulario con nombre `Albahaca` y días `12`. Debe aparecer un mensaje de éxito con esos datos básicos.
2. Escribe un nombre formado solamente por espacios. ¿Por qué es inválido?
3. Prueba los días `0`, `-1`, `1.5`, `"abc"` y el campo vacío. Los números negativos, los decimales y el campo vacío deben rechazarse. El navegador puede impedir algunas entradas antes de que JavaScript las reciba; para observar la lógica puedes probar conversiones por separado en la Consola.
4. Lee también el campo de agua. Antes de convertirlo, verifica si está vacío. Rechaza valores negativos, texto no numérico y valores no finitos; acepta `0` y `2.5`.
5. Lee `estadoCultivo`. Acepta solo `"semilla"`, `"crecimiento"` o `"cosecha"`.
6. Haz que el mensaje de error indique qué campo necesita corrección en vez de mostrar un texto genérico.
7. Comprueba que ningún envío inválido cambie los indicadores ni agregue tarjetas.

### Depuración: error de datos

Evalúa primero `Number("")` en la Consola. Después quita temporalmente la comprobación `diasTexto === ""` de tu ejercicio, deja los días vacíos y observa si la conversión podría aceptar un dato no ingresado. Restaura la condición.

**Comprobación:** se debe impedir la recarga del formulario, mostrar retroalimentación legible y rechazar explícitamente valores vacíos o no permitidos. En la actividad integradora utilizarás esa validación para crear objetos, no solamente mensajes.

---

## Práctica 1.8 — Depurar código y comprobar comportamiento

Los errores no siempre se ven como un mensaje rojo. Algunos detienen la ejecución y otros producen datos incorrectos aunque el programa continúe.

Para cada caso, trabaja con un fragmento aislado, **antes de consultar una respuesta externa**:

1. **Sintaxis:** `console.log("Registro"`. Corrige el cierre de la instrucción.
2. **Referencia:** `console.log(cultivoDesconocido)` sin declarar la variable. Comprueba el identificador escrito.
3. **Tipo:** `const valor = null; console.log(valor.nombre);`. Averigua por qué no puede leerse la propiedad.
4. **Conversión:** `const total = "5" + 2; console.log(total);`. Corrige el cálculo para que la salida sea `7`.
5. **Condición:** `if (estado = "cosecha")`. Explica por qué asignar no equivale a comparar.
6. **Índice:** intenta obtener el nombre de un elemento que no está en el arreglo. Antes de acceder a propiedades de ese elemento, comprueba que exista.
7. **DOM:** selecciona un identificador que no existe y trata de modificar su texto. Identifica la selección fallida.
8. **Lógica:** en un contador de cosecha, suma uno por cada cultivo, aunque no esté en cosecha. Modifica el algoritmo para sumar solo los que cumplen el criterio.

En cada caso escribe como comentario: **qué esperabas, qué observaste, cuál era la causa y cómo lo comprobaste después de corregirlo**.

### Herramientas para investigar

- `console.log(valor)` permite inspeccionar variables antes y después de una operación.
- `console.table(arreglo)` presenta arreglos de objetos en forma tabular.
- `console.error(mensaje)` muestra un mensaje destacado; no reemplaza el tratamiento del problema.
- La pestaña **Sources/Fuentes** de las herramientas del navegador permite colocar puntos de interrupción y avanzar línea a línea. Prueba una pausa dentro de tu ciclo de la Práctica 1.4.
- Observa la línea del error y lee la traza antes de editar varios archivos a la vez.

**Comprobación:** cuando termines, `fundamentos.html` y `index.html` deben abrirse sin errores no intencionales en la Consola.

---

## Actividad integradora — Construye un gestor básico de cultivos

### Situación

EcoHuerta muestra tres cultivos y un formulario, pero inicialmente sus indicadores, tarjetas y controles son ilustrativos. Necesitas transformarlo en una aplicación que mantenga una colección de cultivos en memoria y permita consultar y registrar información desde la interfaz.

Trabaja principalmente en `js/main.js`; puedes realizar ajustes puntuales en `index.html` o `css/style.css` si son necesarios. No reemplaces Bootstrap ni cambies los identificadores que utiliza el ejercicio.

### Datos iniciales

Utiliza este arreglo como punto de partida para tus propios algoritmos:

```js
const cultivos = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];
```

**Reglas del modelo:**

- `nombre`: texto no vacío después de quitar espacios al principio y al final; máximo 50 caracteres.
- `dias`: número entero, igual o mayor que cero.
- `agua`: número finito, igual o mayor que cero; admite decimales.
- `estado`: únicamente `semilla`, `crecimiento` o `cosecha`.
- Los estados son etiquetas registradas por el usuario; **no se deducen automáticamente** de los días de cultivo.
- Los nombres pueden repetirse: dos registros distintos podrían representar cultivos con el mismo nombre.
- No se usa base de datos. Si recargas la página, se pierden los cultivos añadidos durante esa visita, salvo que realices la ampliación opcional de persistencia.

### Requisitos funcionales

**A. Mostrar la lista desde JavaScript**

Al cargar `index.html` deben aparecer tarjetas a partir del arreglo. El contenido estático de `listaCultivos` debe sustituirse por contenido generado por tu código; evita que permanezcan tarjetas duplicadas.

Cada tarjeta debe mostrar el nombre, los días, el agua semanal en litros y el estado. Usa las clases de Bootstrap para conservar la cuadrícula adaptable y diferenciar visualmente los estados. Construye la información recibida del usuario como texto, no como HTML interpretado.

**B. Calcular indicadores**

Los elementos `totalCultivos`, `totalCrecimiento` y `totalCosecha` deben mostrar, respectivamente, el número total de registros, cuántos tienen estado `crecimiento` y cuántos tienen estado `cosecha`.

Los indicadores deben calcularse a partir de **todos los registros**, no solamente de los que estén visibles por un filtro. Deben actualizarse cuando se agregue un cultivo válido.

**C. Registrar un cultivo**

Al enviar `formCultivo`, lee `nombreCultivo`, `diasCultivo`, `aguaCultivo` y `estadoCultivo`. Valida todos los campos según las reglas anteriores. Si son válidos, crea un objeto, agrégalo al arreglo y actualiza la lista y los indicadores. Muestra una confirmación en `mensajeFormulario` y limpia el formulario; si hay un error, muestra un mensaje útil, conserva los datos para corregirlos y no modifiques el arreglo.

**D. Buscar por nombre**

El campo `busqueda` debe mostrar solo los cultivos cuyo nombre contenga el texto escrito, sin distinguir mayúsculas y minúsculas. Una búsqueda vacía muestra todos los registros compatibles con el filtro de estado.

**E. Filtrar por estado**

`filtroEstado` debe admitir `todos`, `semilla`, `crecimiento` y `cosecha`. Cuando búsqueda y filtro estén activos al mismo tiempo, muestra únicamente cultivos que cumplan **ambas** condiciones.

**F. Estado sin resultados**

Cuando la búsqueda y el filtro no encuentren registros, no deben quedar tarjetas antiguas. Muestra el aviso `sinResultados`; ocúltalo en cuanto exista al menos una coincidencia.

### Una estrategia de construcción por etapas

1. Define el arreglo inicial y comprueba su contenido mediante `console.table(cultivos)`.
2. Escribe una función que reciba una lista de objetos y dibuje tarjetas. Prueba primero con un único cultivo y luego con tres.
3. Escribe una función independiente para actualizar los tres indicadores.
4. Comprueba que ambos pasos funcionen al cargar la página.
5. Añade el evento del formulario y valida cada campo. Solo después incorpora `push()` y actualiza la interfaz.
6. Implementa la búsqueda y el filtro; prueba cada uno individualmente y finalmente juntos.
7. Resuelve el caso sin resultados y revisa las entradas incorrectas.
8. Quita los `console.log()` de exploración que ya no aporten información útil y ejecuta todos los casos de prueba.

**Pistas, sin solución completa:** recuerda `getElementById()`, `addEventListener()`, `textContent`, `createElement()`, `replaceChildren()`, `push()`, `for...of`, `toLowerCase()`, `includes()` y `Number.isFinite()`. Puedes mantener la lógica en funciones pequeñas como «dibujar tarjetas», «contar estados», «leer y validar datos» y «aplicar filtros», pero decide tú sus parámetros y valores de retorno.

### Casos de prueba obligatorios

| Nº | Acción | Resultado esperado |
| --- | --- | --- |
| 1 | Abrir `index.html` sin interactuar | Tres tarjetas; total **3**, crecimiento **1**, cosecha **1** |
| 2 | Buscar `tom` | Solo aparece **Tomate** |
| 3 | Buscar `TOM` | Aparece también **Tomate** |
| 4 | Buscar `xyz` | Cero tarjetas; aviso «No hay cultivos…» visible |
| 5 | Borrar búsqueda y elegir `semilla` | Solo aparece **Zanahoria** |
| 6 | Buscar `lech` y elegir `cosecha` | Cero tarjetas; aviso visible |
| 7 | Borrar búsqueda y elegir `todos` | Vuelven los tres cultivos |
| 8 | Registrar `Albahaca`, 10 días, 2.5 litros, `semilla` | Cuatro registros; total **4**, crecimiento **1**, cosecha **1** |
| 9 | Registrar `Perejil`, 0 días, 0 litros, `crecimiento` | Registro válido; total **5**, crecimiento **2**, cosecha **1** |
| 10 | Nombre vacío o solo espacios | No se agrega registro; mensaje de error |
| 11 | Días vacíos, negativos o decimales | No se agrega registro |
| 12 | Agua vacía o negativa | No se agrega registro |
| 13 | Estado sin seleccionar | No se agrega registro |
| 14 | Escribir `<b>Prueba</b>` como nombre | El texto se muestra literalmente; no se interpreta como etiqueta HTML |
| 15 | Filtrar después de agregar un cultivo | El nuevo registro se puede localizar si coincide con las condiciones |
| 16 | Registrar un cultivo inválido | Los indicadores conservan sus valores previos |
| 17 | Recargar la página | Vuelven los tres registros iniciales, salvo que hayas implementado persistencia opcional |

Para las pruebas 8 y 9, limpia la búsqueda y deja el filtro en «Todos» cuando necesites comprobar todas las tarjetas. Recuerda que el total de registros no depende del filtro elegido.

### Revisión de la solución

Antes de entregar, comprueba lo siguiente:

- [ ] Puedo explicar qué contiene cada objeto del arreglo y por qué lo utilizo.
- [ ] Puedo señalar dónde se usan variables, condiciones, ciclos y funciones.
- [ ] Los nombres de propiedades e identificadores coinciden en HTML y JavaScript.
- [ ] No hay tarjetas repetidas ni contadores que permanezcan desactualizados.
- [ ] Los datos vacíos y numéricos inválidos no crean registros.
- [ ] Las búsquedas funcionan con diferentes mayúsculas y minúsculas.
- [ ] La búsqueda combinada con el filtro funciona incluso sin coincidencias.
- [ ] La Consola no presenta errores no intencionales al interactuar con la página.
- [ ] Comprendo qué partes de mi programa solo viven en la memoria del navegador.

### Ampliaciones opcionales

Realiza estas ampliaciones **solo después de cumplir las pruebas obligatorias**:

1. Agrega un botón **Eliminar** a cada tarjeta. Al pulsarlo debe eliminarse exclusivamente el cultivo correspondiente y recalcularse la interfaz. Piensa cómo identificar cada registro si hay dos cultivos con el mismo nombre.
2. Guarda el arreglo con `localStorage.setItem()` y `JSON.stringify()`; al abrir la página recupéralo con `localStorage.getItem()` y `JSON.parse()`. Valida la información recuperada antes de utilizarla. Considera qué sucede si aún no existe ninguna clave guardada o el contenido no es válido.
3. Agrega un indicador que muestre el total de litros semanales necesarios para todos los cultivos.
4. Permite ordenar la lista por nombre o por días de cultivo, sin cambiar los valores almacenados.
5. Añade un modo oscuro utilizando `data-bs-theme` de Bootstrap y registra la preferencia del usuario.

Estas ampliaciones requieren investigar algunos detalles nuevos; no son indispensables para completar el laboratorio.

---

## Evidencias de trabajo

Conserva el proyecto con los archivos `fundamentos.html`, `index.html`, `css/style.css`, `js/fundamentos.js` y `js/main.js`. En el `README.md` añade una sección breve con:

- Cómo abrir y ejecutar el proyecto.
- Qué funcionalidades implementaste.
- Tres casos de prueba realizados y sus resultados.
- Un problema que encontraste, cómo lo identificaste y cómo lo resolviste.

Prepara una demostración en la que puedas ejecutar la aplicación, introducir un registro válido, probar uno inválido, combinar búsqueda y filtro y explicar una función escrita por ti. El código ejecutable y la comprobación de su comportamiento son la evidencia principal: no necesitas elaborar un informe aparte.

## Referencias de consulta

Consulta estos recursos cuando necesites ampliar una explicación o comprobar un método. Las instrucciones y ejemplos del laboratorio están incluidos en este documento.

- [Guía de JavaScript — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide).
- [Introducción a JavaScript — MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction).
- [Bootstrap 5.3 — Documentación oficial](https://getbootstrap.com/docs/5.3/getting-started/introduction/).
