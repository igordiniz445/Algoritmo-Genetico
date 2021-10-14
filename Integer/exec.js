function funcaoObjetivo (x) {
  return (x * x) - (3 * x) + 4
}

function rodaUm () {
  alg.geraNovaPopulacao()
  document.getElementById(lblResult).value = alg.populacao.maisApto()
  console.log(alg.populacao.populacao)
  console.log(alg.populacao.maisApto())
}

function mudaMaisApto () {
  let i = 0
  let oldBest = alg.populacao.maisApto().aptidao
  let newBest
  do {
    i++
    alg.geraNovaPopulacao()
    newBest = alg.populacao.maisApto().aptidao
    console.log(`Rodando pela ${i}-ésima vez, aptidao atual ${newBest}`)
  } while (oldBest >= newBest && i < 100)
  console.log(`Foram necessárias ${i} iterações para a mais apto sair de ${oldBest} a ${newBest}`)
}

function saveInput(){
  var idIndividuos = document.getElementById("idIndividuos")
  var idNumGeracoes = document.getElementById("idNumGeracoes")
  var idTaxaCrossOver = document.getElementById("idTaxaCrossOver")
  var idTaxaMutacao = document.getElementById("idTaxaMutacao")
  var idLimiteInferior = document.getElementById("idLimiteInferior")
  var idLimiteSuperior = document.getElementById("idLimiteSuperior")

  const alg2 = new Genetico(idIndividuos, idNumGeracoes, idTaxaCrossOver, idTaxaMutacao, funcaoObjetivo, idLimiteInferior, idLimiteSuperior)

}
var idIndividuos = document.getElementById("idIndividuos")
var idNumGeracoes = document.getElementById("idNumGeracoes")
var idTaxaCrossOver = document.getElementById("idTaxaCrossOver")
var idTaxaMutacao = document.getElementById("idTaxaMutacao")
var idLimiteInferior = document.getElementById("idLimiteInferior")
var idLimiteSuperior = document.getElementById("idLimiteSuperior")

const alg = new Genetico(20, 30, 0.7, 0.01, funcaoObjetivo, -10, 10)
const alg2 = new Genetico(idIndividuos, idNumGeracoes, idTaxaCrossOver, idTaxaMutacao, funcaoObjetivo, idLimiteInferior, idLimiteSuperior)
console.log(alg.populacao.populacao)
console.log(alg.populacao.maisApto())