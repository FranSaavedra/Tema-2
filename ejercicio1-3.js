/*
Utilizando setTimeout() creo un contador hac a atr s de 60 segundos*/

var cont = 60;
var elemento = document.getElementById("parrafo");

function contador () {
	cont--;
	if (cont != 0){
		elemento.innerHTML = ("Quedan " + cont + " segundos");
		setTimeout(contador,1000);
	}
}
setTimeout(contador,1000);