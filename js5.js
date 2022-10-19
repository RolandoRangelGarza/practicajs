// Programa calculadora
// Numero 3
// Numero 2
// Operacion
// Resultado
// "Calcular"

function calculadora(n1, n2, signo) {
    let resultadoop = 0;
    switch (signo) {
        case '+':
            resultadoop = n1 + n2;
            break;
        case '-':
            resultadoop = n1 - n2;
            break;
        case '/':
            resultadoop = n1 / n2;
            break;
        case '*':
            resultadoop = n1 * n2;
            break;
    }
    return resultadoop;
}

function calcular() {
    let numero1 = 
    parseInt(document.getElementById("numero1").value);
    console.log(numero1);

    let numero2 = 
    parseInt(document.getElementById("numero2").value);
    console.log(numero2);
    
    let signo = 
    document.getElementById("signo").value;
    console.log(signo);
    console.log(typeof signo);

    let resultado =
    document.getElementById("resultado");
    resultado.value = calculadora(numero1, numero2, signo);
    console.log(resultado);
}
