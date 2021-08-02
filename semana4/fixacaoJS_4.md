```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  const numero = arrayDeNumeros.filter((valor) => {
    if (valor === numeroEscolhido) {
      return valor
    }
  })

  if (numero.length > 0) {
    return `O número ${numeroEscolhido} aparece ${numero.length}x`
  }
  else {
    return "Número não encontrado"
  }
}

```