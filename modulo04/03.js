function pao() {
    return "Pão colocado na torradeira.";
}

function aquecer() {
    return "Aquecendo a 180°C...";
}

function torrada() {
    console.log("Iniciando processo...");
    console.log(pao());
    console.log(aquecer());
    console.log("Torrada pronta!");
}

torrada();