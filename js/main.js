
const anio = document.getElementById("anio");
anio.textContent = new Date().getFullYear();

let cultivos = [
    { nombre: "Tomate", estado: "cosecha", dias: 85, agua: 7 },
    { nombre: "Lechuga", estado: "crecimiento", dias: 25, agua: 3 },
    { nombre: "Zanahoria", estado: "semilla", dias: 5, agua: 2 }
];

const lista = document.getElementById("listaCultivos");
const busqueda = document.getElementById("busqueda");
const filtro = document.getElementById("filtroEstado");
const sinResultados = document.getElementById("sinResultados");
const formulario = document.getElementById("formCultivo");
const mensaje = document.getElementById("mensajeFormulario");

function mostrarCultivos() {
    const texto = busqueda.value.trim().toLowerCase();
    const estado = filtro.value;

    const encontrados = cultivos.filter(cultivo =>
        cultivo.nombre.toLowerCase().includes(texto) &&
        (estado === "todos" || cultivo.estado === estado)
    );

    lista.innerHTML = "";

    encontrados.forEach(cultivo => {
        const columna = document.createElement("div");
        columna.className = "col-md-6 col-lg-4";

        const tarjeta = document.createElement("article");
        tarjeta.className = "card crop-card h-100";

        const portada = document.createElement("div");
        portada.className = "crop-cover";
        portada.textContent = cultivo.nombre.toUpperCase();

        const cuerpo = document.createElement("div");
        cuerpo.className = "card-body";

        const titulo = document.createElement("h3");
        titulo.className = "h5";
        titulo.textContent = cultivo.nombre;

        const insignia = document.createElement("span");
        insignia.className = "badge text-bg-" +
            (cultivo.estado === "cosecha" ? "success" :
             cultivo.estado === "crecimiento" ? "warning" : "secondary");
        insignia.textContent =
            cultivo.estado.charAt(0).toUpperCase() + cultivo.estado.slice(1);

        const detalles = document.createElement("p");
        detalles.className = "text-secondary small mt-3 mb-0";
        detalles.textContent =
            `Días de cultivo: ${cultivo.dias} · Agua por semana: ${cultivo.agua} L`;

        cuerpo.append(titulo, insignia, detalles);
        tarjeta.append(portada, cuerpo);
        columna.appendChild(tarjeta);
        lista.appendChild(columna);
    });

    sinResultados.classList.toggle("d-none", encontrados.length > 0);
    actualizarIndicadores();
}

function actualizarIndicadores() {
    document.getElementById("totalCultivos").textContent = cultivos.length;
    document.getElementById("totalCrecimiento").textContent =
        cultivos.filter(c => c.estado === "crecimiento").length;
    document.getElementById("totalCosecha").textContent =
        cultivos.filter(c => c.estado === "cosecha").length;
}

busqueda.addEventListener("input", mostrarCultivos);
filtro.addEventListener("change", mostrarCultivos);

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombreCultivo").value.trim();
    const estado = document.getElementById("estadoCultivo").value;
    const dias = Number(document.getElementById("diasCultivo").value);
    const agua = Number(document.getElementById("aguaCultivo").value);

    if (!nombre || !estado ||
        document.getElementById("diasCultivo").value === "" ||
        document.getElementById("aguaCultivo").value === "" ||
        !Number.isInteger(dias) || dias < 0 ||
        !Number.isFinite(agua) || agua < 0) {
        mensaje.className = "mt-3 alert alert-danger";
        mensaje.textContent = "Revisa los datos. Completa los campos y usa cantidades válidas.";
        return;
    }

    cultivos.push({ nombre, estado, dias, agua });
    formulario.reset();

    mensaje.className = "mt-3 alert alert-success";
    mensaje.textContent = "¡Cultivo agregado correctamente!";

    mostrarCultivos();
});

mostrarCultivos();

console.log("EcoHuerta: gestor de cultivos iniciado correctamente.");
