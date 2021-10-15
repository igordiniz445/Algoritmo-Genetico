const arr_size = 5
var alg
function funcaoObjetivo (x) {
  return (x * x) - (3 * x) + 4
}

function rodaUm () {
  alg.geraNovaPopulacao()
  document.getElementById("lblResult").textContent = alg.populacao.maisApto().aptidao
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
  } while (oldBest >= newBest && i < idNumGeracoes)
  console.log(`Foram necessárias ${i} iterações para a mais apto sair de ${oldBest} a ${newBest}`)
  document.getElementById("lblResult").textContent = alg.populacao.maisApto().aptidao
  console.log(alg.populacao.populacao)
  console.log(alg.populacao.maisApto())
}

function saveInput(){
  idIndividuos = document.getElementById("idIndividuos").value
  idNumGeracoes = document.getElementById("idNumGeracoes").value
  idTaxaCrossOver = document.getElementById("idTaxaCrossOver").value
  idTaxaMutacao = document.getElementById("idTaxaMutacao").value

  alg = new Genetico(idIndividuos, idNumGeracoes, idTaxaCrossOver, idTaxaMutacao, funcaoObjetivo, idLimiteInferior, idLimiteSuperior)

  document.getElementById("lblResult").textContent = alg.populacao.maisApto().aptidao
  console.log(alg.populacao.populacao)
  console.log(alg.populacao.maisApto())

}

var idLimiteInferior = -10
var idLimiteSuperior = 10

var idIndividuos
var idNumGeracoes
var idTaxaCrossOver
var idTaxaMutacao

saveInput()