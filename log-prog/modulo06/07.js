const calculadora = {
    nome: "Math",
    saudar: function() {
        return `Olá! Eu sou o ${this.nome} e estou pronto para calcular.`;
    },
    somar: (a, b) => a + b
};

console.log(calculadora.saudar());
console.log("Resultado da soma:", calculadora.somar(86576, 352435));