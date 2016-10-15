/*
Crea una p gina en la que se muestre: á
• Un n mero aleatorio entre 0 y 1. ú
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un n aleatorio entre esos dos º
valores.*/

var elemento = document.getElementById("parrafo");

elemento.innerHTML = Math.floor(Math.random() * 2) + ", " + Math.floor(Math.random() * 100 + 100);

var numMin = parseFloat(prompt("Introduce un numero maximo: ", ""));
var numMax = parseFloat(prompt("Introduce un numero minimo: ", ""));

elemento.innerHTML = elemento.innerHTML + ", " + Math.floor(Math.random() * (numMax - numMin) + numMin);