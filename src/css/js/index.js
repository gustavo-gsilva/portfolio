const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

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
}

function mostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}