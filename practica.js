/* Variable hora de la toma inicial */
let h_tomainicial = 0 //0-23

/* Variable frecuencia de la toma diaria */
let f_tomadiaria = 0 //1-12

/* Verificar datos */
console.log(`Hora inicial de la toma: ${h_tomainicial}`);
console.log(`Frecuencia: ${h_tomainicial}`);

let suma = 0
for( let i=1; i<=f_tomadiaria; i++) {
    let h_tomainicial = h_tomainicial + suma;
    let codigo = "<p>" + `toma` + i + `` + h_tomainicial+ "</p>";
    document.write(codigo);
}


console.log("Horarios");
console.log(`Toma ${contador} ${hora_contador}`);



