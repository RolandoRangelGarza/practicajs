function agregaTabla ( tabla, tipo, longitud ) {
    let resultado = [];

    if (tipo == 'normal') {
        for ( i=0; i<= longitud; i++) {
            resultado.push(`${tabla} x ${i} = ${tabla*i}`)
        }
    }
    else {
        for ( i=longitud; i<= 0; i--) {
            resultado.push(`${tabla} x ${i} = ${tabla*i}`)
        }
    }
    return resultado;
}

function generaTabla() {
    let tabla = 
    parseInt(document.getElementById("tabla").value);
    console.log(tabla);

    let tipo = 
    document.getElementById("tipo").value;
    console.log(tipo);
    
    let longitud = 
    parseInt(document.getElementById("longitud").value);
    console.log(tabla);

    let contenido = agregaTabla(tabla, tipo, longitud);

    let referencia = document.getElementById("ref_tabla");

    for (i=1; i< contenido.length; i++) {
        referencia.innerHTML += contenido[i];
        referencia.innerHTML += "<br>"
    }
}

function borrar() {
    document.getElementById("ref_tabla").innerHTML = "";
}

console.log(agregaTabla(5,"normal", 10));

