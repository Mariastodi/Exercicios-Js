function combinandoNomesPokemons(palavra) {
  var palavraPokemon = palavra + "saur";
    return palavraPokemon;
}

var nomeEntrada = gets();

var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);