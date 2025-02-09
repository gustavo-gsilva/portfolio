const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const menuHamburguer = document.getElementById('hamburguer-menu');
const fecharMenu = document.getElementById('fechar-menu');
const listaDeNavegacao = document.querySelector('.lista-navegacao');
const overlay = document.querySelector('.overlay');

function mostrarFundoOverlay() {
    overlay.style.display = 'block';
};

function esconderFundoOverlay() {
    overlay.style.display = 'none';
};

function mostrarMenu() {
    listaDeNavegacao.style.display = 'block';
};

function esconderMenu() {
    listaDeNavegacao.style.display = 'none';
};

menuHamburguer.addEventListener('click', () => {
    mostrarMenu();
    mostrarFundoOverlay();
});

fecharMenu.addEventListener('click', () => {
    esconderMenu();
    esconderFundoOverlay();
});

botaoEsconderProjetos.classList.add("remover-esconder")

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotaoMaisProjetos();
});

botaoEsconderProjetos.addEventListener('click', () => {
    mostrarMenosProjetos();
    esconderBotaoMenosProjetos();
})

function esconderBotaoMaisProjetos() {
    botaoMostrarProjetos.classList.add("remover");
    botaoEsconderProjetos.classList.remove("remover-esconder")
}

function esconderBotaoMenosProjetos() {
    botaoEsconderProjetos.classList.add("remover-esconder")
    botaoMostrarProjetos.classList.remove("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });

    var elementosAOS = projetos.querySelectorAll('[data-aos]');
    elementosAOS.forEach(function (el) {
        el.classList.remove('aos-animate');
    });
    AOS.refresh();
}

function mostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
    document.getElementById('projetos').scrollIntoView()
}

function verificarSecaoVisivel() {
    const secaoHome = document.getElementById('home');
    const secaoSobre = document.getElementById('sobre');
    const botaoHome = document.querySelector('.botao-home');

    const posicaoSecaoHome = secaoHome.getBoundingClientRect();
    const posicaoSecaoSobre = secaoSobre.getBoundingClientRect();

    if (posicaoSecaoHome.top < window.innerHeight && posicaoSecaoHome.bottom > 0) {
        botaoHome.style.display = 'none';
    } else if (posicaoSecaoSobre.top < window.innerHeight && posicaoSecaoSobre.bottom > 0) {
        botaoHome.style.display = 'block';
    }
};

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        offset: 200,
        duration: 1200,
    });
});

if (window.innerWidth < 700) {
    AOS.init({
        disable: true
    });
} else {
    AOS.init();
}

window.addEventListener('scroll', verificarSecaoVisivel);