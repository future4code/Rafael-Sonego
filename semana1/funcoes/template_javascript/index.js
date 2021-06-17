//Exercícios de interpretação de código

//1-)
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) //10
console.log(minhaFuncao(10)) //50

//b-)Nada vai aparecer, pois foi retirado o console.log, porém a função será invocada

//2-)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//Resposta:No prompt, vai pegar o texto inserido e colocar tudo em minúsculo.Depois o includes vai procurar a palavra cenoura, se encontrar vai aparecer true, caso contrário false.