let num1 = 4;
let num2 = 5;

function esMayor (num1, num2) {
    let mayor;

    if (num1 > num2) {
        mayor = num1;
    }
    else {
        mayor = num2;
    }
    
    return mayor;
}

console.log(esMayor(num1, num2));

