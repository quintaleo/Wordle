import mensagemPadrao from "./mensagemPadrao.js";

export default function verificaPalavra (posicaoAtual, palavraSorteada, listaDePalavras) {

    if (posicaoAtual.posicaoLetra < 6) { /* Ainda faltam letras a serem digitadas? */
        
        mensagemPadrao(3);
        return false;
    };

    const linha = document.getElementById(`respostaLinha${posicaoAtual.tentativa}`);
    
    const listaLetras = linha.querySelectorAll(".resposta-letra");

    const tentativaArray = [];

    for (let i = 0; i < 5; i++) { /* preenchendo array da palavra */
        
        tentativaArray.push(listaLetras[i].innerHTML);  
    };

    const tentativaString = tentativaArray.join(""); /* criando string da palavra */

    if (tentativaString === palavraSorteada) { /* palavra correta */
    
        for (let i = 0; i < 5; i++) {
            
            let respostaLetra = linha.children[i];
            respostaLetra.style.backgroundColor = "var(--botao-bg-verde)";
        }
        mensagemPadrao(4);
        return "venceu";
    }
    else if (listaDePalavras.includes(tentativaString)){ /* palavra existe mas não é a correta */

        for (let i = 0; i < 5; i++) { /* buscando se existem letras correspondentes a resposta */
            
            let encontrouLetra = false;
            let respostaLetra = linha.children[i];
            const botaoLetra = document.querySelector(`button[value="${tentativaString[i]}"]`);

            for (let j = 0; j < 5; j++) {
        
                if (tentativaString[i] === palavraSorteada[j]) { /* existe a letra na resposta */

                    encontrouLetra = true;
                    
                    botaoLetra.style.backgroundColor = ("var(--botao-bg-verde)");
                    
                    if (i === j){ /* letra da resposta está na posição correta */

                        respostaLetra.style.backgroundColor = "var(--botao-bg-verde)";
                    }
                    else { /* letra da resposta não está na posição correta */

                        if (respostaLetra.style.backgroundColor !== "var(--botao-bg-verde)")
                            respostaLetra.style.backgroundColor = "var(--botao-bg-amarelo)";
                    };
                };
            };

            if (!encontrouLetra) { /* letra da resposta nao pertence a palavra */

                respostaLetra.style.backgroundColor = ("var(--botao-bg-cinza)");
                botaoLetra.style.backgroundColor = ("var(--botao-bg-cinza)");
            };
        };
        return true;
    };
    mensagemPadrao(5);
};