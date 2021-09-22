function somar(valores) {
  var resultadoDaSomaDeValores = valores.reduce((valorAcumula, valorAtual) => valorAcumula + valorAtual);
  return resultadoDaSomaDeValores;
}

function subtrair(valores) {
  var resultadoDaSubtracaoDeValores = valores.reduce((valorAcumula, valorAtual) => valorAcumula - valorAtual);
  return resultadoDaSubtracaoDeValores;
}

function multiplicar(valores) {
  var resultadoDaMultiplicacaoDeValores = valores.reduce((valorAcumula, valorAtual) => valorAcumula * valorAtual);
  return resultadoDaMultiplicacaoDeValores;
}

function dividir(valores) {
  var resultadoDaDivisaoDeValores = valores.reduce((valorAcumula, valorAtual) => valorAcumula / valorAtual);
  return resultadoDaDivisaoDeValores;
}

module.exports = {multiplicar, dividir, subtrair, somar};
