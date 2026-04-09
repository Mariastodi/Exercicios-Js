class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo; 
    }

    atacar() {
        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'um ataque comum';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const herois = [
    new Heroi('Harry Potter', 17, 'mago'),
    new Heroi('Neville Longbottom', 17, 'guerreiro'),
    new Heroi('Dobby', 30, 'monge'),
    new Heroi('Bellatrix Lestrange', 45, 'ninja')
];


for (const heroi of herois) {
    heroi.atacar();
}