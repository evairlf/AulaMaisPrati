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