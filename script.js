//Inicio da questão 1
let numero = prompt('Digite seu numero.');

function verificarPar(numero){
    if(numero % 2 === 0){
        console.log(numero + " é par.");
    }else{
        console.log(numero + " é impar.");
    }
}

verificarPar(numero);
//Fim da questão 1


//Inicio da questão 2
let numero1 = parseFloat(prompt('Digite o primeiro numero'));
let numero2 = parseFloat(prompt('Digite o segundo numero'));

function calcular(numero1, numero2){
  const soma = numero1 + numero2;
  console.log('O resultado da somo é: ' + soma);
  const subtracao = numero1 - numero2;
  console.log('O resultado da subtração é: ' + subtracao);
  const multiplicacao = numero1 * numero2;
  console.log('O resultado da multiplicação é: ' + multiplicacao);
  const divisao = numero1 / numero2;
  console.log('O resultado da divisão é: ' + divisao);
}

calcular(numero1, numero2);
//Fim da questão 2

//Inicio da questão 3
let i = 10;

while(i > 0){
    console.log(i);
    i--;
}
//Fim da questão 3

//Inicio da questão 4
function inverterTexto(palavra) {
    let inverPalavra ='';
    for(let i = palavra.length - 1; i >= 0; i--) {
        inverPalavra = inverPalavra + palavra[i];
    }
   console.log(inverPalavra);
}

inverterTexto(prompt());
//Fim da questão 4

//inicio da questão 5
let palavra = prompt('Escreva uma palavra.');
let contagem = palavra.length;

function contarCaracteres(contagem){
    let quantidade = contagem;
    console.log('A quantidade de caracteres é: ' + quantidade);
}

contarCaracteres(contagem);
//Fim da questão 5

//Inicio da questão 6
let carro = {
    marca: 'Hyundai',
    modelo: 'CRETA',
    ano: '2025',
    imprimir: function() {
        console.log('O modelo do carro é: ' + this.modelo)
    }
};

carro.imprimir();
//Fim da questão 6

//Inicio da questão 7
let nome = prompt('Digite o nome.');
let mensagem = prompt('Digite a mesnagem.');

function mensagemPersonalizada(nome, mensagem){
    console.log('Olá! ' + nome + ' ' + mensagem);
}

mensagemPersonalizada(nome, mensagem);
//Fim da questão 7

//Inicio da questão 8
let n1 = parseFloat(prompt('Digite o primeiro numero'));
let n2 = parseFloat(prompt('Digite o segundo numero'));
let n3 = parseFloat(prompt('Digite o terceiro numero'));

function media(n1, n2, n3){
    const resultado = (n1 + n2 + n3) / 3;
    console.log('A média é de: ' + resultado)
}

media(n1, n2, n3);
//Fim da questão 8

//Inicio da questão 9
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0){
        console.log(i + ' é múltiplo de 3.');
    } else{
        console.log(i + ' Não é múltiplo de 3.');
    }
}
//Fim da questão 9

// Inicio da questão 10
let palavraDois = prompt('Digite uma palavra.')

function verificarPalindromo(palavraDois) {
    let inverPalavraDois ='';
    for(let i = palavraDois.length - 1; i >= 0; i--) {
        inverPalavraDois = inverPalavraDois + palavraDois[i];
    }
   
    if(inverPalavraDois === palavraDois){
        console.log('A apalavra ' + palavraDois + ' é um palindromo.');
    }else{
        console.log('nA apalavra ' + palavraDois + ' não é um palindromo.');
    }
}
   
verificarPalindromo(palavraDois);
//Fim da questão 10

//Inicio da questão 11
let inteiro = prompt('Digite um numero.');

function verificarSinal(inteiro) {
    if(inteiro > 0){
        console.log('O numero ' + inteiro + ' é positivo.');
    } 
    if(inteiro < 0){
        console.log('O numero ' + inteiro + ' é negativo.');
    }
    if(inteiro == 0){
        console.log('O numero ' + inteiro + ' é zero');
    }
}
verificarSinal(inteiro);
//Fim da questão 11

//Inicio da questão 12
let graus = prompt('Digite uma temperatura em graus celsius.');

function converterTemperatura(graus){
    F = (graus * (9/5)) + 32
    console.log('A temperatura ' + graus + ' em celsios equivale a ' + F + ' em Fahrenheit');
}

converterTemperatura(graus);
//Fim da questão 12

//Inicio da questão 13
let j = 1;
let total = 0;
while(j <= 100){
     total = total + j;
    j++;
}
console.log(total);
//Fim da questão 13

//Inicio da questão 14
function substituirPalavra(text){
    conslole.log( text.replace(/azul/g, "vermelho"));
}
let texto = prompt('Digite seu texto.');
substituirPalavra(text);
//Fim da questão 14

//Inicio da questão 15
let palavra2 = prompt('Digite uma palavra.');

function verificarTamanho (palavra2){
    let letras = palavra2.length;
    if(letras <= 10){
        console.log("A palavra não tem mais de 10 letras.")
    }else{
        console.log("A palavra tem mais de 10 letras.")
    }
}
verificarTamanho (palavra2);
//Fim da questão 15

//Inicio da questão 16
frutas = ["Banana", "Uva", "Morango", "Manga", "Abacaxi"];

console.log(frutas[2]);
//Fim da questão 16

//Inicio da questão 17
const saudacaoEducada = "Bem vindo(a)";
let nome2 = prompt('Digite seu nome.');

function saudacao(saudacaoEducada, nome2){
    console.log(saudacaoEducada + ' ' + nome2);
}

saudacao(saudacaoEducada, nome2);
//Fim da questão 17