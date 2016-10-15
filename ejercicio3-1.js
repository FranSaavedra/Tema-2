/*
 Crea las siguientes funciones y ll malas desde una p gina XHTML para mostrar á á
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra m s larga en ella contenida á
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i. é ú
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que s lo aparece en may scula la primera letra y el resto en ó ú
min scula*/

function init () {
	var elemento = document.getElementById("parrafo");

	var texto = document.createElement("input");
	texto.type = "text";
	texto.id = "texto";
	elemento.appendChild(texto);

	var boton1 = document.createElement("input");
	boton1.type = "button";
	boton1.value = "Invertir cadena";
	boton1.onclick = invierteCadena;
	elemento.appendChild(boton1);

	var boton2 = document.createElement("input");
	boton2.type = "button";
	boton2.value = "Invertir palabras";
	boton2.onclick = inviertePalabras;
	elemento.appendChild(boton2);

	var boton3 = document.createElement("input");
	boton3.type = "button";
	boton3.value = "Encontrar palabra mas larga";
	boton3.onclick = encuentraPalabraMasLarga;
	elemento.appendChild(boton3);

	var boton4 = document.createElement("input");
	boton4.type = "button";
	boton4.value = "Filtrar palabras mas largas";
	boton4.onclick = filtraPalabrasMasLargas;
	elemento.appendChild(boton4);

	var boton5 = document.createElement("input");
	boton5.type = "button";
	boton5.value = "Cadena bien formada";
	boton5.onclick = cadenaBienFormada;
	elemento.appendChild(boton5);
}

function invierteCadena () {
	var texto = document.getElementById("texto");
	//split divide la cadena en palabras separadas por "". join vuelve a unir la cadena una vez invertida
	texto.value = texto.value.split("").reverse().join("");
}
function inviertePalabras () {
	var texto = document.getElementById("texto");
	texto.value = texto.value.split("").reverse().join("").split(" ").reverse().join(" ");
}
function encuentraPalabraMasLarga () {
	var texto = document.getElementById("texto");
	var str = texto.value.split(" ");
	var long = 0;
	var palabra = null;

	for (var i = 0; i < str.length; i++) {//divido la cadena y la recorro comparando el tamaño de cada palabra
        if (long < str[i].length) {
            long = str[i].length;
            palabra = str[i];
        }
    }
    var texto = document.getElementById("texto");
	texto.value = palabra;
}
function filtraPalabrasMasLargas () {
	var texto = document.getElementById("texto");
	var str = texto.value.split(" ");
	var cont = 0;

	for (var i = 0; i < str.length; i++) {//divido la cadena y la recorro comparando el tamaño de cada palabra
        if (str[i].length >= 5) {
            cont ++;
        }
    }
    var texto = document.getElementById("texto");
	texto.value = cont;
}
function cadenaBienFormada () {
	//Cojo el primer caracter y lo pongo en mayuscula. Añado toda la cadena excepto el primer caracter
	var texto = document.getElementById("texto");
	texto.value = texto.value.charAt(0).toUpperCase() + texto.value.slice(1);
}
window.onload = init;