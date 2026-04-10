const fatura = {
    id: 14567,
    item: "Teclado Mecânico",
    preco: 356.99
};

const jsonParaEnvio = JSON.stringify(fatura);

console.log("Dado pronto para envio:");
console.log(jsonParaEnvio); 
