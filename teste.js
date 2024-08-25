//const e let são as duas variaveis do javascript (a const é uma constante, o valor não pode ser alterado, Let pode ser alterado.)
//J.S É SEM TIPAGEM, NÃO PRECISA ESPECIFICAR VARIAVEIS, TODAS SÃO GENERICAS.
const num = 5; 
const dum = 6;
const soma = num + dum; 
const nome = "jotaveex";
const idade = "19";
console.log ("resultado= ",soma);


if (soma % 2 ==0 ) { // == verifica se é verdadeiro e o != verifica se é falso. (testando se é par)
    console.log ("PAR");
}else{
    console.log ("IMPAR");  //else vulgo *SE NÃO* acontece quando if for falso.
}

if (nome == "jotavex"){
    console.log ("ACESSO PERMITIDO");       
}else if (nome == "jf"){ 
    console.log ("ACESSO NEGADO");
}else{
    console.log ("ERRO");
}




if (soma >= 10 && nome =="jotaveex" && idade =="19") {                 //&& serve para verificar mais de uma coisa, serve como uma ponte?
    console.log ("tres coisas verdadeiras");                           // || serve para verificar se uma das coisas é verdadeira (se uma coisa OU a outra for verdadeira.)

}