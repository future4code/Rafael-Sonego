//Exercícios de interpretação de código

//1-)
//O código está fazendo um laço for com o limite menor que 5 (0 até 4), ou seja, quando chegar em cinco o for é parado.
//Dentro do escopo do for, a variável 'valor' que iniciou em 0, será incrementada e o numero 10 exibida no console.

//2-)
//a-)Será exibido todos os números maiores que 18 do array.
//b-)Sim. lista.indexOf(numero)

//3-)
//*
//**
//***
//****

//--------------------------------------------------------------------

//Exercícios de escrita de código

//1-)
// const bicho = Number(prompt('Quantos bichinhos de estimação você tem?'))

// if (bicho === 0) {
//     console.log('Que pena! Você pode adotar um pet!')
// } else if (bicho > 0){

//     const array = []

//     for(let i = 0; i < bicho; i++){
//         const pets = prompt(`Digite o nome do ${i+1} PETS:`)
//         array.push(pets)
//     }

//     console.log(array)
// }

//2-)
//a-)
const arrayOriginal = [10, 20, 30, 40, 50, 60, 35, 66]
// const imprime = (array) => {
//     console.log(arrayOriginal)
// }
// imprime(arrayOriginal)

//b-)
// const divide = (array) => {

//     for(let i=0; i < array.length ; i++){
//         const resultado = array[i] /10
//         console.log(resultado)
//     }
// }
// divide(arrayOriginal)

//c-)
// const par = (array) => {

//     const novoArray = []

//     for (i = 0; i < array.length; i++) {      

//         if (array[i] % 2 === 0) {

//             novoArray.push(array[i])
//         }
//     }
//     console.log(novoArray)
// }
// par(arrayOriginal)

//d-)
// const teste = (array) => {
//     const arrayStrings = [] 

//     const tamanhoArray = array.length

//     let i = 0;
//     while (i < tamanhoArray) {
//         console.log("Valor", i, "tem", array[i])
//         i = i + 1
//     }
// }

// teste(arrayOriginal)

//e-)
const maior = (array) => {

    var min = Math.min(...array);
    var max = Math.max(...array);

    console.log(min)
    console.log(max)
}
maior(arrayOriginal)