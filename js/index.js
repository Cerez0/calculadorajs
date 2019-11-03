// Variables
var num1 = 0;
var num2 = 0;
var operacion;


// cuncion que coloca el numero pulsado

function colNumero(numero){

    if(num1==0 && num1 !== '0.'){

        num1 = numero;
    }else{

        num1 += numero;
    }
    refrescar();
}

// Funcion para la coma(,)

function colComa(){

    if(num1 == 0){

        num1 = '0.';

    }else if (num1.indexOf('.') == -1){

        num1 += '.';
    }

    refrescar();
}

//Funcion bonton C restablece las variables

function colC(){

    num1 = 0;
    num2 = 0;
    refrescar();
}

//Esta función realiza las distintas operaciones aritméticas en función del botón

function operador(valor){

    if( num1 == 0){

        num1 = parseFloat(document.getElementById('pantalla').value);
    }

    num2 = parseFloat(num1);
    num1 = 0;
    operacion = valor;
}

// Funcion boton Igual

/*
    suma = 1
    resta = 2
    multiplicacion = 3
    division = 4

*/

function esIgual(){

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operacion){

        case 1:
            num1 = num1 += num2;
        break;

        case 2:
            num1 = num2 - num1;
        break;

        case 3:
            num1 = num1 *= num2;
        break;

        case 4:
            num1 = num2 / num1;
        break;
    }
    refrescar();
    
}

// Funcion refrescar
 function refrescar(){
    document.getElementById('pantalla').value = num1;

    console.log(`numero1 = ${num1} operacion= ${operacion}  numero2 = ${num2} resultado = ${num1} `);
 }




