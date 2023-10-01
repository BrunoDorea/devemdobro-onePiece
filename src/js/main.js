const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        desselecionarBotao()
        desselecionarPersonagem()

        botao.classList.add('selecionado')
        personagens[index].classList.add('selecionado')
    })
})

function desselecionarBotao() {
    const botaoSelecionando = document.querySelector('.botao.selecionado')
    botaoSelecionando.classList.remove('selecionado')
}

function desselecionarPersonagem() {
    const personagemSelecionando = document.querySelector('.personagem.selecionado')
    personagemSelecionando.classList.remove('selecionado')
}
