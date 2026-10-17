// Laboratorio 1 — EcoHuerta
// Escribe debajo los ejemplos de las prácticas 1.1 a 1.5.
// Guarda este archivo y recarga fundamentos.html para ver la salida en la Consola.

console.log("EcoHuerta: JavaScript conectado correctamente.");

console.log("Bienvenido a EcoHuerta");
console.log(8 + 5);
console.log("8" + 5);
console.warn("Este cultivo necesita revisión");

console.log("Mi nombre es Andrés Felipe Lozano Prieto");

let cultivo = "Tomate";
let filas = 4;
let plantasPorFila = 7;

console.log("Cultivo:", cultivo);
console.log("Total de plantas:", filas * plantasPorFila);

let litrosPorPlanta = 2;
console.log("Litros de agua necesarios:", filas * plantasPorFila * litrosPorPlanta);

console.log("División:", 10 / 2);
console.log("Módulo:", 10 % 3);
console.log("Potencia:", 2 ** 3);

console.error("Este es un ejemplo de error");
console.warn("Este cultivo necesita revisión");

console.log("Práctica 1.2: Variables y tipos de datos");

const nombreCultivo = "Lechuga";
let cantidadPlantas = 25;
let cultivoActivo = true;
let cultivoPendiente;

console.log("Nombre:", nombreCultivo);
console.log("Tipo de nombre:", typeof nombreCultivo);

console.log("Cantidad:", cantidadPlantas);
console.log("Tipo de cantidad:", typeof cantidadPlantas);

console.log("¿Está activo?:", cultivoActivo);
console.log("Tipo de estado:", typeof cultivoActivo);

console.log("Cultivo pendiente:", cultivoPendiente);
console.log("Tipo pendiente:", typeof cultivoPendiente);

console.log("Prueba de conversiones y comparaciones");

let cantidadTexto = "12";
let cantidadNumero = Number(cantidadTexto);

console.log("Texto original:", cantidadTexto);
console.log("Cantidad convertida:", cantidadNumero);
console.log("Tipo convertido:", typeof cantidadNumero);

console.log("Comparación simple:", 5 == "5");
console.log("Comparación estricta:", 5 === "5");
console.log("¿Hay plantas disponibles?", cantidadNumero > 0);

console.log("Actividad: producto e inventario");

const productoPrueba = "Semillas de tomate";
const precioPrueba = 2500;
let unidadesPrueba = 10;
const disponiblePrueba = true;

console.log("Producto:", productoPrueba);
console.log("Precio:", precioPrueba);
console.log("Unidades:", unidadesPrueba);
console.log("Disponible:", disponiblePrueba);

console.log("Valor de 10 unidades:", precioPrueba * unidadesPrueba);
console.log("Valor de 7 unidades:", precioPrueba * 7);
console.log("Diferencia:", precioPrueba * 10 - precioPrueba * 7);

console.log("Operación 1:", 10 + 2 * 3);
console.log("Operación 2:", (10 + 2) * 3);

console.log("Costo del agua:", 3.5 * 4 * 250);

console.log("Operadores abreviados");

let contadorPrueba = 5;

contadorPrueba += 1;
console.log("Después de sumar:", contadorPrueba);

contadorPrueba -= 2;
console.log("Después de restar:", contadorPrueba);

contadorPrueba *= 3;
console.log("Después de multiplicar:", contadorPrueba);

console.log("10 > 8:", 10 > 8);
console.log("10 <= 8:", 10 <= 8);
console.log('10 !== "10":', 10 !== "10");
console.log("5 === 5:", 5 === 5);

console.log("Práctica 1.3: Condicionales");

let aguaDisponible = 8;

if (aguaDisponible >= 10) {
    console.log("Agua suficiente para el cultivo");
} else if (aguaDisponible >= 5) {
    console.log("Agua limitada, revisar el cultivo");
} else {
    console.log("Agua insuficiente, necesita atención");
}


console.log("Prueba de operadores lógicos");

let aguaCultivo = 8;
let cultivoEncendido = true;

if (aguaCultivo >= 5 && cultivoEncendido) {
    console.log("El cultivo está activo y tiene agua suficiente");
}

if (aguaCultivo < 5 || !cultivoEncendido) {
    console.log("El cultivo necesita revisión");
} else {
    console.log("El cultivo no necesita revisión urgente");
}

console.log("Actividad: clasificación de existencias");

let existenciasPrueba = 3;

if (existenciasPrueba === 0) {
    console.log("Sin existencias");
} else if (existenciasPrueba >= 1 && existenciasPrueba <= 5) {
    console.log("Existencias bajas");
} else if (existenciasPrueba > 5) {
    console.log("Disponible");
} else {
    console.log("Cantidad inválida");
}

console.log("Clasificación de calificaciones");

let calificacionPrueba = 75;

if (calificacionPrueba < 0 || calificacionPrueba > 100) {
    console.log("Calificación inválida");
} else if (calificacionPrueba <= 59) {
    console.log("Por mejorar");
} else if (calificacionPrueba <= 79) {
    console.log("Aceptable");
} else {
    console.log("Destacado");
}

console.log("Actividad: alerta de cultivo");

let estadoAlerta = "crecimiento";
let aguaAlerta = 1.5;

if (estadoAlerta === "crecimiento" && aguaAlerta < 2) {
    console.log("Revisar cultivo: agua insuficiente");
} else {
    console.log("El cultivo no cumple las condiciones de alerta");
}

