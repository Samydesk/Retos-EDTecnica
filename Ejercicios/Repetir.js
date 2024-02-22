let texto = 'Hola Mundo ';
let veces = 5;


function repetirCadena(texto, veces){
    let resultado = "";

    for (let i = 0; i < veces; i++){
        resultado += texto;
    }
    return resultado;

}

let cadenaRepetida = repetirCadena(texto, veces);

console.log(cadenaRepetida)