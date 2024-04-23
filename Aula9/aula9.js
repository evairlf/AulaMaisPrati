const pessoa = { 
nome: "Evair", 
idade: 29,
email: "fusca89@teste.com",
profissao: "Desenvolvedor",
empregada: true,
descrever: function() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`);
}
}

//funcaozinha fora do objeto
pessoa.falar = function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.profissao}`
}

pessoa.email = "fusca@gmail.com"

console.log(pessoa['nome']);//Disgrama parecida com array pq é um objeto
console.log(pessoa.email);

delete pessoa.empregada;//deleta algum atributo

console.log(pessoa);

console.log(pessoa.falar());

const monitor = {
    tamanho: 32,
    modelo: "pichau c29",
    hertz: 165,
    ligado: true,
    ligar: function() {
    this.ligado = true;
    },
    desligar: function() {
      this.ligado = false;  
    }
}

//For In 
for ( let chave in pessoa){
    console.log(chave + " : " + pessoa[chave]);
}

//For Of -> funciona muito melhor com arrays
let numeros = [10,20,100];
let carro = "fusquinha 1984";

for (const numero of numeros) {
    console.log(numero);
}

for (const carrinho of carro) {
    console.log(carrinho);
}

//Voce tem uma lista de objetos que representam diferentes tipos de veiculos e suas caracteristicas. Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veiculo. Depois, Utilizar o FOR OF para listar 
//apenas os modelos dos veiculos

const carros =[
    {
        modelo: 'fusca',
        ano: 1984,
        cor: 'preto',
        funcionando: true
    },
    {
        modelo: 'chevettinho',
        ano: 1980,
        cor: 'preto',
        funcionando: true
    },
    {
        modelo: 'KA',
        ano: 1994,
        cor: 'preto',
        funcionando: false
    }
] 

for (const chave in carros) {
    console.log(carros[chave]); 
}

for (const carro of carros) {
    console.log(`Modelo do veiculo: ${carro.modelo}`);
}

carros.forEach(element => {
    console.log("Modelo: " + element.modelo
     + " Ano: " + element.ano
     + " cor: " + element.cor
     + " Funcionando: " + element.funcionando);
})


//ForEach

let cores = ['azul','preto','branco'];

cores.forEach((cor,indice) => { //arrow function bolada
    console.log(indice + ": " + cor);
});


//Tarefa
//Construa um array de numeros e calcule a somna total dos numeros e tambem imprima cada numero multiplicado por 2.

let numer = [1,2,4,5,6,7];
let soma = 0;

numer.forEach((value) => {
    soma += value;
    console.log("Valor multiplicado por 2: " + value*2);
});
console.log("soma de tudo: " + soma);


//DESIGN PATTERN -> FACTORY

let BicicletaFactory = function(cor, tipo, marca){
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = BicicletaFactory('Azul', ' speed', 'caloi');
let bicicleta2 = BicicletaFactory('Vermelha', ' Moutain', 'BMX');
let bicicleta3 = BicicletaFactory('Preta', 'circular', 'monark');

console.log(bicicleta1);
console.log(bicicleta2);
console.log(bicicleta3);
//Arrow function cria um escopo novo
//chaves nao declara array e sim objetos
//objetos sao compostos por chave valor no js
//Estrutura representa o mundo real
//constante nao podem ser reatriuidas mas em caso de objeto elas podem mudar o valor mas nao a estrutura, por exemplo nao poderia trocar uma "variavel" de tipo como por exemplo string por int