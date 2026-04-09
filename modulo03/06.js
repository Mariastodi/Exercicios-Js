let senhaDigitada;
const senhaCorreta = "12344";

do {
    senhaDigitada = "1234"; 

    console.log("Validando tentativa de acesso...");

} while (senhaDigitada !== senhaCorreta);

console.log("Acesso concedido!");