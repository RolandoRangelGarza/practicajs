//                                              FUNCIONES JAVASCRIPT

// Primera forma: Función normal (cantidad de divisores que tiene un número)
function divisores(num) {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 1): ", divisores(10));

// Segunda forma: Función anónima (cantidad de divisores que tiene un número)

const divisoresV2 = function(num){
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 2): ", divisoresV2(10));

// Tercera forma: 

const divisoresV3 = num => {
    let suma = 0;
    for ( i=0 ; i<=num ; i++) {
        if ( num % i == 0) {
            suma ++;1
        }
    }
    return suma;
}

console.log("Total de divisores (versión 3): ", divisoresV3(10));

function calcular(){
    let numero = 
    parseInt(document.getElementById("numero").value);
    console.log(numero);
    
    let resultado =
    document.getElementById("resultado")
    resultado.value = divisores(numero)
}