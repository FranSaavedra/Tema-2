/*
Crea una web para resolver ecuaciones de segundo grado. Deber pedir por á
tanto los coeficientes y mostrar las soluciones posibles.*/

var elemento = document.getElementById("parrafo");

var a = parseFloat(prompt("Introduce un el valor de a:  ", ""));
var b = parseFloat(prompt("Introduce un el valor de b:  ", ""));
var c = parseFloat(prompt("Introduce un el valor de c:  ", ""));

function resolverEcuacion (a,b,c) {
	var resRaiz = Math.pow(b,2) - 4 * a * c;//Math.pow hace la raiz cuadrada de b y le resta el calculo de - 4 * a * c
	var resPos = (-b + Math.sqrt(resRaiz)) / (2 * a);
	var resNeg = (-b - Math.sqrt(resRaiz)) / (2 * a);
	elemento.innerHTML = "Resultado 1: " + resPos + ". Resultado 2: " + resNeg;
}
resolverEcuacion(a,b,c);