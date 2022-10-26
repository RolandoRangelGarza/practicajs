//¿Cuantos numeros perfectos se van a genera?

//lista para ir guardando cada numero perfecto




//ciclo como tal
function lista_numeros (cant_numeros) {
    //Numero con el que empieza la lista para ir buscando numeros perfectos, empieza en el 1 y termina cuando encuentre el ultimo numero perfecto especificado
    let numero = 1;
    numeros_perfectos = []
    while (numeros_perfectos.length < cant_numeros) {
        //aqui se guardan los divisores encontrados (con residuo de cero)
        listagenerica = [];
    
        //suma va guarda la suma de los divisores de cada numero
        let suma = 0;
    
        //Añadir numero a la listagenerica
        for (i=1 ; i<= numero; i++) {
            if ( numero % i == 0 ) {
                //agrega el divisor a la lista 
                listagenerica.push(i);
            }
            else {}
        }
    
        //Suma de los divisores del numero perfecto
        for ( i=0 ; i<= listagenerica.length-2 ; i++) {
            //acumulador de los divisores con residuo de cero para ese numero
            suma += listagenerica[i];
        }
    
        //Si el acumulado de los divisores da igual al propio numero:
        if ( suma == numero ) {
            console.log("Si es un numero perfecto");
            numeros_perfectos.push(suma);
        }
        //incrementar en uno para ir encontrando el siguiente numero perfecto
        numero ++;
    }
    return numeros_perfectos;
}

function calcular(){
    let cantidad = 
    parseInt(document.getElementById("numero").value);
    console.log(cantidad);
    
    let resultado =
    document.getElementById("resultado");
    console.log(document.getElementById("resultado"));
    resultado.value = lista_numeros(cantidad);
    console.log(resultado.value = lista_numeros(cantidad));
}