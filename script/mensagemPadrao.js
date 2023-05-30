export default function mensagemPadrao (tipo, palavraSorteada = null) {

    let mensagem = document.getElementById("tentativasMensagem");

    if (tipo === 1) { /* Palavra incompleta */

        mensagem.innerHTML = "Preencha todas as letras e tecle/clique ENTER para adivinhar a palavra";
        mensagem.style.backgroundColor = "var(--botao-bg-cinza)";
        mensagem.style.color = "var(--branco-fonte)";
        return;
    };

    if (tipo === 2){ /* Tentou digitar com a palavra completa */

        mensagem.innerHTML = "Você já inseriu 5 letras, tecle Enter para verificar a palavra ou ⌫(Backspace) para corrigir";
        mensagem.style.backgroundColor = "var(--mensagem-erro-bd-amarelo)";
        mensagem.style.color = "var(--preto-padrao)";
        return;
    }

    if (tipo === 3){ /* Ainda faltam letras a serem digitadas */

        mensagem.innerHTML = "Palavra incompleta - Digite uma palavra com 5 letras";
        mensagem.style.backgroundColor = "var(--mensagem-erro-bd-amarelo)";
        mensagem.style.color = "var(--preto-padrao)";
        return;
    };

    if (tipo === 4){ /* acetrou a palavra */

        mensagem.innerHTML = "Parabéns você acertou! Fim de Jogo";
        mensagem.style.backgroundColor = "var(--botao-bg-verde)";
        mensagem.style.color = "var(--branco-fonte)";
        return;
    };

    if (tipo === 5){ /* a palavra não consta no banco de palavras */

        mensagem.innerHTML = "Sua palavra não corresponde a uma palavra do nosso banco de palavras, tente outra";
        mensagem.style.backgroundColor = "var(--fundo-erro)";
        mensagem.style.color = "var(--mensagem-erro)";
        return;
    };

    if (tipo === 6) { /* Perdeu o jogo */

        mensagem.innerHTML = `Acabaram as suas tentativas, a palavra era ${palavraSorteada}, fim de jogo`;
        mensagem.style.backgroundColor = "var(--fundo-erro)";
        mensagem.style.color = "var(--mensagem-erro)";
        return;
    };

};
