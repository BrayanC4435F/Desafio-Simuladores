// EJERCICIO 1
function calcularTemperatura() {

    let T0 = parseFloat(document.getElementById("t0").value);
    let Ts = parseFloat(document.getElementById("ts").value);
    let k = parseFloat(document.getElementById("k").value);
    let t = parseFloat(document.getElementById("t").value);

    let resultado =
        Ts + (T0 - Ts) * Math.exp(-k * t);

    resultado = Math.round(resultado);

    document.getElementById("resultadoTemp").innerHTML =
        "Temperatura final: " + resultado + " °C";
}


// FACTORIAL
function factorial(n) {

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}


// COMBINACIONES
function combinacion(n, r) {

    if (r > n) {
        return 0;
    }

    return factorial(n) /
        (factorial(r) * factorial(n - r));
}


// EJERCICIO 2
function calcularCombinaciones() {

    let n1 = parseInt(document.getElementById("n1").value);
    let r1 = parseInt(document.getElementById("r1").value);

    let n2 = parseInt(document.getElementById("n2").value);
    let r2 = parseInt(document.getElementById("r2").value);

    let grupo1 = combinacion(n1, r1);
    let grupo2 = combinacion(n2, r2);

    let total = grupo1 * grupo2;

    document.getElementById("resultadoComb").innerHTML =
        "Total de combinaciones: " +
        total.toLocaleString();
}