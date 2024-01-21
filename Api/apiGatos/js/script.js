async function obterDadosApi(){
    try{
        const resposta = await fetch('https://api.thecatapi.com/v1/images/search');
        const dados = await resposta.json();

        if (resposta.status !== 200) {
            throw new Error('Não foi possível obter os dados');
        }

        gerarResultado(dados);
        console.log(dados);
        return dados;
    }
    catch(erro){
        console.error(erro.message);
    }
}
function gerarResultado(dados){
    const resultado = document.getElementById('resultado');

    // gerar baloes quando aparecer o gato
    const baloes = document.createElement('div');
    baloes.classList.add('baloes');
    resultado.appendChild(baloes);
    for (let i = 0; i < 10; i++) {
        const balao = document.createElement('div');
        balao.classList.add('balao');
        baloes.appendChild(balao);
    }




    resultado.innerHTML = `<img src="${dados[0].url}" height="400px" width="450px" >`;
}