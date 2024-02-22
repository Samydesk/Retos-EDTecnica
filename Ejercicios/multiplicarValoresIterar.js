let arreglo = [1, 2, 3, 4];

function multiplicarValores(arreglo) {
    let resultado = arreglo.reduce((total, actual) => total * actual);
  return resultado;
}
let resultado = multiplicarValores(arreglo);
console.log(resultado);