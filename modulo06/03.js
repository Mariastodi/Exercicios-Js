const carrinho = [
    { produto: "Mouse Pad", preco: 69 },
    { produto: "Monitor 24'", preco: 5431 },
    { produto: "Cabo HDMI", preco: 18 }
];

console.log("Carrinho");
carrinho.forEach(item => {
    console.log(`
        Item: ${item.produto} 
        Valor: R$ ${item.preco}`);
        
});