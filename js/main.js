window.addEventListener("load", cargarPagina);

function cargarPagina(){
	var tarjeta = document.getElementById("tarjeta");
	tarjeta.addEventListener("click", addLista);
	form.classList.add("none");
	var boton = document.getElementById("boton1");
	boton1.addEventListener("click", function(e) {
	    e.preventDefault();
	    addTitulo();
	    addTarjeta();
	});
}
function addLista(){
	var form = document.getElementById("form");
	form.classList.remove("none");
	var span = document.getElementById("span");
	span.classList.add("none");
	var entrada = document.getElementById("entrada");
}

