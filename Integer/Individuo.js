const arr_size = 5

class Individuo {
  constructor (x, aptidao) {
    this.valor = x
    this.cromossomo = this.valToBinaryArr(x)
    this.aptidao = aptidao
  }

  valToBinaryArr(x) {
    const arr = new Array(arr_size)
    if (x >= 0) arr[0] = 0
    else arr[0] = 1
    let temp
    if (x >= 0) temp = x
    else temp = x * -1
    for (let i = 1; i <= 4; i++) {
      const factor = Math.pow(2, 4 - i)
      if (temp >= factor) {
        arr[i] = 1
        temp -= factor
      } else arr[i] = 0
    }
    return arr
  }
}