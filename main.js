/**
 * ARQUIVO: main.js
 * Descrição: Implementação da lógica de interatividade para o site Agrinho 2026.
 * Recursos: Menu mobile, expansão de cards informativos e quiz ecológico.
 */

// Executa o código apenas após o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. FUNCIONALIDADE: MENU RESPONSIVO MOBILE
       ========================================== */
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            // Alterna a classe 'active' para exibir/esconder o menu no CSS
            navMenu.classList.toggle("active");
        });
    }

    // Fecha o menu automaticamente ao clicar em algum link interno
    const linksMenu = document.querySelectorAll(".nav-menu a");
    linksMenu.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });


    /* ==========================================
       2. FUNCIONALIDADE: CARDS INTERATIVOS (EXPANSÃO)
       ========================================== */
    const cards = document.querySelectorAll(".card-interativo");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // Alterna a classe 'ativo' no card clicado para mostrar os detalhes ocultos
            card.classList.toggle("ativo");
        });
    });

});


/* ==========================================
   3. FUNCIONALIDADE: QUIZ SUSTENTÁVEL DO AGRO
   ========================================== */
// Armazena as referências dos elementos HTML do Quiz
const perguntaContainer = document.getElementById("pergunta-container");
const quizResultado = document.getElementById("quiz-resultado");
const resultadoTexto = document.getElementById("resultado-texto");

/**
 * Verifica se a resposta clicada pelo estudante está correta.
 * @param {boolean} acertou - Indica se a alternativa é a correta.
 */
function verificarResposta(acertou) {
    // Oculta a área de perguntas
    perguntaContainer.classList.add("escondido");
    // Exibe a área de resultado
    quizResultado.classList.remove("escondido");

    if (acertou) {
        resultadoTexto.textContent = "🌱 Incrível! Você acertou! Os sensores ajudam a economizar muita água mapeando a umidade do solo.";
        resultadoTexto.style.color = "#2e7d32"; // Tom verde de sucesso
    } else {
        resultadoTexto.textContent = "❌ Quase lá! A alternativa correta era a Letra B (Sensores de Solo). Tente de novo para aprender mais!";
        resultadoTexto.style.color = "#c62828"; // Tom vermelho de erro
    }
}

/**
 * Reseta o estado do quiz para que o usuário jogue novamente.
 */
function reiniciarQuiz() {
    // Esconde o resultado
    quizResultado.classList.add("escondido");
    // Mostra novamente a pergunta original
    perguntaContainer.classList.remove("escondido");
}