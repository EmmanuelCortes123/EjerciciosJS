const numeros = [1, 2, 3, 4];

const myFncCallBack2 = ( element, index , array ) =>
     `soy el indice ${index}, valor ${element} del arreglo ${array}`;
const sumaTotal = numeros.reduce((total, myFncCallBack2) => {
     return total + myFncCallBack2;
}, 0);

function factorialConCicloFor( numeros ) {
     let factorial = 1;
     for (let i=0; i < numeros; i++) {
         factorial *= (numeros - i);
     }
     return factorial;
}

function resp3(){
     document.getElementById("pr3").innerHTML = `La suma del arreglo es: ${sumaTotal} y el factorial es: ${factorialConCicloFor(numeros.length)}`;
}

