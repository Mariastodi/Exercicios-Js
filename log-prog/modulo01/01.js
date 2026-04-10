// Exercício 1: Cadastro de Usuário 
// Tarefa:
// Crie três variáveis para representar o Input: 
// nomeUsuario, cpfUsuario e cartaoDisponivel.
// Simule o Process: 
// Crie uma estrutura condicional que verifique se o cartão está disponível.
// Gere o Output: 
// Se o cartão for true, exiba no console: "Usuário [nome] cadastrado com sucesso". 
// Caso contrário, exiba uma mensagem de erro.

let nomeUsuario = "Maria Beatriz";
let cpfUsuario = "123.456.789-00";
let cartaoDisponivel = false;

if (cartaoDisponivel) {
    console.log(`Usuário ${nomeUsuario} cadastrado com sucesso.`);
} else {
    console.log("Erro: Necessário cadastrar um cartão para prosseguir.");
}