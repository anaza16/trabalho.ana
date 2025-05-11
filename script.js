document.getElementById('meubotao').onclick = function() {
    var mensagem = document.createElement('p');
    mensagem.textContent = "Acredite que você pode, e já está na metade do caminho.";
    document.getElementById('mensagem').appendChild(mensagem);
};