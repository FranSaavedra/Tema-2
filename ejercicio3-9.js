/*
Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) como se ve en la figura:
Entrada: HOLA
Salida:
H O L A
O L
L O
A L O H */

var palabra = prompt("Introduce una palabra: ", "");
var anchoAlto = 50;
document.write("<table border = 0 cellspacing = 2 bgcolor = 'black' width = 200>");
for (var i = 0; i < palabra.length; i++) {
	document.write("<tr bgcolor = 'white' height = " + anchoAlto + ">");
	for (var j = 0; j < palabra.length; j++) {
		if (palabra[i] != palabra[j] ) {
			document.write("<td width = " + anchoAlto + " >" + palabra[i] + "</td>");
		}else{
			document.write("<td width = " + anchoAlto + " >" + palabra[j] + "</td>");
		}
		
	}
	document.write("</tr>");
}
document.write("</table>");
