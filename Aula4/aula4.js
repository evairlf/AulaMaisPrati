//o metodo log do objeto console é como o system.out.println do java, ele escreve um texto no console e como os navegadores sao em js ele manda no console do navegador
pepeca = "couve";
console.log("to com soninho logo é 'sabado'");//caso queira colocar aspas no texto
console.log('to com soninho logo é "sabado"');//caso queira colocar aspas no texto
console.log(`to com soninho logo é sabado ${pepeca}`);//permite colocar variavel junto da string

//Ctrl + ; comenta ou descomenta uma área inteira selecionada


//Numeros sem aspas reais ou inteiros
console.log(10);
console.log(7.5);

//numero inteiro, real e string
console.log(1000, 124.5, "Eu");

nomez = "Evair";
professor = "jaques";
aulaNumero = 4;

console.log(`meu nome é ${nomez} e estou na aula ${aulaNumero} do professor ${professor}`);

console.log("meu fusquinha quebrou a "+ 4 +"º roda quando fui 'manobrar'");

nomeu = "Evair"; //Nao recomendado porque pode gerar variavel global
let nome = "Evair";//Declaracao padrão
var name = "Evair";//Deprecated

const NAME = "Evair"; //const convencao é a variavel ser em MAIUSCULA, constante é cosntante ou seja nao muda e ela deve ser inicializada sempre

//Undefined bolado

let teste;//Undefined geralmente nao usamos isso, fica a cargo do js
console.log(teste);

let meuNull = null;//Usado quando quer desconfigurar uma variavel caso seja uma pergunta onde a pessoa nao respondeu nada
console.log(meuNull);


let meuNumber = 10.1;
let minhaStringona = "Sou careca";
console.log(typeof(meuNumber));//funcao typeof para descobrir o tipo da variavel(vou usar muito nessa bagassa sem tipagem)
console.log(typeof(minhaStringona));//funcao typeof para descobrir o tipo da variavel(vou usar muito nessa bagassa sem tipagem)

//Operadores
let num1 = 10;
let num2 = 5.1;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 = num2);
console.log(num1 ** num2);//Potencia


let numTeste = "5";
console.log(numTeste + num1);

let numTeste2 = parseInt(numTeste);//Casting ele força a ser um numero

console.log(numTeste - num1);//Com - Funciona pois o operador + é o unico com duas funcoes
console.log(numTeste2 + num2);//como forcei a ser inteiro ele nao conta as casas decimais

let numTeste3 = Number(numTeste);//Funcao que trasnforma em NUMBER e nao um tipo especifo por exemplo INTEIRO OU FLOAT

console.log(numTeste3 + num2);

let contador = 1;
contador++;
console.log(contador);//incremento ele acrescenta depois da operacao
contador--;
console.log(contador);//decremento ele acrescenta depois da operacao
console.log(++contador);//pre-incremento
console.log(--contador);//pre-decremento

const passo = 5;
contador += passo;// soma o da esquerda com o da direita(pode fazer com varios outros operadores como **, *)
console.log(contador); 

//() primeiro o que tem entre aspas
//** sin la potenzia
//* / % -> multiplicacao, dividir e porcentagem
//+ -  -> mais e -
//Lê-se da esquerda para direita

//Operador       Funcao
// ==           igual a
// >            maior que 
// =>            maior ou igual que 
// <            menor que
// <=            menor ou igual que
// ===         identico a verifica o tipo e o valor(sempre usar essa coisa por convencao)
// ==           igual a só verifica o valor
// !=          diferente
// !=          diferente estrito


//Operador Lógico      Funcao
//AND -- &&              E
//OR  ||                OU
//NOT !                 NAO

console.log((10 > 5) && (5 < 10));//Só da true se os dois forem verdadeiros
console.log((10 > 5) || (5 < 10));//Da true se pelo menos 1 for verdadeiro
console.log((10 > 5) && !(5 < 10));//Negação da segunda sentencao junto com o operador logico && entao da false


//Autenticação
const usuario = "Evair";
const senha = 123;

const autenticacao = usuario === "Evair" && senha === 123;

console.log(autenticacao);

console.log(!true);//negacao
console.log(!!true);//dupla negacao
console.log(!!!true);//loucura

//Ifzão da massa
const visual = "feio";

console.log("Oi gata quer tc?");
if(visual === "feio"){
    console.log("sai daqui ridiculo!");
}else{
    console.log("AIN GATUUU");
}

//operador ternário
console.log("oi gata quer tc?");
(visual === "feio") ? console.log("sai fora maluco") : console.log("claro lindono");

const nota = 30;

if(nota >= 60){
    console.log("APROVADO");
}else if(nota >= 40 && nota <= 59){
    console.log("RECUPERACAO");
}else{
    console.log("Para de jogar lol e vai estudar!")
}

//Inputzão do usuário
const prompt = require('prompt-sync')();

let testezao = prompt("digite aqui seu nome: ");
console.log(testezao);