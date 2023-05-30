import mensagemPadrao from "./mensagemPadrao.js";

export default function apagaLetra (posicaoAtual) {

    let posicaoLetra = posicaoAtual.posicaoLetra - 1;
    
    if (posicaoLetra === 0) {

        return false;
    };

    const linha = document.getElementById(`respostaLinha${posicaoAtual.tentativa}`);
    
    const respostaLetra = linha.children[posicaoLetra - 1];

    respostaLetra.innerHTML = "";

    mensagemPadrao(1);
    return true;
  
};
    