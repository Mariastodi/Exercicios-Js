const colaborador = {
    matricula: "M-642",
    cargo: "Desenvolvedor",
    dadosPessoais: {
        cpf: "000.000.000-00",
        nascimento: "56/34/1995"
    },
    status: "Ativo"
};

console.log(`O cargo do colaborador é: ${colaborador.cargo}`);
console.log(`CPF: ${colaborador.dadosPessoais.cpf}`);
console.log(`Data de nascimento é: ${colaborador.dadosPessoais.nascimento}`);
console.log(`Status: ${colaborador.status}`);