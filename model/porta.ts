export default class PortaModel {

  // propriedades privadas
  #numero : number
  #temPresente : boolean
  #selecionada : boolean
  #aberta : boolean

  // construtor
  constructor(
    numero : number,
    temPresente = false,
    selecionada = false,
    aberta = false
  ) {
    this.#numero = numero
    this.#temPresente = temPresente
    this.#selecionada = selecionada
    this.#aberta = aberta
  }

  // getters
  get numero() {
    return this.#numero
  }
  get temPresente() {
    return this.#temPresente
  }
  get selecionada() {
    return this.#selecionada
  }
  get aberta() {
    return this.#aberta
  }

  // retorna objetos (programação funcional)
  desselecionar() {
    const selecionada = false
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
  }

  alternarSelecao() {
    const selecionada = !this.selecionada
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
  }
  abrir() {
    const aberta = true
    return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
  }
}
