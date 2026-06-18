/* ==========================
   BOTÃO EXPLORAR
========================== */

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* ==========================
   ANIMAÇÕES AO ROLAR
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================
   FAQ EXPANSÍVEL
========================== */

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        content.classList.toggle("active");

    });

});

/* ==========================
   CONTADORES ANIMADOS
========================== */

let countersStarted = false;

function animateCounters(){

    if(countersStarted) return;

    const statsSection = document.getElementById("estatisticas");

    const top = statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        countersStarted = true;

        animateValue("c1", 1200, 2000);
        animateValue("c2", 350, 2000);
        animateValue("c3", 5000, 2500);

    }

}

function animateValue(id, target, duration){

    const element = document.getElementById(id);

    let start = 0;

    const increment = target / (duration / 20);

    const timer = setInterval(() => {

        start += increment;

        if(start >= target){

            element.textContent = target.toLocaleString();

            clearInterval(timer);

        }else{

            element.textContent =
            Math.floor(start).toLocaleString();

        }

    }, 20);

}

window.addEventListener("scroll", animateCounters);
animateCounters();

/* ==========================
   QUIZ COMPLETO
========================== */

const perguntas = [

{
    pergunta: "Deepfakes utilizam Inteligência Artificial?",
    correta: true
},

{
    pergunta: "Deepfakes são sempre verdadeiros?",
    correta: false
},

{
    pergunta: "Deepfakes podem ser usados para golpes?",
    correta: true
},

{
    pergunta: "Verificar fontes ajuda a combater fake news?",
    correta: true
},

{
    pergunta: "Todo vídeo na internet é confiável?",
    correta: false
}

];

let indice = 0;
let pontos = 0;

const quizDiv = document.querySelector(".quiz");

mostrarPergunta();

function mostrarPergunta(){

    if(indice >= perguntas.length){

        let mensagem = "";

        if(pontos === 5){

            mensagem = "Excelente! Você domina o tema.";

        }else if(pontos >= 3){

            mensagem = "Muito bem! Você entende os riscos dos deepfakes.";

        }else{

            mensagem = "Vale a pena estudar mais sobre cidadania digital.";
        }

        quizDiv.innerHTML = `
            <h3>Quiz Finalizado</h3>
            <p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>
            <p>${mensagem}</p>
        `;

        return;
    }

    quizDiv.innerHTML = `
        <p>${perguntas[indice].pergunta}</p>

        <button onclick="responder(true)">
            Sim
        </button>

        <button onclick="responder(false)">
            Não
        </button>
    `;
}

function responder(resposta){

    if(resposta === perguntas[indice].correta){
        pontos++;
    }

    indice++;

    mostrarPergunta();

}

/* ==========================
   EFEITO DIGITAÇÃO NO TÍTULO
========================== */

const titulo =
document.querySelector(".hero h1");

const textoOriginal =
titulo.textContent;

titulo.textContent = "";

let i = 0;

function digitar(){

    if(i < textoOriginal.length){

        titulo.textContent +=
        textoOriginal.charAt(i);

        i++;

        setTimeout(digitar, 50);
    }

}

window.addEventListener("load", digitar);
