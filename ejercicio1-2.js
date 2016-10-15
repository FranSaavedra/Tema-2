/*
 Crea una p gina web en la que se muestre el resultado de cada uno de á
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy" í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
d. Sumar 2 a os a la variable "fecha85" ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes*/
var fechaHoy = new Date();
var fecha85 = new Date();
fecha85 = sumaDias(fechaHoy,85);
var fecha187 = new Date();
fecha187 = sumaDias(fechaHoy,-187);

document.write("Fecha hoy: " + fechaHoy.getDate() + "/" + fechaHoy.getMonth() + "/" + fechaHoy.getFullYear() + "<br/>");
document.write("Fecha 85: " + fecha85.getDate() + "/" + fecha85.getMonth() + "/" + fecha85.getFullYear() + "<br/>");
document.write("Fecha 187: " + fecha187.getDate() + "/" + fecha187.getMonth() + "/" + fecha187.getFullYear() + "<br/>");

function sumaDias (fecha,dias) {
	var nuevaFecha = new Date(fecha);
	nuevaFecha.setDate(nuevaFecha.getDate() + dias);
	return nuevaFecha;
}