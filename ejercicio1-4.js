/*
Utilizando el programa anterior haz que al llegar a 0 se cargue la p gina á
de google, para ello puedes utilizar el objeto location. */

var cont = 60;
var elemento = document.getElementById("parrafo");

function contador () {
	cont--;
	if (cont != 0){
		elemento.innerHTML = ("Quedan " + cont + " segundos");
		setTimeout(contador,1000);
	}else{
		window.location.href = 'http://www.google.com';
	}
}
setTimeout(contador,1000);