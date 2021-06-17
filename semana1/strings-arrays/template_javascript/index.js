/*//Exercícios de interpretação de código

//1-)
let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //11
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i]) // 3

array[i+1] = 19
console.log('e. ', array) // 1:19

const valor = array[i+6] //9
console.log('f. ', valor)

//2-)
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //SUBI NUM ÔNIBUS EM MIRROCOS, 27

//-------------------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

//1-)
const nome = prompt('Qual seu nome?')
const email = prompt('Qual seu email?')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}! `)

//2-)
const meuArray = ['risotto', 'sushi', 'churrasco', 'pao de queijo', 'hamburguer']
console.log(meuArray)

console.log(`Essas são as minhas comidas preferidas: 
${meuArray[0]}
${meuArray[1]}
${meuArray[2]}
${meuArray[3]}
${meuArray[4]}`)

const preferida = prompt('Qual sua comida preferida?')
meuArray[1] = preferida

console.log('Lista Atualizada', meuArray)

//3-)
const listaDeTarefas = []

const tarefa1 = prompt('Qual tarefa temos para hoje de manhã?')
const tarefa2 = prompt('Qual tarefa temos para hoje a tarde?')
const tarefa3 = prompt('Qual tarefa temos para hoje a noite?')
listaDeTarefas.push(tarefa1,tarefa2,tarefa3)
console.log(listaDeTarefas)

const indice = prompt('Digite o índice da tarefa que você realizou: 0, 1, 2 :')
listaDeTarefas.splice([indice],1)
console.log(listaDeTarefas)*/

//---------------------------------------------------DESAFIO---------------------------------------------------------
//1-)
const frase = prompt('Digite uma frase curta:')
const semEspaco = frase.trim().split(' ')
console.log(semEspaco)

//2-)
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indice = frutas.indexOf('Abacaxi', 0)
console.log(indice,frutas.length)
