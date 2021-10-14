class Genetico {
  constructor (nIndividuos, nGeracoes, txCrossover, txMutacao, funcaoObjetivo, limiteInferior, limiteSuperior) {
    this.size = nIndividuos
    this.geracoes = nGeracoes
    this.crossover = txCrossover
    this.mutacao = txMutacao
    this.funcao = funcaoObjetivo
    this.limiteInferior = limiteInferior
    this.limiteSuperior = limiteSuperior
    const populacao = []
    // Gera primeira populacao aleatoriamente
    while (populacao.length < nIndividuos) {
      populacao.push(Math.floor(Math.random() * (limiteSuperior - limiteInferior) + limiteInferior))
    }
    this.populacao = new Populacao(nIndividuos, 0, funcaoObjetivo, txCrossover, txMutacao, populacao, limiteInferior, limiteSuperior)
    this.listaPopulacoes = [Object.assign({}, this.populacao)]
  }

  geraNovaPopulacao () {
    this.populacao = new Populacao(this.size, this.populacao + 1, this.funcao, this.crossover, this.mutacao, this.populacao.selecao(), this.limiteInferior, this.limiteSuperior)
  }

  executa () {
    let n = 0
    while (n < this.geracoes) {
      this.geraNovaPopulacao()
      n++
    }
  }
}