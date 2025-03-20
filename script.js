let numero = prompt('Digite seu numero.');

function verificarPar(numero){
    if(numero % 2 === 0){
        console.log(numero + " é par.");
    }else{
        console.log(numero + " é impar.");
    }
}

verificarPar(numero);