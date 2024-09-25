const respostasUtilizadas = [];
const respostas = [
    "Estou aqui para responder suas perguntas!",
    "Entendo. Pode me dar mais detalhes?",
    "Interessante! O que mais posso fazer por você?",
    "Vou verificar essa informação para você.",
    "Isso faz sentido! O que mais você gostaria de saber?",
    "Muito obrigado por compartilhar! Alguma outra dúvida?",
    "Por favor, aguarde enquanto eu busco a resposta.",
    "Fico feliz em ajudar! Alguma outra questão?",
    "Você gostaria de mais assistência com algo?"
];


let primeiraMensagem = true; 

document.getElementById("botao-enviar").addEventListener("click", enviarMensagem);
document.getElementById("entrada-mensagem").addEventListener("keypress", function(evento) {
    if (evento.key === "Enter") {
        enviarMensagem();
    }
});

function enviarMensagem() {
    const entradaMensagem = document.getElementById("entrada-mensagem");
    const textoMensagem = entradaMensagem.value.trim();

    if (textoMensagem === "") {
        return;
    }

    adicionarMensagem(textoMensagem, 'usuario');
    entradaMensagem.value = "";

    setTimeout(() => {
        const respostaBot = gerarRespostaBot();
        adicionarMensagem(respostaBot, 'bot');
    }, 500);
}

function adicionarMensagem(texto, remetente) {
    const caixaDeMensagens = document.getElementById("caixa-de-mensagens");

    const divMensagem = document.createElement("div");
    divMensagem.classList.add("mensagem", remetente);
    divMensagem.textContent = texto;

    caixaDeMensagens.appendChild(divMensagem);
    caixaDeMensagens.scrollTop = caixaDeMensagens.scrollHeight; 
}

function gerarRespostaBot() {
    
    if (primeiraMensagem) {
        primeiraMensagem = false; 
        return "Olá! Como posso ajudar você hoje?"; 
    }

    
    if (respostasUtilizadas.length === respostas.length) {
        respostasUtilizadas.length = 0; 
    }

    
    const respostasDisponiveis = respostas.filter(resposta => !respostasUtilizadas.includes(resposta));

    
    const respostaSelecionada = respostasDisponiveis[Math.floor(Math.random() * respostasDisponiveis.length)];

    
    respostasUtilizadas.push(respostaSelecionada);

    return respostaSelecionada;
}
