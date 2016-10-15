/*
You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16*/

function init () {
	var elemento = document.getElementById("parrafo");

	var texto = document.createElement("input");
	texto.type = "text";
	texto.id = "texto";
	elemento.appendChild(texto);

	var boton1 = document.createElement("input");
	boton1.type = "button";
	boton1.value = "Comprobar tarjeta";
	boton1.onclick = validateCreditCard;
	elemento.appendChild(boton1);
}

function validateCreditCard () {
	var texto = document.getElementById("texto");
	var str = texto.value.slice(0, 4) + texto.value.slice(5, 9) + texto.value.slice(10, 14) + texto.value.slice(15, 19);
	var numDif = false;
	var suma = 0;
	var par = false;

	if (str.length == 16 && !isNaN(str)) {
		str = str.toString();
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) != str.charAt(0)) {
				numDif = true;
			}
			suma = parseInt(suma) + parseInt(str.charAt(i));
			if (i == str.length - 1) {
				par = esPar(parseInt(str.charAt(i)));
			}
			
		}
	}
	if (numDif && suma >= 16 && par) {
		alert("El numero es valido");
	}else{
		alert("El numero no es valido");
	}
	
}

function esPar (num) {
	var par = false;
	if (num % 2 == 0) {
		par = true;
	}
	return par;
}

window.onload = init;