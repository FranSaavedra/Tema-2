/*
Definir una funci n que muestre informaci n sobre una cadena de texto que se ó ó
le pasa como argumento. A partir de la cadena que se le pasa, la funci n ó
determina si esa cadena est formada s lo por may sculas, s lo por min sculas o á ó ú ó ú
por una mezcla de ambas.*/

function init () {
	var elemento = document.getElementById("parrafo");

	var texto = document.createElement("input");
	texto.type = "text";
	texto.id = "texto";
	elemento.appendChild(texto);

	var boton1 = document.createElement("input");
	boton1.type = "button";
	boton1.value = "Comprobar cadena";
	boton1.onclick = comprobarCadena;
	elemento.appendChild(boton1);
}

function comprobarCadena () {
	var texto = document.getElementById("texto");
	var str = texto.value.split("");
	var mayus = false;
	var minus = false;

	for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            mayus = true;
        }else if (str[i] == str[i].toLowerCase()) {
        	minus = true;
        }
    }
    if (mayus && minus){
		alert("La cadena contiene caracteres en mayuscula y minuscula");
    }else if (mayus) {
    	alert("La cadena solo contiene caracteres en mayuscula");
    }else if (minus) {
    	alert("La cadena solo contiene caracteres en minuscula");
    }
}

window.onload = init;