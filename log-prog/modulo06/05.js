const produto = {
    id: 2324,
    nome: "Notebook Gamer",
    preco: 4353,
    estoque: 43
};

function gerarEtiqueta(item) {
    console.log(`ETIQUETA`);

    console.log(`
    SKU: ${item.id} 
    Nome: ${item.nome}`);

    console.log(`Valor de Venda: R$ ${item.preco}`);
}

gerarEtiqueta(produto);