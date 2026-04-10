function autorizar(nome, idade) {
    if (idade >= 18) {
        console.log(`${nome} tem ${idade} anos. Pode entrar na festa!`);
    } else {
        console.log(`${nome} tem apenas ${idade} anos. Entrada proibida.`);
    }
}

autorizar("Pedro", 44);
autorizar("Alicia", 3);