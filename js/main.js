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
function addTitulo(){
 	form.style.display="none"; 
	var titulo = document.createElement("div");
	titulo.innerText = entrada.value;
	tarjeta.appendChild(titulo);
	span.parentElement.insertBefore(titulo, span.parentElement.childNodes[0]);
	entrada.value = "";

	var link = document.createElement("a");
	link.setAttribute("href","#")
	var txt = document.createTextNode("Añadir una tarjeta..."); 
	link.appendChild(txt);
	span.parentElement.insertBefore(link, span.parentElement.childNodes[1]);
	link.addEventListener("click", addTextArea);
}

