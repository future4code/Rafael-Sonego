//Exercícios de interpretação de código

//1-)
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 //----> true

//true //false
// let resultado = bool1 && bool2
// console.log("a. ", resultado)//false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)//false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)//true

// console.log("d. ", typeof resultado) //boolean

//2-)
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
//R: A variável soma está recebendo as variáveis primeiroNumero e segundoNumero como String e concatenando ao invés de soma-las, pois para o promprt, tudo é String.

//3-)Para corrigir o problema, é preciso usar a função Number.

//-------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

//1-)
// const idade = Number(prompt("Qual sua idade?"))
// const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"))

// console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo, idade - idadeMelhorAmigo)

//2-)
// const par = Number(prompt("Digite um número PAR:"))
// console.log(par % 2)
//O padrão é que o "0" é número par e "1" é impar
//Se for digitado um número impar, o mod será "1"

//3-)
// const idadeAno = Number(prompt("Qual sua idade?"))

// console.log('Sua idade em meses é: ', idadeAno * 12)
// console.log('Sua idade em dias é: ', idadeAno * 365)
// console.log('Sua idade em horas é: ', idadeAno * 8760)

//4-)
// const primeiro = Number(prompt("Digite um número:"))
// const segundo = Number(prompt("Digite outro número:"))
// const divisaoPrimeiro = primeiro % segundo
// const divisaoSegundo = segundo % primeiro 

// console.log('O primeiro numero é maior que segundo?', primeiro > segundo)
// console.log('O primeiro numero é igual ao segundo? ', primeiro === segundo)
// console.log('O primeiro numero é divisível pelo segundo? ', divisaoPrimeiro == 0)
// console.log('O segundo numero é divisível pelo primeiro?', divisaoSegundo ==0)

//----------------------------------------------DESAFIO--------------------------------------------------