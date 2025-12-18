const imagens = document.querySelectorAll('.imgs img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('imgModal');

const btnFechar = document.querySelector('.btnfechar img');
const btnPrev = document.querySelector('.prev img');
const btnNext = document.querySelector('.next img');

let index = 0;

/* ===== Funções ===== */

function abrirModal(i) {
    index = i;
    modalImg.src = imagens[index].src;
    modal.style.display = 'flex';
    mostrarControles();
}

function fecharModal() {
    modal.style.display = 'none';
    modalImg.src = '';
    esconderControles();
}

function atualizarImagem() {
    modalImg.src = imagens[index].src;
}

function mostrarControles() {
    btnFechar.style.display = 'block';
    btnPrev.style.display = 'block';
    btnNext.style.display = 'block';
}

function esconderControles() {
    btnFechar.style.display = 'none';
    btnPrev.style.display = 'none';
    btnNext.style.display = 'none';
}

/* ===== Eventos ===== */

// Abrir modal ao clicar nas imagens
imagens.forEach((img, i) => {
    img.addEventListener('click', () => abrirModal(i));
});

// Fechar modal no botão
btnFechar.addEventListener('click', fecharModal);

// Navegação do carousel
btnNext.addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    atualizarImagem();
});

btnPrev.addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    atualizarImagem();
});

// Fechar modal clicando fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        fecharModal();
    }
});
