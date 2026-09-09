// ==========================================
// 1. Barra de avisos
// ==========================================

const mensajesAviso = [
  "🔥 ¡Juan acaba de inscribirse al Plan VIP!",
  "💪 Quedan pocos cupos para la clase de Spinning de hoy.",
  "⚡ ¡Aprovecha! 15% de descuento en Pase Estudiante.",
  "🏋️ María completó su entrenamiento de hoy.",
  "🎯 Nuevo horario: Abiertos desde las 6:00 AM.",
];

function mostrarAvisoAleatorio() {
  const barraAviso = document.getElementById("barra-aviso");
  const textoAviso = document.getElementById("texto-aviso");
  const numeroAleatorio = Math.random();
  const indiceAleatorio = Math.floor(numeroAleatorio * mensajesAviso.length);

  textoAviso.textContent = mensajesAviso[indiceAleatorio];

  barraAviso.classList.remove("oculto");
}

mostrarAvisoAleatorio();

// ==========================================
// 2. Formulario de inscripción
// ==========================================

function registrarMembresia() {
  const nombre = document.getElementById("nombre").value;
  const edadIngresada = document.getElementById("edad").value;
  const correo = document.getElementById("correo").value;
  const membresia = document.getElementById("membresia").value;

  if (nombre.trim() === "" || correo.trim() === "" || edadIngresada === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const edad = parseInt(edadIngresada);
  let estadoRegistro = "";

  if (edad < 18) {
    estadoRegistro =
      "Requiere firma de apoderado. ¡Tienes 15% de descuento juvenil!";
  } else if (edad >= 60) {
    estadoRegistro = "¡Obtienes 20% de descuento Senior Fit!";
  } else {
    estadoRegistro = "Registro en tarifa regular.";
  }

  const mensaje = `
        ¡Hola, ${nombre}!
        
        Has seleccionado el plan: ${membresia.toUpperCase()}.
        Correo registrado: ${correo}
        Estado: ${estadoRegistro}

        ¡Gracias por elegir PowerFit!
        `;

  alert(mensaje);
}

// ==========================================
// 3. Carrusel de imágenes
// ==========================================

let imagenActual = 0;

function moverCarrusel(direccion) {
  const imagenes = document.querySelectorAll(".imagen-carrusel");
  const totalImagenes = imagenes.length;

  imagenActual = (imagenActual + direccion + totalImagenes) % totalImagenes;

  document.querySelector(".imagenes-carrusel").style.transform =
    `translateX(-${imagenActual * 100}%)`;
}

// ==========================================
// 4. Calculadora de IMC
// ==========================================

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado-imc");

  if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
    resultado.innerHTML = "<strong>Por favor, ingresa datos válidos.</strong>";

    resultado.className = "resultado-imc imc-peligro";

    return;
  }

  const altura = alturaCm / 100;
  const imc = (peso / (altura * altura)).toFixed(2);

  let categoria = "";
  let claseCss = "";

  if (imc < 18.5) {
    categoria = "Bajo peso";
    claseCss = "imc-alerta";
  } else if (imc < 25) {
    categoria = "Peso normal";
    claseCss = "imc-normal";
  } else if (imc < 30) {
    categoria = "Sobrepeso";
    claseCss = "imc-alerta";
  } else {
    categoria = "Obesidad";
    claseCss = "imc-peligro";
  }

  resultado.className = `resultado-imc ${claseCss}`;

  resultado.innerHTML = `Tu IMC es: <strong>${imc}</strong>
        <br>
        Categoría: <strong>${categoria}</strong>`;
}
