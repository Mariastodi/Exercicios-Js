let mensal = 3500;
let parcela = 1000;
let cpfLimpo = true;
let possuiFiador = false;


let limiteRenda = mensal * 0.3; 

let aprovado = (parcela <= limiteRenda && cpfLimpo) || possuiFiador;

console.log(`Seu empréstimo foi aprovado? ${aprovado}`); 