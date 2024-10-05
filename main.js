// Menu retrátil
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Ativa e desativa o menu
});


// Animação do banner
let bannerImages = document.querySelectorAll('.banner img');
let currentImageIndex = 0;

function changeBannerImage() {
    bannerImages[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
    bannerImages[currentImageIndex].style.display = 'block';
}

setInterval(changeBannerImage, 3000); // Troca de imagem a cada 3 segundos

// Seleciona o elemento da imagem principal
const imagemPrincipal = document.getElementById('imagem-principal');
// Seleciona todas as miniaturas
const miniaturas = document.querySelectorAll('.miniatura');

// Adiciona evento de clique nas miniaturas para trocar a imagem principal
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', () => {
        // Salva a imagem atual da principal
        const imagemAtual = imagemPrincipal.src;
        // Troca a imagem principal com a miniatura clicada
        imagemPrincipal.src = miniatura.src;
        // A miniatura clicada recebe a imagem que estava na principal
        miniatura.src = imagemAtual;
    });
});

// Evento de clique no botão para entrar em contato com o vendedor
const contatoVendedor = document.getElementById('contato-vendedor');
contatoVendedor.addEventListener('click', () => {
    window.location.href = "mailto:vendedor@exemplo.com";
});


