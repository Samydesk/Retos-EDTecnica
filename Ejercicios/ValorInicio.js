let arreglo = [1, 2, 3, 4];
let valorNuevo = 0;

function agregarInicio (arreglo, valorNuevo) {
    
    arreglo.unshift(valorNuevo);
    return arreglo;
}

let arregloModificado = agregarInicio(arreglo,valorNuevo)

console.log(arregloModificado);