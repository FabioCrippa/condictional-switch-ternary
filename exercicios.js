//estrutura do if ternario
//let nomeVariavel = condicao == "isso"? "faco isso": "faco aquilo";
//console.log(nomeVariavel);
//se nao quisermos que nada aconteca, podemos usar uma string vazia " "

let dia = "domingo";
let resultado = dia == "domingo"? "Vou a praia": "Fico em casa";
console.log(resultado);

//estrutura do switch
//let nomeVariavel = "valor";
//switch(nomeVariavel) {
    //case "valor1":
    //console.log(" ")
    //break - serve para parar a condicao e evita que o proximo bloco seja executado

    //case "valor2":
    //console.log(" ")
    //default: //quando nenhum dos casos sao true
    //console.log(" ")
//}

let mes = "janeiro";
switch (mes) {
    case "janeiro":
        console.log("Meu aniversario!")
        break;
    case "fevereiro":
        console.log("Eba! Chegou o carnaval!")
        break;
    default:
        console.log("Fiquei triste.")
        break;
}