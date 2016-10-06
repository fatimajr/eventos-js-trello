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
	link.addEventListener("click", function() {
	    addTextArea(this);
	});
}
function addTarjeta(){
	var newTarjeta = document.createElement("div");
	var contenedor = document.getElementById("contenedor");
	contenedor.appendChild(newTarjeta);
	newTarjeta.classList.add("newtarjeta");
	newTarjeta.appendChild(span);
    span.style.display = "block";
    newTarjeta.insertBefore(form, newTarjeta.childNodes[0]);
    newTarjeta.addEventListener("click",addNewList);
}
function addNewList(){
	form.style.display="block";
	span.style.display="none";
}
function addTextArea(link) { 
    link.style.display = "none"; 
    var form2 = document.createElement("form"); 
    link.parentElement.appendChild(form2); 
    var textArea = document.createElement("textarea"); 
    form2.insertBefore(textArea, form2.childNodes[0]); 
    textArea.classList.add("textarea"); 
    var boton2 = document.createElement("button"); 
    form2.insertBefore(boton2, form2.childNodes[1]); 
    var botonName = document.createTextNode("Añadir"); 
    boton2.appendChild(botonName); 
    boton2.classList.add("boton2"); 
    boton2.setAttribute("type", "submit");
    textArea.focus();  
	boton2.addEventListener("click", function(e){
   		link.style.display="block";
		e.preventDefault();
		form2.classList.add("none");
		var newTitulo = document.createElement("div");
		newTitulo.innerText = textArea.value;
		link.parentElement.appendChild(newTitulo);
		link.parentElement.insertBefore(newTitulo, link.parentElement.childNodes[1]);
		newTitulo.classList.add("newtitulo");
	});    
}