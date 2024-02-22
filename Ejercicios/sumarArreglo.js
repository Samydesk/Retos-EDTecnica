let arreglo = [1, 2, 3, 4]

function sumarArreglo (arreglo) {
    return arreglo.reduce((a,b) => a + b, 0);
}

let suma = sumarArreglo(arreglo);

console.log(suma);