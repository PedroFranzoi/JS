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