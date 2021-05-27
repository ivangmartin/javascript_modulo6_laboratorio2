//el algoritmo de encriptación viene dado por la siguiente transformacion de letras
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";


var encrypt = () => {

    var textoInicio = document.getElementById("sin_encrypt").value;
    var textoFin="";
    var aux,pos;

    for(var i=0; i < textoInicio.length; i++){
        aux = textoInicio[i];
        pos = plainAlphabet.indexOf(aux);
        if(pos >= 0){
            textoFin += encryptedAlphabet[pos];
        }else{
            textoFin += aux;
        }
    }
    document.getElementById("con_encrypt").value = textoFin;
}

var decrypt = () => {

     var textoInicio = document.getElementById("con_encrypt").value;
    var textoFin="";
    var aux,pos;

    for(var i=0; i < textoInicio.length; i++){
        aux = textoInicio[i];
        pos = encryptedAlphabet.indexOf(aux);
        if(pos >= 0){
            textoFin += plainAlphabet[pos];
        }else{
            textoFin += aux;
        }
    }

    document.getElementById("sin_encrypt").value = textoFin;
}




//EVENTS
document.getElementById("encrypt").addEventListener("click",encrypt);
document.getElementById("decrypt").addEventListener("click",decrypt);

//************************* EJERCICIO GENERADOR ALEATORIO *****************/

var isInside = (array, number) =>{
    if(array.indexOf(number) !== -1){
        return true;
    }else{
        return false;
    }
} 

var randomPick = (n, min, max) => {
    var range = max - min +1;
    var salida = [];
    var auxiliar;
    for(var i = 0; i < n; i++){
        auxiliar = Math.floor(Math.random() * range) + min;
        salida.indexOf(auxiliar) !== -1 ? i-- : salida[i] = auxiliar;
        
    }
    return salida;
}




console.log(randomPick(6, 1, 49));
console.log(randomPick(15, 1, 15));
console.log(randomPick(1, 1, 6));



