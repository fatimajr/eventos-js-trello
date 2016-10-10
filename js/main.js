window.addEventListener("load", cargarPagina);
var contador = 0; 
var tarjeta = document.getElementById("tarjeta");
var form = document.getElementById("form");
var span = document.getElementById("span");
var lista2 = document.getElementById("lista");

function cargarPagina(){
	tarjeta.addEventListener("click", addLista);
	var boton = document.getElementById("boton1");
	boton.addEventListener("click",add);
	lista2.addEventListener("drop", soltar);
	lista2.addEventListener("dragover", arrastrarSobre);
};
function add(e) {
    e.preventDefault();
    addTitulo(this);
    addTarjeta();
};
function addLista(){
	form.classList.remove("none");
	span.classList.add("none");
};
function addTitulo(boton){
 	form.classList.add("none"); 
	var titulo = document.createElement("div");
	var entrada = document.getElementById("entrada");
	titulo.innerText = entrada.value;
	var lista = boton.parentElement.parentElement;
	lista.insertBefore(titulo, lista.childNodes[0]);
	entrada.value = "";

	var link = document.createElement("a");
	link.setAttribute("href","#");
	var txt = document.createTextNode("Añadir una tarjeta..."); 
	link.appendChild(txt);
	lista.insertBefore(link, lista.childNodes[1]);
	// link.addEventListener("click", addTextArea); *
	link.addEventListener("click", function() {
	    addTextArea(this);
	});
};
function addTarjeta(){
	var newTarjeta = document.createElement("div");
	var contenedor = document.getElementById("contenedor");
	contenedor.appendChild(newTarjeta);
	newTarjeta.classList.add("newtarjeta");
	newTarjeta.appendChild(tarjeta);
    span.classList.remove("none");
    newTarjeta.appendChild(form);
	newTarjeta.addEventListener("dragover", arrastrarSobre);
	newTarjeta.addEventListener("drop", soltar);
	newTarjeta.addEventListener("dragleave", dejaArrastrar);
	newTarjeta.addEventListener("dragend", terminaArrastrar);
};
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
	boton2.addEventListener("click", add2);
};
function add2(e) {
    e.preventDefault();
    nuevoTitulo(this);
};
function nuevoTitulo(boton2){		
	var form2 = boton2.parentElement;	
	var link = form2.previousElementSibling	
	link.style.display="block";		
	var newTitulo = document.createElement("div");
	var textArea = boton2.previousElementSibling;
	newTitulo.innerText = textArea.value;
	var nroHijos = link.parentElement.children.length;
	link.parentElement.insertBefore(newTitulo, link.parentElement.childNodes[nroHijos-2]);
	newTitulo.classList.add("newtitulo");
	form2.remove();
	newTitulo.id = "id" + contador;
	contador+=1;
	newTitulo.setAttribute("draggable", "true");
	newTitulo.addEventListener("dragstart", empiezaArrastrar);
	
}
function empiezaArrastrar(e) {
	e.dataTransfer.setData("text", this.id);
	// this.style.opacity = "0.4";
	this.classList.add("animated","bounce");
}

function entraArrastrar(e) {
	this.classList.remove("animated","bounce");
}

function dejaArrastrar(e) {
	this.classList.remove("animated","bounce");
}

function arrastrarSobre(e) {
	e.preventDefault();
	this.classList.add("animated","flash");
}

function soltar(e) {
	var elementoArrastrado = document.getElementById(e.dataTransfer.getData("text"));
	this.insertBefore(elementoArrastrado ,  this.children[1]);	
	// var temporal = this.innerHTML;
	// e.target.innerHTML = elementoArrastrado.innerHTML;
	// elementoArrastrado.innerHTML = temporal;
	this.classList.remove("animated","bounce");
	// this.classList.remove("animated","flash");
}

function terminaArrastrar(e) {
	this.style.opacity = null;
	this.classList.remove("animated","bounce");
}window.addEventListener("load", cargarPagina);
var contador = 0; 
var tarjeta = document.getElementById("tarjeta");
var form = document.getElementById("form");
var span = document.getElementById("span");
var lista2 = document.getElementById("lista");

function cargarPagina(){
	tarjeta.addEventListener("click", addLista);
	var boton = document.getElementById("boton1");
	boton.addEventListener("click",add);
	lista2.addEventListener("drop", soltar);
	lista2.addEventListener("dragover", arrastrarSobre);
};
function add(e) {
    e.preventDefault();
    addTitulo(this);
    addTarjeta();
};
function addLista(){
	form.classList.remove("none");
	span.classList.add("none");
};
function addTitulo(boton){
 	form.classList.add("none"); 
	var titulo = document.createElement("div");
	var entrada = document.getElementById("entrada");
	titulo.innerText = entrada.value;
	var lista = boton.parentElement.parentElement;
	lista.insertBefore(titulo, lista.childNodes[0]);
	entrada.value = "";

	var link = document.createElement("a");
	link.setAttribute("href","#");
	var txt = document.createTextNode("Añadir una tarjeta..."); 
	link.appendChild(txt);
	lista.insertBefore(link, lista.childNodes[1]);
	// link.addEventListener("click", addTextArea); *
	link.addEventListener("click", function() {
	    addTextArea(this);
	});
};
function addTarjeta(){
	var newTarjeta = document.createElement("div");
	var contenedor = document.getElementById("contenedor");
	contenedor.appendChild(newTarjeta);
	newTarjeta.classList.add("newtarjeta");
	newTarjeta.appendChild(tarjeta);
    span.classList.remove("none");
    newTarjeta.appendChild(form);
	newTarjeta.addEventListener("dragover", arrastrarSobre);
	newTarjeta.addEventListener("drop", soltar);
	newTarjeta.addEventListener("dragleave", dejaArrastrar);
	newTarjeta.addEventListener("dragend", terminaArrastrar);
};
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
	boton2.addEventListener("click", add2);
};
function add2(e) {
    e.preventDefault();
    nuevoTitulo(this);
};
function nuevoTitulo(boton2){		
	var form2 = boton2.parentElement;	
	var link = form2.previousElementSibling	
	link.style.display="block";		
	var newTitulo = document.createElement("div");
	var textArea = boton2.previousElementSibling;
	newTitulo.innerText = textArea.value;
	var nroHijos = link.parentElement.children.length;
	link.parentElement.insertBefore(newTitulo, link.parentElement.childNodes[nroHijos-2]);
	newTitulo.classList.add("newtitulo");
	form2.remove();
	newTitulo.id = "id" + contador;
	contador+=1;
	newTitulo.setAttribute("draggable", "true");
	newTitulo.addEventListener("dragstart", empiezaArrastrar);
	
}
function empiezaArrastrar(e) {
	e.dataTransfer.setData("text", this.id);
	this.classList.add("arrastrar");
	this.classList.add("animated","bounce");
}

function entraArrastrar(e) {
	this.classList.add("animated","bounce");
}

function dejaArrastrar(e) {
	this.classList.add("animated","bounce");
}

function arrastrarSobre(e) {
	e.preventDefault();
	this.classList.add("animated","flash");
}

function soltar(e) {
	var elementoArrastrado = document.getElementById(e.dataTransfer.getData("text"));
	this.insertBefore(elementoArrastrado, this.children[1]);	
	this.children[1].classList.remove("arrastrar");
	this.classList.add("animated","bounce");
}

function terminaArrastrar(e) {
	this.style.opacity = null;
	this.classList.remove("animated","bounce");
}