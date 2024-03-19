// Seu código JavaScript existente
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 1100}px)`;
}
setInterval(carrosel, 10000);

const imagens = document.querySelectorAll(".imagem");

function redirecionarParaURL(event) {
    const div = event.currentTarget;
    const url = div.getAttribute("data-url");
    
    if (url) {
        window.location.href = url;
    }
}

imagens.forEach((imagem) => {
    imagem.addEventListener("click", redirecionarParaURL);
});

document.getElementById("seta-esquerda").addEventListener("click", irParaEsquerda);
document.getElementById("seta-direita").addEventListener("click", irParaDireita);

function irParaEsquerda() {
    idx--;
    
    if (idx < 0) {
        idx = img.length - 1;
    }
    
    atualizarCarrossel();
}

function irParaDireita() {
    idx++;
    
    if (idx > img.length - 1) {
        idx = 0;
    }
    
    atualizarCarrossel();
}

function atualizarCarrossel() {
    imgs.style.transform = `translateX(${-idx * 1100}px)`;
}
