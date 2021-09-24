let readlineSync = require("readline-sync");
var nomePeca;
var pesoPeca;
var capacidade= 9;

nomePeca = readlineSync.question("Digite o nome da peça: ");
pesoPeca = readlineSync.question("Digite o peso da peça: ");

if(pesoPeca > 100){

//Condição verdadeira

if(capacidade > 10){

//Condição verdadeira

console.log("Não cadastrar, capacidade máxima atingida!");


}


else if(nomePeca.length < 3){

 //Condição Verdadeira

console.log("Não cadastrar, nome inválido!");

}

else{

console.log("Peça cadastrada com sucesso!");

}

}



else{

//Condição falsa

console.log("Não cadastrar, peso insuficiente");

}