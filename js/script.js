window.onload = function() {
    /*colorSegunSegundoParImpar()*/
    colorSegunHora()
    dondeEstoy()
}

function dondeEstoy() {
    let l = localStorage.getItem("estoyEn")
    if (l != null && l != undefined){
        document.getElementById("nav"+capitalize(l.slice(5).toLowerCase())).classList.add("linkActivo")
        cargar(l.slice(5).toLowerCase()) 
    }else{
        cargar('inicio') 
        document.getElementById("nav"+capitalize("inicio")).classList.add("linkActivo")
    }
}

function getRandomColor() {
    var num=(Math.floor(Math.random()*4)*4).toString(16);
    var letters = ['0','F',num];
    var color = '#';
    
    for (var i = 0; i < 3; i++ ) {
        let pos=Math.floor(Math.random() * letters.length);
        color += letters[pos];
        letters.splice(pos,1);
    }

    return color;
} 

function colorSegunSegundoParImpar() {
    var hora = new Date()
    segundos = hora.getSeconds()
    if(segundos % 2 == 0) { 
        document.getElementById('fondoBody').classList.add("bg-secondary","text-light") 
    } else { 
        document.getElementById('fondoBody').style.backgroundColor=getRandomColor() 
    }
}

function colorSegunHora() {
    /* var maniana = new Date(reloj.getFullYear,reloj.getMonth,reloj.getDay,7,0,0); 
    var mediodia = new Date(reloj.getFullYear,reloj.getMonth,reloj.getDay,12,0,0); 
    var tarde = new Date(reloj.getFullYear,reloj.getMonth,reloj.getDay,17,0,0);
    var noche = new Date(reloj.getFullYear,reloj.getMonth,reloj.getDay,21,0,0); 
    */
    var hora = new Date()
    var reloj = hora.getHours();

    if(reloj >= 6 && reloj < 12 ) { 
        /*mañana*/
        document.getElementById('fondoBody').style.backgroundColor="white"
    } else if(reloj >= 11 && reloj < 16) { 
        /*Mediodia*/
        document.getElementById('fondoBody').style.backgroundColor="black"
    } else if(reloj >= 17 && reloj <=20 ) { 
        /*tarde*/
        document.getElementById('fondoBody').style.backgroundColor="blue"
    } else if(reloj < 7 || reloj > 20) { 
        /*noche*/
        document.getElementById('fondoBody').style.backgroundColor="purple"
    }
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function cargar(id){
    borrarDarEstilos(id)
    borrarDarActivos(id)
    localStorage.setItem("estoyEn", "estoy"+capitalize(id))
}

function borrarDarEstilos(id){
    document.querySelectorAll ('nav ul li span, .nav-link').forEach(elementoMenu => {
        console.log(elementoMenu.id.slice(3).toLowerCase())
        document.getElementById(elementoMenu.id.slice(3).toLowerCase()).style.display = "none"
    });
    document.getElementById(id).style.display = ""
}

function borrarDarActivos(id) {
    var todasClases = document.getElementsByClassName("linkActivo")
    for (let soyUnaClase of todasClases) {
        document.getElementById(soyUnaClase.id).classList.remove("linkActivo")
    }
    document.getElementById("nav"+capitalize(id)).classList.add("linkActivo")
}