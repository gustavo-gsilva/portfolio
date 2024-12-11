ScrollReveal().reveal('.reveal-top', {
    origin: 'top',
    duration: 1200,
    distance: '70px',
    easing: 'ease',
    reset: true,
});

ScrollReveal().reveal('.reveal-bottom', {
    origin: 'bottom',
    duration: 1200,
    distance: '70px',
    easing: 'ease',
    reset: true,
});

ScrollReveal().reveal('.reveal-left', {
    origin: 'left',
    duration: 1200,
    distance: '70px',
    easing: 'ease',
    reset: true,
});

ScrollReveal().reveal('.reveal-right', {
    origin: 'right',
    duration: 1200,
    distance: '70px',
    easing: 'ease',
    reset: true,
});

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoEsconderProjetos.classList.add("remover-esconder")

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();

    esconderBotaoMaisProjetos();

    ScrollReveal().reveal('.projetos-ocultos-1', {
        origin: 'left',
        duration: 1200,
        distance: '70px',
        easing: 'ease',
    });

    ScrollReveal().reveal('.projetos-ocultos-2', {
        origin: 'right',
        duration: 1200,
        distance: '70px',
        easing: 'ease'
    });

    ScrollReveal().reveal('.projetos-ocultos-3', {
        origin: 'right',
        duration: 1200,
        distance: '70px',
        easing: 'ease'
    });

    ScrollReveal().reveal('.projetos-ocultos-4', {
        origin: 'left',
        duration: 1200,
        distance: '70px',
        easing: 'ease'
    });
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

window.addEventListener('scroll', verificarSecaoVisivel);