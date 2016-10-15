/*
Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles.*/

function init () {
	var elemento = document.getElementById("parrafo");
	var img = document.createElement("img");
	img.setAttribute("height", "768");
	img.setAttribute("width", "1024");
	elemento.appendChild(img);

	var num = Math.floor(Math.random() * 3);
	img.src = imagen(num);
}

function imagen (num) {
	var url;
	switch (num) {
		case 0:
			url = 'images/imagen1.jpg';
			break;
		case 1:
			url = 'images/imagen2.jpg';
			break;
		case 2:
			url = 'images/imagen3.jpg';
			break;
		default:
			url = 'images/imagen1.jpg';
			break;
	}
	return url;
}

window.onload = init;
