let addToScreen = (dato) => {
    document.getElementById("screenResult").value += dato; 
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
    document.getElementById("screenResult").value = "";
}

let calculate = () => {
    let result = "E";

    let operation = document.getElementById("screenResult").value;

    let found = false;
    for(let i=0; i<operation.length-1 && found == false; i++){
        if(!isNaN(operation[i]) && isNaN(operation[i+1])){
            let num1 = operation.slice(0,i+1);
            let operator = operation.slice(i+1,i+2);
            let num2 = operation.slice(i+2,operation.length);

            found = true;
            if((num1[0] == "-" || num1[0] == "+" || !isNaN(num1[0])) && (num2[0] == "-" || num2[0] == "+" || !isNaN(num2[0])) && !isNaN(num2)){
                switch(operator) {
                    case "+":
                        result = sumar(num1,num2);
                        break;
                    case "-":
                        result = restar(num1,num2);
                        break;
                    case "*":
                        result = multiplicar(num1,num2);
                        break;
                    case "/":
                        result = dividir(num1,num2);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    document.getElementById("screen").value = operation;
    document.getElementById("screenResult").value = result;
}

let sumar = (a,b) => {
    return parseInt(a)+parseInt(b);
}

let restar = (a,b) => {
    return parseInt(a)-parseInt(b);
}

let multiplicar = (a,b) => {
    return parseInt(a)*parseInt(b);
}

let dividir = (a,b) => {
    let result = "E";
    parseInt(a);
    parseInt(b);
    if(b!=0){
        result = Math.round(a/b*1000000000)/1000000000;
    }
    return result;
}

/*
    Operaciones correctas:

    1+2
    1*63
    365471*889412
    245656/51223
    3*-2
    -9*-2
    -1/-9
    -5*14
    -1--1
    -1750*-14


    //Operador: el primer simbolo no  numérico seguido 
    //de un símbolo numerico

    //isNaN() -> true -> no es un  numero
    //isNaN() -> false -> si que es un  numero


*/

/*
    Operacioens que van a dar E de error
    *** NO HAY DECIMALES

    3+4+5
    /9*3
    *9*3
    4-/6
    7* /  *5
    -*5

*/

/*
//ejemplo de operacion
    let operation = "-1/-6";

    -1
    /
    -6

*/

