function nome(nomeCompleto) {
    let partesNome = nomeCompleto.split(" ");
    return partesNome[0];
}

let usuario = "Maria Beatriz Leandro da Silva";
let primeiroNome = nome(usuario);

console.log(`Bem-vindo de volta, ${primeiroNome}!`);