console.log("Práctica 1.4: Arreglos y ciclos");

const cultivosPrueba = ["Tomate", "Lechuga", "Zanahoria"];

console.log("Todos los cultivos:", cultivosPrueba);
console.log("Primer cultivo:", cultivosPrueba[0]);
console.log("Segundo cultivo:", cultivosPrueba[1]);
console.log("Cantidad de cultivos:", cultivosPrueba.length);

console.log("Recorriendo cultivos:");

for (let i = 0; i < cultivosPrueba.length; i++) {
    console.log(cultivosPrueba[i]);
}


console.log("Recorriendo cultivos con while:");

let indiceCultivo = 0;

while (indiceCultivo < cultivosPrueba.length) {
    console.log(cultivosPrueba[indiceCultivo]);
    indiceCultivo++;
}
console.log("Total de plantas por cultivo:");

const plantasPorCultivo = [12, 8, 15];
let totalPlantas = 0;

for (let i = 0; i < plantasPorCultivo.length; i++) {
    totalPlantas += plantasPorCultivo[i];
}

console.log("Total de plantas:", totalPlantas);

console.log("Actividad 1: cinco cultivos");

const listaCincoCultivos = [
    "Tomate",
    "Lechuga",
    "Zanahoria",
    "Cebolla",
    "Papa"
];

console.log("Primer cultivo:", listaCincoCultivos[0]);
console.log("Último cultivo:", listaCincoCultivos[listaCincoCultivos.length - 1]);
console.log("Cantidad de cultivos:", listaCincoCultivos.length);

console.log("Actividad 2: agregar y eliminar cultivos");

const cultivosGestion = ["Tomate", "Lechuga", "Zanahoria"];

console.log("Lista inicial:", cultivosGestion);

cultivosGestion.push("Cebolla");
console.log("Después de agregar:", cultivosGestion);

cultivosGestion.pop();
console.log("Después de eliminar:", cultivosGestion);

console.log("Cantidad final:", cultivosGestion.length);

console.log("Actividad 3: suma y promedio");

const cantidadesCultivos = [12, 8, 15, 5, 10];
let sumaCultivos = 0;

for (const cantidad of cantidadesCultivos) {
    sumaCultivos += cantidad;
}

const promedioCultivos = sumaCultivos / cantidadesCultivos.length;

console.log("Suma:", sumaCultivos);
console.log("Promedio:", promedioCultivos);


console.log("Práctica 1.5: Objetos y funciones");

// Actividad 1: modificar un objeto
cultivoEjemplo.responsable = "Andrés";
cultivoEjemplo.estado = "crecimiento";

console.log(
    cultivoEjemplo.nombre + " está en " +
    cultivoEjemplo.estado + " y su responsable es " +
    cultivoEjemplo.responsable
);

// Actividad 2: validar cantidades
function esCantidadValida(cantidad) {
    return Number.isFinite(cantidad) && cantidad >= 0;
}

console.log("Cantidad 0:", esCantidadValida(0));
console.log("Cantidad 2.5:", esCantidadValida(2.5));
console.log("Cantidad -1:", esCantidadValida(-1));
console.log("Cantidad NaN:", esCantidadValida(NaN));
console.log("Cantidad Infinity:", esCantidadValida(Infinity));

// Cultivos de ejemplo
const cultivosDeEjemplo = [
    { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
    { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
    { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];

// Actividad 3: contar cultivos por estado
function contarPorEstado(lista, estadoBuscado) {
    let total = 0;

    for (const cultivo of lista) {
        if (cultivo.estado === estadoBuscado) {
            total++;
        }
    }

    return total;
}

console.log("Cultivos en cosecha:", contarPorEstado(cultivosDeEjemplo, "cosecha"));
console.log("Cultivos en crecimiento:", contarPorEstado(cultivosDeEjemplo, "crecimiento"));

// Actividad 4: promedio de agua semanal
function promedioAgua(lista) {
    if (lista.length === 0) {
        return 0;
    }

    let suma = 0;

    for (const cultivo of lista) {
        suma += cultivo.agua;
    }

    return suma / lista.length;
}

console.log("Promedio de agua:", promedioAgua(cultivosDeEjemplo));

// Actividad 5: inventario de una tienda
const productos = [
    { nombre: "Semillas", precio: 1800, existencias: 10 },
    { nombre: "Macetas", precio: 5000, existencias: 4 },
    { nombre: "Abono", precio: 3500, existencias: 6 }
];

function calcularInventario(lista) {
    let total = 0;

    for (const producto of lista) {
        total += producto.precio * producto.existencias;
    }

    return total;
}

console.log("Valor del inventario:", calcularInventario(productos));

// Actividad 6: modificar un objeto sin afectar los demás
const cultivosIndependientes = cultivosDeEjemplo.map(cultivo => ({ ...cultivo }));

cultivosIndependientes[0].estado = "crecimiento";

console.log("Estado del primer cultivo modificado:", cultivosIndependientes[0].estado);
console.log("Estado del segundo cultivo:", cultivosIndependientes[1].estado);

// Función flecha
const duplicarEjemplo = numero => numero * 2;
console.log("Duplicar 6:", duplicarEjemplo(6));

// Separar cálculo y presentación
function costoTotalProducto(precio, unidades) {
    return precio * unidades;
}

console.log("Total del producto:", costoTotalProducto(1800, 3));

console.log("Práctica 1.5 completada");
