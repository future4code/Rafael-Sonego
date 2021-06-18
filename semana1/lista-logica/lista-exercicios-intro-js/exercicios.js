// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a altura de um retângulo:'))
  const largura = Number(prompt('Digite a largura de um retângulo:'))
  console.log(altura*largura) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const ano = Number(prompt('Digite o ano atual:'))
  const anoNasc = Number(prompt('Digite o ano em que você nasceu:'))
  console.log(ano-anoNasc) 

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome:')
  const idade = Number(prompt('Digite sua idade:'))
  const email = prompt('Digite seu email:')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Digite sua primeira cor favorita:')
  const cor2 = prompt('Digite sua segunda cor favorita:')
  const cor3 = prompt('Digite sua terceira cor favorita:')
  console.log([cor1,cor2,cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiuscula = string.toUpperCase()
  return maiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array.shift()
  const ultimo = array.pop()
  array.unshift(ultimo)
  array.push(primeiro) 
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui 
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite ano atual:'))
  const anoNascimento = Number(prompt('Digite o ano em que você nasceu:'))
  const rg = Number(prompt('Digite a data de emissão do seu RG:'))
  const idadePessoa = anoAtual-anoNascimento
  const resultado = anoAtual-rg
  const menosVinte = idadePessoa <= 20 && resultado >= 5
  const velho = idadePessoa > 20 &&  idadePessoa <= 50 && resultado >= 10
  const idoso = idadePessoa > 50 && resultado >= 15
  console.log(menosVinte || velho || idoso)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maior = prompt('Você tem mais de 18 anos?')
  const ensino = prompt('Você possui ensino médio completo?')
  const horario = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  console.log(maior.includes('sim') && ensino.includes('sim') && horario.includes('sim'))
}