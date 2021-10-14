class Populacao {
  constructor (size, geracao, fn, crossover, mutacao, populacao, limiteInferior, limiteSuperior) {
    this.size = size
    this.funcaoObjetivo = fn
    this.populacao = populacao.map(el => new Individuo(el, this.aptidao(el)))
    this.geracao = geracao
    this.chanceCrossover = crossover
    this.chanceMutacao = mutacao,
    this.limiteInferior = limiteInferior
    this.limiteSuperior = limiteSuperior
  }

  maisApto () {
    return this.populacao.map(el => el).sort(this.testeAptidao)[0]
  }

  aptidao (valor) {
    return this.funcaoObjetivo(valor)
  }

  bArrToVal (bArr) {
    let num = 0
    for (let i = 1; i <= 4; i++) {
      if (bArr[i] == 1) num += Math.pow(2, 4 - i)
    }
    let temp = 0
    for (let i = 5; i <= arr_size - 1; i++) {
      if (bArr[i] == 1) temp += Math.pow(2, i - 4)
    }
    num += parseFloat(`0.${temp}`)
    if (bArr[0] == 1) num *= -1
    return num
  }

  testeAptidao (el1, el2) {
    if (el1.aptidao > el2.aptidao) return -1
    else if (el1.aptidao === el2.aptidao) return 0
    return 1
  }

  /*
    * Randomiza dois elementos e seleciona o melhor
    * Retorna o mais apto entre os dois
  */
  torneio () {
    // Seleciona 2 indices aleatorios e diferentes
    let el1 = Math.floor(Math.random() * this.size)
    let el2
    do {
      el2 = Math.floor(Math.random() * this.size)
    } while (el2 === el1)
    // Determina o mais apto
    const aux = this.testeAptidao(this.populacao[el1], this.populacao[el2])
    if (aux === 1) {
      return this.populacao[el2]
    } else {
      return this.populacao[el1]
    }
  }

  /*
    * Aplica a selecao na populacao
    * Mantem os n / 10 elementos mais aptos
    * Aplica crossover de 2 em 2 elementos
    * Aplica mutacao
    * Retorna um array com os valores da nova populacao
  */
  selecao () {
    // Mantem os n / 10 mais aptos na proxima geracao
    // Minimo 1
    const qtd = Math.ceil(this.size / 10)
    const temp_arr = Array.from(this.populacao)
    temp_arr.sort(this.testeAptidao)
    let newPop = temp_arr.slice(0, qtd).map(el => el.valor)
    while (newPop.length < this.size - 1) {
      const e1 = this.torneio()
      const e2 = this.torneio()
      const crossoverPop = this.crossover(e1.cromossomo, e2.cromossomo)
      newPop.push(this.bArrToVal(this.mutacao(crossoverPop[0])))
      newPop.push(this.bArrToVal(this.mutacao(crossoverPop[1])))
    }
    if (newPop.length < this.size) {
      const e1 = this.torneio()
      const e2 = this.torneio()
      const crossoverPop = this.crossover(e1.cromossomo, e2.cromossomo)
      newPop.push(this.bArrToVal(this.mutacao(crossoverPop[0])))
    }
    newPop = newPop.map(el => {
      if (el < this.limiteInferior) return this.limiteInferior
      if (el > this.limiteSuperior) return this.limiteSuperior
      return el
    })
    return newPop
  }

  /*
    * Aplica crossover em 2 elementos pais
    * Pode aplicar ou nao dependendo da chance de crossover
    * Aplica crossover de 2 pontos
  */
  crossover (bArr1, bArr2) {
    const a1 = Array.from(bArr1)
    const a2 = Array.from(bArr2)
    if (Math.random() <= this.chanceCrossover) {
      // Seleciona 2 indices aleatorios e diferentes
      let el1 = Math.floor(Math.random() * a1.length)
      let el2
      do {
        el2 = Math.floor(Math.random() * a1.length)
      } while (el2 === el1)
      if (el2 < el1) {
        const temp = el2
        el2 = el1
        el1 = temp
      }
      const diff = el2 - el1
      const temp_arr = a1.slice(el1, el2)
      // Aplica o crossover
      a1.splice(el1, diff, ...a2.splice(el1, diff, ...temp_arr))
    }
    return [a1, a2]
  }

  /*
    * Aplica mutacao em um array de bits
    * Pode aplicar ou nao dependendo da chance de mutacao
    * Retorna o array mutado
  */
  mutacao (bArr) {
    return bArr.map(el => Math.random <= this.chanceMutacao ? el == 1 ? 0 : 1 : el)
  }
}