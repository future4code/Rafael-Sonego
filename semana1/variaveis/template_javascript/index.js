/*Exercícios de interpretação de código

1-)

let a = 10
let b = 10

será escrito o número 10
console.log(b)

será escrito 10,5
b = 5
console.log(a, b)

2-)

let a = 10
let b = 20
let c
c = a
b = c
a = b

10, 10 ,10
console.log(a, b, c)

3-)

let p = prompt("Quantas horas você trabalha por dia?") //horasTrabDia
let t = prompt("Quanto você recebe por dia?") //salarioDia
alert(`Voce recebe ${t/p} por hora`)*/

//Exercícios de escrita de código

let nome
let idade

console.log('nome', typeof nome)
console.log('idade', typeof idade)

// d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// Resposta: A variável nome e idade foram impressa como undefined porque ambas não tem valores.

// e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

nome = prompt('Qual é o seu nome?')
idade = prompt('Qual é o sua idade?')

console.log('Qual é o seu nome?', nome)
console.log('Qual é o sua idade?', idade)

// f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log('nome',typeof nome)
console.log('idade',typeof idade)
// Resposta: A variável nome e idade foram impressa como string.Notei que a variável idade apesar de ser um número, foi impressa como string, pois o prompt converte tudo para string.

//g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu

console.log('Olá', nome , 'Você tem', idade ,'anos.')

//2-)

let altura = 'Você é alto?'
let viajar = 'Você gosta de viajar?'
let sapato = 'Você usa sapato?'

let respAltura = prompt(altura)
let respViajar = prompt(viajar)
let respSapato = prompt(sapato)

console.log(altura,respAltura)
console.log(viajar,respViajar)
console.log(sapato,respSapato)

//3-)

// Aqui faremos uma lógica para trocar os valores
let a = 10
let b = 25
let c
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO!!!!