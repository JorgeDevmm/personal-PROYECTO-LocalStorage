// variables
const formulario = document.querySelector('#formulario');
const listaTweet = document.querySelector('#lista-tweets');
let tweets = [];

// EventListeners
eventListener();

function eventListener() {
  // Cuando usuario agrega un nuevo tweet
  formulario.addEventListener('submit', agregarTweet);

  // Cuando el documento esta listo
  document.addEventListener('DOMContentLoaded', () => {
    // intenta obtener contenido en localstorage o devuelve un array []
    tweets = JSON.parse(localStorage.getItem('twees')) || [];

    // Creo el html si existe algo en localstorage
    crearHTML();
  });
}

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
      // Agregar un boton de eliminar
      const btnEliminar = document.createElement('A');

      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.innerText = 'X';

      // Añadir la función de eliminar
      btnEliminar.onclick = () => {
        borrarTweet(elemento.id);
      };

      // Crear HTML|
      const li = document.createElement('LI');

      // Añadir el texto
      li.innerText = elemento.tweet;

      // Asignar el boton
      li.appendChild(btnEliminar);

      // Insertarlo en el html
      listaTweet.appendChild(li);
    });
  }

  sincronizarStorage();
}
// Agrega los tweets actuales
function sincronizarStorage() {
  localStorage.setItem('twees', JSON.stringify(tweets));
}

// Eliminar un tweet
function borrarTweet(id) {
  console.log(id);
  // aplicamos filter para crear un nuevo arreglo
  tweets = tweets.filter((tweet) => tweet.id !== id);

  // creamos de nuevo html con los valor diferentes al filtro
  crearHTML();
  console.log(tweets);
}

// Limpar el HTML
function limpiarHTML() {
  // Remover el primer hijo encontrado
  while (listaTweet.firstChild) {
    listaTweet.removeChild(listaTweet.firstChild);
  }
}
