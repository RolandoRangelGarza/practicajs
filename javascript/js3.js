/* 2.- Escribir un programa que imprima los horarios
        en que debe tomar los medicamentos un paciente. 
        Solicitar al usuario la hora de la toma inicial
        (0-23) y la frecuencia de la toma diaria (1-12).
        
        Ejemplo
        hora inicial: 5
        frecuencia: 6
        horarios
        toma 1 5
        toma 2 11
        toma 3 17
        toma 4 23
*/
alert("Consultar procedimiento en la terminal de javascript")
//¿A qué hora comenzó la dosis?
let h_tomainicial = 23;
console.log(`Hora de la toma inicial: ${h_tomainicial}`)
//¿Cada cuanto se toma la siguiente medicina?
let f_tomadiaria = 5;
console.log(`Frecuencia de la toma diaria: ${f_tomadiaria}`)
//¿Cuántas pastillas se tiene que tomar?
let cant_tomas = 12;
console.log(`Cantidad de tomas: ${cant_tomas}`)
// Acumulador de la siguiente hora para tomar la medicina, empieza a la hora inicial
let hora = h_tomainicial;

for (i = 1; i <= cant_tomas; i++) {
    if (hora > 23) {
        hora -= 24;
    }
    console.log("toma" + " " + i + " " + hora + ":00");
    hora += f_tomadiaria;
}
