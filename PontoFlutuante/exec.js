const arr_size = 8
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
  } while (oldBest >= newBest && i < 100)
  console.log(`Foram necessárias ${i} iterações para a mais apto sair de ${oldBest} a ${newBest}`)
}

function saveInput(){
  var idIndividuos = document.getElementById("idIndividuos").value
  var idNumGeracoes = document.getElementById("idNumGeracoes").value
  var idTaxaCrossOver = document.getElementById("idTaxaCrossOver").value
  var idTaxaMutacao = document.getElementById("idTaxaMutacao").value
  var idLimiteInferior = document.getElementById("idLimiteInferior").value
  var idLimiteSuperior = document.getElementById("idLimiteSuperior").value

  alg = new Genetico(idIndividuos, idNumGeracoes, idTaxaCrossOver, idTaxaMutacao, funcaoObjetivo, idLimiteInferior, idLimiteSuperior)

}

// const alg = new Genetico(11, 250, 0.7, 0.01, funcaoObjetivo, -10, 10)
// console.log(alg.populacao.populacao)
// console.log(alg.populacao.maisApto())
