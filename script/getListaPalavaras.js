export default async function getListaPalavras() {

    const fetchListaDePalavras = fetch("./assets/json/palavras.json")
                            .then(resposta => resposta.json());

    return fetchListaDePalavras;
};