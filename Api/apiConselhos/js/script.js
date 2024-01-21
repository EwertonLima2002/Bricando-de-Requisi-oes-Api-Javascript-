async function obterDadosApi(){
    const chaveApi = "https://api.adviceslip.com/advice"

    try {
        const resposta = await fetch(chaveApi);
        const dados = await resposta.json();

        if (resposta.status !== 200) {
            throw new Error('Não foi possível obter os dados');
        }

        gerarResultado(dados);
        return dados;
    } catch (erro) {
        console.error(erro.message);
    }
}

function gerarResultado(dados){
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>${dados.slip.advice}</p>`;
}
