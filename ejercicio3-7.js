/*
Desarrolla una funci n que tomando como entrada una cadena de texto nos ó
devuelva si es o no un pal ndromo. */

function init () {
	var elemento = document.getElementById("parrafo");

	var texto = document.createElement("input");
	texto.type = "text";
	texto.id = "texto";
	elemento.appendChild(texto);

	var boton1 = document.createElement("input");
	boton1.type = "button";
	boton1.value = "Comprobar palindromo";
	boton1.onclick = esPalindromo;
	elemento.appendChild(boton1);
}

function esPalindromo () {
	var texto = document.getElementById("texto");

	if (texto.value == texto.value.split('').reverse().join('')) {
		alert("La cadena es un palindromo");
	}else{
		alert("La cadena no es un palindromo");
	}
}

window.onload = init;