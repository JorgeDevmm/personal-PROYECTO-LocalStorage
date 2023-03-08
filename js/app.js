// variables
const formulario = document.querySelector('#formulario');
const listatTweet = document.querySelector('#lista-tweets');
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
  console.log('Agregando tweet');
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
