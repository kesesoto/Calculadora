function sumarOperandos(){
    let operando1= parseInt(document.getElementById("operando1").value);
    let operando2= parseInt(document.getElementById("operando2").value);
    document.getElementById("resultado").innerHTML= operando1 + operando2;

    if(isNaN(operando1) && isNaN(operando2)) {
        document.getElementById("resultado").innerHTML="La operacion no tiene operadores"

    }
    else if(isNaN(operando1) && Number(operando2)|| Number(operando1) && isNaN(operando2)){
        document.getElementById("resultado").innerHTML="Falta un operador"
    }
}

function restarOperandos(){
    let operando1= parseInt(document.getElementById("operando1").value);
    let operando2= parseInt(document.getElementById("operando2").value);
    document.getElementById("resultado").innerHTML= operando1 - operando2;

    if(isNaN(operando1) && isNaN(operando2)) {
        document.getElementById("resultado").innerHTML="La operacion no tiene operadores"

    }
    else if(isNaN(operando1) && Number(operando2)|| Number(operando1) && isNaN(operando2)){
        document.getElementById("resultado").innerHTML="Falta un operador"
    }
}

function multiplicarOperandos(){
    let operando1= parseInt(document.getElementById("operando1").value);
    let operando2= parseInt(document.getElementById("operando2").value);
    document.getElementById("resultado").innerHTML= operando1 * operando2;

    if(isNaN(operando1) && isNaN(operando2)) {
        document.getElementById("resultado").innerHTML="La operacion no tiene operadores"

    }
    else if(isNaN(operando1) && Number(operando2)|| Number(operando1) && isNaN(operando2)){
        document.getElementById("resultado").innerHTML="Falta un operador"
    }
}

function dividirOperandos(){
    let operando1= parseInt(document.getElementById("operando1").value);
    let operando2= parseInt(document.getElementById("operando2").value);
    document.getElementById("resultado").innerHTML= operando1 / operando2;

    if(isNaN(operando1) && isNaN(operando2)) {
        document.getElementById("resultado").innerHTML="La operacion no tiene operadores"

    }
    else if(isNaN(operando1) && Number(operando2)|| Number(operando1) && isNaN(operando2)){
        document.getElementById("resultado").innerHTML="Falta un operador"
    }
}