//Crear una calculadora que haga operaciones aritmeticas basicas con dos numeros

//Contiene la operacion o resultado parcial
let parcial = "";

//Elemento donde se ponen las operaciones que se estan realizando
let operRealizada = document.getElementById("operacionRealizada");
//Elemento donde se pone el resultado
let txtResul = document.getElementById("txtResultado");

//Ultimo operador seleccionado
let operadorSeleccionado = "";

//Numero ingresado
let numero = "";

//Para determinar si lo ultimo presionado es un numero o una operacion
let ultimoDigitoPresionado = "";

function operador(num){
    //Se concatena el numero
    numero = numero + num
    //Se concatena la operacion hasta el momento
    parcial = parcial + num;
    //Se muestra
    operRealizada.innerHTML = parcial;


    //Se controla la division entre 0
    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        txtResul.innerHTML = "indefinido (como los patos)";
        return;
    }
    //Se guarda el tipo de tecla presionada por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado=='numero'
    }

}

//Se detecta cuando se presiona una operacion
function operacion(oper){
    //Se guarda la operacion elegida
    operadorSeleccionado = oper;
    //Actualiza el tipo de tecla presionada
    ultimoDigitoPresionado = "operacion";
    // Se arama la formula matematica
    parcial = parcial + oper;
    numero = 0;
    operRealizada.innerHTML = parcial;
}

//Se realizan las operaciones que se desarrollan como parametros

/*
function parameter(){
    operadorSeleccionado = 
}
*/

//Se realiza el calculo de la forma matematica cuando se presiona el =
function calculo(){
    //con eval se evalua la formula matematica que esta en formato string
    parcial = eval(parcial);
    //Se vuelve a convertir en string por si continua la formula
    parcial = parcial.toString();
    numero = "";

    operRealizada.innerHTML = parcial;
    txtResul.innerHTML = parcial;
}

//Funcion que limpia todo
function limpiar(){
    operadorSeleccionado = "";
    parcial = "";
    txtResul.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = 0;
}

