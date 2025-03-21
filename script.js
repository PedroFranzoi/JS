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