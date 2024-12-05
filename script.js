let indiceAtual = 0;

function mudarImagem(direcao) {
  const imagens = document.querySelectorAll('.carrossel img');
  const totalImagens = imagens.length;

  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = totalImagens - 1;
  } else if (indiceAtual >= totalImagens) {
    indiceAtual = 0;
  }

  const carrossel = document.querySelector('.carrossel');
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

function mudarImagem2(direcao) {
  const imagens = document.querySelectorAll('.carrossel2 img');
  const totalImagens = imagens.length;

  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = totalImagens - 1;
  } else if (indiceAtual >= totalImagens) {
    indiceAtual = 0;
  }

  const carrossel = document.querySelector('.carrossel2');
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

// Seleciona o botão e o menu
const menuToggle = document.getElementById('menuToggle');
const navbarMenu = document.getElementById('navbarMenu');

// Adiciona um evento de clique
menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});
