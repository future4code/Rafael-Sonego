/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

window.alert("Boas vindas ao jogo de Blackjack!")

if (confirm("Gostaria de iniciar um novo jogo?")) {

   const comprarCarta = () => {

      // Cria array de cartas
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

      // Cria array de naipes
      const naipes = ["♦️", "♥️", "♣️", "♠️"]

      // Sorteia uma carta
      const numero = cartas[Math.floor(Math.random() * 13)]

      // Sorteia um naipe
      const naipe = naipes[Math.floor(Math.random() * 4)]

      let valor

      // Verifica se é uma das letras e coloca o valor correspondente na variável valor
      if (numero === "A") {
         valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
         valor = 10
      } else { // Se nao for uma das letras, só converte a string para número
         valor = Number(numero)
      }

      // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
      const carta = {
         texto: numero + naipe,
         valor: valor
      }
      return carta
   }

   const userCards = [comprarCarta(), comprarCarta()]
   if (userCards[0].valor && userCards[1].valor === 11) {
      userCards = [comprarCarta(), comprarCarta()]
   }

   const userScore = userCards[0].valor + userCards[1].valor
   let computerCards = [comprarCarta(), comprarCarta()]
   if (computerCards[0].valor && computerCards[1].valor === 11) {
      computerCards = [comprarCarta(), comprarCarta()]
   }

   const computerScore = computerCards[0].valor + computerCards[1].valor
   console.log(`Usuário - cartas: ${userCards[0].texto} ${userCards[1].texto} - ${userScore}`)
   console.log(`Computador - cartas: ${computerCards[0].texto} ${computerCards[1].texto} - ${computerScore}`)

   if (userScore === computerScore) {
      console.log("Temos um empate!")
   } else if (userScore > computerScore) {
      console.log("Humanidade triunfa sobre as máquinas!")
   } else if (userScore < computerScore) {
      console.log("É somente questão de tempo para que sua derrota, torne-se um padrão para toda a humanidade na luta contra as máquinas!")
   } else {
      console.log(`Ok, compreendo. Fica para a próxima então!`)
   }
} else {
   window.close()
}