const myFncCallBack = ( element, index , array ) =>
     `soy el indice ${index}, valor ${element} del arreglo ${array}`;

const numbers = [1, 2, 4, 5]
const duplicateOriginal = numbers.map( myFncCallBack );
const duplicate = numbers.map( element => element *2 );

function resp2(){
    document.getElementById("pr2").innerHTML = `El arreglo * 2 es: ${duplicate}`;
}