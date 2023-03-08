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

  console.log('agregando');
}
