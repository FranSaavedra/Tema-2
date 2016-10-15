/*
Crea una web que genere una tabla con dos columnas. En la primera un
n mero ascendente y en la otra el valor de su seno.*/

var anchoAlto = 50;
document.write("<table border = 0 cellspacing = 2 bgcolor = 'black' width = 200>");
for (var i = 0; i < 10; i++) {
	document.write("<tr bgcolor = 'white' height = " + anchoAlto + ">");
	for (var j = 0; j < 2; j++) {
		if (j == 0 ) {
			document.write("<td width = " + anchoAlto + " >" + i + "</td>");
		}else{
			document.write("<td width = " + anchoAlto + " >" + Math.sin(i) + "</td>");
		}
		
	}
	document.write("</tr>");
}
document.write("</table>");
