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

function imagen(){
    let numeroimagen = 
    parseInt(document.getElementById("numeroimagen").value);
    console.log(numeroimagen);
    
    switch ( numeroimagen ) {
        case 1:
            document.getElementById("imagenforms").src="https://m.media-amazon.com/images/I/71+mDoHG4mL.png";
            document.getElementById("imagenforms").style.display = "block";
            break
        case 2:
            document.getElementById("imagenforms").src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg";
            break
        case 3:
            document.getElementById("imagenforms").src="https://www.petdarling.com/wp-content/uploads/2021/04/pollitos-1.jpg";
            break
        case 4:
            document.getElementById("imagenforms").src="https://mcveterinaria.com/wp-content/uploads/2016/02/potro-neonato-sano-1170x878.jpg";
            break
        case 5:
            document.getElementById("imagenforms").src="https://m.media-amazon.com/images/I/51d78B-xXWL.jpg";
            break       
    }
}