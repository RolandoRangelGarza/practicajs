/* Variable hora de la toma inicial */
let h_tomainicial = 2 //0-23

/* Variable frecuencia de la toma diaria */
let f_tomadiaria = 3 //1-12

/* Verificar datos */
console.log(`Hora inicial de la toma: ${h_tomainicial}`);
console.log(`Frecuencia: ${h_tomainicial}`);

let contador = 1

while ( contador <= f_tomadiaria ) {
    document.write("<p>" + "toma" + "&nbsp;" + contador + "&nbsp;" + h_tomainicial + "&nbsp;" + "</p>");
    contador ++;
    h_tomainicial += h_tomainicial;
}

console.log("Horarios");
console.log(`Toma ${contador} ${hora_contador}`);



