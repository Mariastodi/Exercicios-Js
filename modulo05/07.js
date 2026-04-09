class ItemMagico {
  constructor(tipo, dano, resistencia) {
  this.tipo = tipo;
  this.dano = dano;
  this.resistencia = resistencia;
  }

  calcularDano() {
    if (this.tipo === 'arma') {
      return this.dano * 2;
    } else {
      return this.dano;
    }
  } 
} 
const tipoItem = gets();
const danoItem = parseInt(gets());
const resistenciaItem = parseInt(gets());

const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);