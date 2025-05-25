let intentos = 5;
let listaDinamica = [];
let palabraSecreta;
let palabraSecretaCategoria;
let palabras = [];

//cargamos palabras desde JSON
fetch('resources/data/palabras.json')
  .then(response => {
    if (!response.ok) throw new Error("Error al cargar palabras");
    return response.json();
  })
  .then(data => {
    palabras = data.palabras;
    iniciarJuego();

    //asignar eventos a las teclas dinamicamente
    document.querySelectorAll("#teclado button").forEach(button => {
      const letra = button.textContent;
      if (letra !== "🔁") {
        button.addEventListener("click", () => comprobarLetraElegida(letra));
      }
    });
  })
  .catch(error => {
    console.error("Error:", error);
    palabras = [
      {"nombre": "ESPAÑA", "categoria": "PAISES DE EUROPA 🌍"},
      {"nombre": "FRANCIA", "categoria": "PAISES DE EUROPA 🌍"},
      {"nombre": "PIZZA", "categoria": "COMIDAS 🍖"}
    ];
    iniciarJuego();
  });

function iniciarJuego() {
  crearPalabraSecreta();
  palabraEnPantalla();
  cargarImagenHoguera(); //mostrar mujer1.png al iniciar potencialmente innceseario 
  actualizarVidas(); //actualizar vidas al inicio
}

function crearPalabraSecreta() {
  const indexPalabra = Math.floor(Math.random() * palabras.length);
  palabraSecreta = palabras[indexPalabra].nombre;
  palabraSecretaCategoria = palabras[indexPalabra].categoria;
  listaDinamica = [];
}

function palabraEnPantalla() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palabraSecretaCategoria;

  const palabraPantalla = document.getElementById("palabra-secreta");
  palabraPantalla.innerHTML = "";

  for (let i = 0; i < palabraSecreta.length; i++) {
    const letra = palabraSecreta[i];
    const letraMostrada = listaDinamica[i] || (letra === " " ? " " : "&nbsp;");
    const clase = letra === " " ? "letrasEspacio" : "letras";
    palabraPantalla.innerHTML += `<div class="${clase}">${letraMostrada}</div>`;
  }
}

function comprobarLetraElegida(letra) {
  const tecla = document.getElementById(`tecla-${letra}`);
  if (!tecla || tecla.disabled) return;

  tecla.disabled = true;
  if (intentos <= 0) return;

  const letraEncontrada = palabraSecreta.includes(letra);
  cambiarEstiloLetra(`tecla-${letra}`, letraEncontrada);

  if (letraEncontrada) {
    actualizarLetrasAcertadas(letra);
  } else {
    intentos--;
    cargarImagenHoguera(); //carga después de restar
    actualizarVidas();

    if (intentos === 0) {
      actualizarVidas();
      abrirModal("Perdiste", 'Tu amada sucumbió a las llamas 🔥<br>...<br>La palabra secreta era: ${palabraSecreta}');
      return;
    }
  }

  palabraEnPantalla();
  verificarVictoria();
}

function cambiarEstiloLetra(teclaId, acertada) {
  const tecla = document.getElementById(teclaId);
  if (tecla) {
    tecla.style.background = acertada ? "#52d946" : "#bb2c27";
    tecla.style.color = "#ffffff";
  }
}

function actualizarLetrasAcertadas(letra) {
  listaDinamica = [...palabraSecreta].map((char, i) =>
    char === letra ? letra : (listaDinamica[i] || null)
  );
}

function verificarVictoria() {
  const victoria = [...palabraSecreta].every((letra, i) =>
    letra === " " || listaDinamica[i] === letra
  );

  if (victoria) {
    abrirModal("¡Enhorabuena!", 'Has salvado a tu amada 💧');
    intentos = 0;
    actualizarVidas();
  }
}


function cargarImagenHoguera() {
  const imagen = document.getElementById("imagen");
  switch (intentos) {
    case 4:
      imagen.style.background = "url('resources/img/hogeras/mujer2.png')";
      break;
    case 3:
      imagen.style.background = "url('resources/img/hogeras/mujer3.png')";
      break;
    case 2:
      imagen.style.background = "url('resources/img/hogeras/mujer4.png')";
      break;
    case 1:
      imagen.style.background = "url('resources/img/hogeras/mujer5.png')";
      break;
    case 0:
      imagen.style.background = "url('resources/img/hogeras/mujer6.png')";
      break;
    default:
      imagen.style.background = "url('resources/img/hogeras/mujer1.png')";
      break;
  }
}

function actualizarVidas() {
  const elementoVidas = document.getElementById("vidas");
  if (elementoVidas) {
    elementoVidas.innerHTML = "Vidas restantes: ${'❤️'.repeat(intentos)}";
  }
}

function abrirModal(titulo, mensaje) {
  const modalTitulo = document.getElementById("ModalTitulo");
  const modalBody = document.getElementById("ModalBody");

  if (modalTitulo && modalBody) {
    modalTitulo.innerText = titulo;
    modalBody.innerHTML = mensaje;
    $("#myModal").modal({ show: true });
  }
}

//botón de reinicio
document.querySelector("#btnReiniciar")?.addEventListener("click", () => {
  location.reload();
});
