function estoque(desejado, atual) {
    if (desejado <= atual) {
        return true; 
    } else {
        return false; 
    }
}

let compra = estoque(70, 50);

if (compra) {
    console.log("Prosseguindo para o pagamento...");
} else {
    console.log("Erro: Estoque insuficiente.");
}