/*
Usando el objeto Date, sus m todos getHours, getMinutes y GetSeconds y é
el m todo setTimeout() crea un reloj que se actualice cada segundo.*/

var elemento = document.getElementById("parrafo");

function reloj () {
	var actual = new Date();
	elemento.innerHTML = ("Son las " + actual.getHours() + " : " + actual.getMinutes() + " : " + actual.getSeconds());
	setTimeout(reloj,1000);
}
setTimeout(reloj,1000);


/*
var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
*/