let nav = document.getElementById('mecSoc');

function menu(){
    
    let Desplazamiento = window.pageYOffset;
    
    if (Desplazamiento >= 40) {

        nav.classList.remove('bg-dark');
        nav.className = ('bg-dark1');
        nav.style.transition = '1s';
        
    }else{

        nav.classList.remove('bg-dark1');
        nav.className = ('bg-dark');
        nav.style.transition = '1s';

    }
}

window.addEventListener('load', function(){
    menu();    

});

window.addEventListener('scroll', function(){
    menu();
});

//codigo de cambio de color de fondo//

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

function copiarAlPortapapeles(hexadecimal) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById("text").innerHTML = "Copiado!";
}
//codigo  del google maps pirata xD//

function iniciarMap(){
    var coord = {lat:-33.4488897 ,lng: -70.6692655};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}