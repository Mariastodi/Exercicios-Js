function calculo(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

let preco = calculo(100, 10); 
console.log(`O valor final é R$ ${preco}`);