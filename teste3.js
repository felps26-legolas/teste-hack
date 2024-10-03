// Função de animação estilo Matrix
const matrixContainer = document.querySelector('.matrix-animation');
const letters = '0123456789';
const columns = Math.floor(window.innerWidth / 20);

function createFallingNumber() {
for (let i = 0; i < columns; i++) {
    const span = document.createElement('span');
    span.style.position = 'absolute';
    span.style.left = `${i * 20}px`;
    span.style.top = '-100%';
    span.innerHTML = letters[Math.floor(Math.random() * letters.length)];
    span.classList.add('falling-number');  // Adiciona a classe com a animação
    matrixContainer.appendChild(span);
    setTimeout(() =>{
    matrixContainer.removeChild(span)},10000);
    }
}

setInterval(createFallingNumber, 1000);


// Função para simular a barra de progresso
const progressBar = document.getElementById('progress-bar');
const message = document.getElementById('message');
let width = 0;

function simulateDownload() {
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            message.style.display = 'block';
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 50); // A cada 50ms, a barra aumenta
}

// Iniciar a animação de progresso após carregar a página
window.onload = simulateDownload;