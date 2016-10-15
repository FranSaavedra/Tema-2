/*
Realiza una p gina que cree un objeto de tipo Date y muestre en la á
p gina la siguiente informaci n (cada una en una l nea): á ó í
• El año actual
• El mes actual
• El dia actual
• La hora actual
• Los minutos actuales
• Los segundos actuales*/

var fecha = new Date();
document.write("Year: " + fecha.getFullYear() + "<br/>");
document.write("Mes: " + fecha.getMonth() + "<br/>");
document.write("Dia: " + fecha.getDate() + "<br/>");
document.write("Horas: " + fecha.getHours() + "<br/>");
document.write("Minutos: " + fecha.getMinutes() + "<br/>");
document.write("Segundos: " + fecha.getSeconds() + "<br/>");