// variables
const formulario = document.querySelector('#formulario');
const listaTweet = document.querySelector('#lista-tweets');
let tweets = [];

document.addEventListener('DOMContentLoaded', () => {
  formulario.addEventListener('submit', agregarTweet);
});

// funciones
function agregarTweet(evento) {
  evento.preventDefault();

  // TextArea donde el usuario escribe
  const tweet = formulario.querySelector('#tweet').value;

  if (tweet === '') {
    mostrarError('Un mensaje no puede ir vacio');
    return; //previene ejecución de más lineas de código
  }

  // crear objeto con identificado unico
  const tweetObj = {
    id: Date.now(), //muestra fecha unica
    tweet,
  };

  // añadir al arreglo de tweets
  tweets = [...tweets, tweetObj];

  // Una vez agregado vamos a crear el HTML
  crearHTML();

  // Reiniciar el formulario
  formulario.reset();
}

// Mostrar un mensaje de error
function mostrarError(mensaje) {
  const mensajeError = document.createElement('P');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('error');

  // Insertarlo en el Contenido
  const contenido = document.querySelector('#contenido');
  contenido.appendChild(mensajeError);

  // Elimina la alerta despues de 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
  // limpia
  limpiarHTML();
  if (tweets.length > 0) {
    tweets.forEach((elemento) => {
      // Crear HTML
      const li = document.createElement('LI');

      // Añadir el texto
      li.innerText = elemento.tweet;

      // Insertarlo en el html
      listaTweet.appendChild(li);
    });
  }
}

function limpiarHTML() {
  // Remover el primer hijo encontrado
  while (listaTweet.firstChild) {
    listaTweet.removeChild(listaTweet.firstChild);
  }
}
