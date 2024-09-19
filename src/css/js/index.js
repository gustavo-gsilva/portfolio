const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostarMaisprojetos();

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostarMaisprojetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

