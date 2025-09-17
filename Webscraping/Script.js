// Feito no site www.cineroxy.com.br/emcartaz

// Primeiro armazenei todos os titulos que estao na classe titulo 
// em uma variável

let titulos = document.querySelectorAll(".titulo")

// Depois passei essa variavel em um for para pegar todos os filmes que estão nessa classe

for(let i = 0; titulos.length;i++){
    console.log(titulos[i].innerHTML)
}

// Peguei também a classe duracao e armazenei numa variável

let duracaos = document.querySelectorAll(".duracao")

// Passei a variável duracaos em um for para pegar todos os horarios dos filmes

for (let i = 0; i < duracaos.length; i++){
    console.log(duracaos[i].innerText)
}

// E por fim para mostrar tanto a duração como os filmes, concatenei uma variavel na outra 
// para mostrar ambos os filmes e durações

for (let i = 0; i < titulos.length; i++){
    console.log(titulos[i].innerText + " - " + duracaos[i].innerText)
}