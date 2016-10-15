/*
 Implementa una funci n que tomando dos cadenas como entrada nos diga si la ó
segunda es una subcadena de la primera y cu l es la primera posici n a partir de á ó
la que esto ocurre.
*/

function init () {
	var elemento = document.getElementById("parrafo");

	var texto = document.createElement("input");
	texto.type = "text";
	texto.id = "texto";
	elemento.appendChild(texto);

	var texto2 = document.createElement("input");
	texto2.type = "text";
	texto2.id = "texto2";
	elemento.appendChild(texto2);

	var boton1 = document.createElement("input");
	boton1.type = "button";
	boton1.value = "Comprobar cadena";
	boton1.onclick = comprobarCadena;
	elemento.appendChild(boton1);
}

function comprobarCadena () {
	var texto = document.getElementById("texto");
	var str = texto.value.split("");
	var texto2 = document.getElementById("texto2");
	var str2 = texto2.value.split("");

	if (texto.value.indexOf(texto2.value) != -1) {
		alert("La cadena es una subcadena y comienza en la posicion: " + texto.value.indexOf(texto2.value));
	}else{
		alert("La cadena no es una subcadena ");
	}
}

window.onload = init;