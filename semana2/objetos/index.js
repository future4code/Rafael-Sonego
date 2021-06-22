// Exercícios de interpretação de código

//1-)
//a) "Matheus Nachtergaele", "Virginia Cavendish" ,{canal: "Globo", horario: "14h"}

//2-)
//a-)
// console.log(cachorro) -> nome: "Juca", idade: 3, raca: "SRD" 
// console.log(gato) -> nome: "Juba", idade: 3, raca:"SRD"
// console.log(tartaruga) -> nome: "Jubo", idade: 3, raca: "SRD"

//b-)será feito um SPREAD no objeto, ou seja uma cópia total do objeto com alteração na propriedade que desejada, no caso do exercício, nome.

//3-)
//a-)
//console.log(minhaFuncao(pessoa, "backender")) -> false
//console.log(minhaFuncao(pessoa, "altura")) -> undefined

//b-)No cado de "backender", o valor foi impresso como false, pois é o valor setado no objeto.
//Para a propriedade altura, ela não existe no objeto pessoa, por isso apareceu undefined

//--------------------------------------------------------------------------

//Exercícios de escrita de código

//1-)
// const pessoa = {
//     nome: "Jorge", 
//     apelidos: ["Dente", "Dedão", "Maneta"]
//  }

//  const apelido = (objeto) => {

//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
//  }
// apelido(pessoa)

//b-)
// const pessoa2 = {...pessoa, apelidos: ["Feliz", "Gigante", "Magrela"]}
// apelido(pessoa2)

//2-)
//a-)
// const pessoa = {
//     nome: 'José',
//     idade: 44,
//     profissao: 'Develop - Front-End'
// }

// const pessoa2 = {
//     nome: 'Mário',
//     idade: 26,
//     profissao: 'Develop - Front-Back'
// }

// const humano = (objeto1, objeto2) => {

//     const arrayObjeto1 = [
//         objeto1.nome,
//         objeto1.nome.length,
//         objeto1.idade,
//         objeto1.profissao,
//         objeto1.profissao.length,
//         objeto2.nome,
//         objeto2.nome.length,
//         objeto2.idade,
//         objeto2.profissao,
//         objeto2.profissao.length
//     ]

//     console.log(arrayObjeto1)
// }

// humano(pessoa, pessoa2)

//3-)
const carrinho = []

const frutas = {
    nome: 'banana',
    disponibilidade: true
}

const frutas1 = {
    nome: 'mamao',
    disponibilidade: false
}

const frutas2 = {
    nome: 'manga',
    disponibilidade: true
}

const adicionaCarrinho = (fruta) =>{
    carrinho.push(fruta)
}
adicionaCarrinho(frutas)
adicionaCarrinho(frutas1)
adicionaCarrinho(frutas2)

console.log(carrinho)

//-----------------------------------------DESAFIO------------------------------------------------

//1-)
// const pessoa = () => {
//     const nome = prompt('Qual seu nome:')
//     const idade = Number(prompt('Qual sua idade:'))
//     const profissao = prompt('Qual seu profissao:')


//     const user = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }

//     console.log(user)

// }

// pessoa()

//2-)
// const cinema = () => {

//     const filme1 = {
//         nome: 'Titanic',
//         lancamento: 1998
//     }

//     const filme2 = {
//         nome: 'Laranja Mecânica',
//         lancamento: 1971
//     }

//     const resultado = filme1.lancamento < filme2.lancamento
//     const resultado2 = filme1.lancamento === filme2.lancamento

//     console.log('O primeiro filme foi lançado antes do segundo?', resultado)
//     console.log('O primeiro filme foi lançado no mesmo ano do segundo?', resultado2)
// }

// cinema()

//3-)
const controle = (fruit) => {

    const novafrutas2 = {...frutas2, disponibilidade: false}
    console.log(novafrutas2)
}

controle(frutas2)