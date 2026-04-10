let herois = [
  { nome: "Neville Longbottom", xp: 500 },    
  { nome: "Cedrico Diggory", xp: 1500 },                
  { nome: "Luna Lovegood", xp: 3500 },                 
  { nome: "Rony Weasley", xp: 6000 },                   
  { nome: "Hermione Granger", xp: 7500 },               
  { nome: "Severo Snape", xp: 8500 },                   
  { nome: "Alvo Dumbledore", xp: 9500 },                
  { nome: "Harry Potter", xp: 15000 }  
];

for (let heroi = 0; heroi < herois.length; heroi++) {
  let nome = herois[heroi].nome;
  let xp = herois[heroi].xp;
  let nivel = "";

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}