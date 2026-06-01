let cliquesCurtir = 0;
let cliquesNaoCurtir = 0;

function computarVoto(tipo) {
    if (tipo === 'curtir') {
        cliquesCurtir++;
        document.getElementById('qtd-curtir').innerText = cliquesCurtir;
    } else if (tipo === 'naoCurtir') {
        cliquesNaoCurtir++;
        document.getElementById('qtd-nao-curtir').innerText = cliquesNaoCurtir;
    }
}
