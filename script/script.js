import apagaLetra from "./apagaLetra.js";
import digitaLetra from "./digitaLetra.js";
import getListaPalavras from "./getListaPalavaras.js";
import mensagemPadrao from "./mensagemPadrao.js";
import sorteiaPalavra from "./sorteiaPalavra.js";
import verificaPalavra from "./verificaPalavra.js";

const listaDePalavras = await getListaPalavras();

const palavraSorteada = sorteiaPalavra(listaDePalavras);

let fimDeJogo = false;

let posicaoAtual = {

    tentativa: 1,
    posicaoLetra: 1
    /* posicao da letra corre +=1 enquanto preenche
       posicaoLetra = 6 significa palavra cheia, só permitir ERASE ou ENTER
       ENTER com posicaoLetra = 6 => verifica palavra, posicaoLetra = 1 tentariva += 1 */
};

const tecladoDigitalLetras = document.querySelectorAll("#teclaLetra");

tecladoDigitalLetras.forEach (tecla => { /* digitando no teclado virtual */
    
    if (!fimDeJogo){

        tecla.addEventListener("click", () => {
    
            if (digitaLetra(tecla.value, posicaoAtual)) posicaoAtual.posicaoLetra += 1;
        });
    };
});

const teclaDigitalEnter = document.getElementById("teclaEnter");

teclaDigitalEnter.addEventListener("click", () => { /*verificando pelo ENTER virtual */

    if(!fimDeJogo){

        let retornoVerifica = verificaPalavra(posicaoAtual, palavraSorteada, listaDePalavras);
            
        if (retornoVerifica === true) {
                
            posicaoAtual.tentativa += 1;
            posicaoAtual.posicaoLetra = 1;
    
            if(posicaoAtual.tentativa > 6) { /* acabaram as tentativas */
    
                mensagemPadrao(6, palavraSorteada);
                document.getElementById("linkRefresh").style.display = "block";
                fimDeJogo = true;
            }; 
        }
        else if(retornoVerifica === "venceu"){
                
            document.getElementById("linkRefresh").style.display = "block";
            fimDeJogo = true;
        };
    }
});

const teclaDigitalBackspace = document.getElementById("teclaBackspace");

teclaDigitalBackspace.addEventListener("click", () => { /* corrigindo pelo BACKSPACE virtual */

    if (!fimDeJogo) {

        if (apagaLetra(posicaoAtual)) posicaoAtual.posicaoLetra -= 1;
    };
})

window.addEventListener("keydown", (e) => { /* "Ouvindo" as teclas do teclado */

    if (!fimDeJogo){

        if (e.key.match(/[a-z]/i) && e.key.length === 1) {
    
            if (digitaLetra(e.key.toUpperCase(), posicaoAtual)) posicaoAtual.posicaoLetra += 1;
    
        };
        
        if (e.key === "Backspace") {
        
            if (apagaLetra(posicaoAtual)) posicaoAtual.posicaoLetra -= 1;
        };
        
        if (e.key === "Enter") {
            
            let retornoVerifica = verificaPalavra(posicaoAtual, palavraSorteada, listaDePalavras);
            
            if (retornoVerifica === true) {
                
                posicaoAtual.tentativa += 1;
                posicaoAtual.posicaoLetra = 1;
    
                if(posicaoAtual.tentativa > 6) { /* acabaram as tentativas */
    
                    mensagemPadrao(6, palavraSorteada);
                    document.getElementById("linkRefresh").style.display = "block";
                    fimDeJogo = true;
                };
            }
            else if(retornoVerifica === "venceu"){
    
                document.getElementById("linkRefresh").style.display = "block";
                fimDeJogo = true;
            };
        };
    };
});