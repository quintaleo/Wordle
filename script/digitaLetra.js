import mensagemPadrao from "./mensagemPadrao.js";

export default function digitaLetra (letra, posicaoAtual) {

    if (posicaoAtual.posicaoLetra > 5) {
     
        mensagemPadrao(2);
        return false;
    };
        
    const linha = document.getElementById(`respostaLinha${posicaoAtual.tentativa}`);
    
    const respostaLetra = linha.children[posicaoAtual.posicaoLetra - 1];

    respostaLetra.innerHTML = letra;
    return true;

};