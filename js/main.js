
const botonPlus = document.querySelector("#btnInc");
const botonLess = document.querySelector("#btnDec");
const botonBuscar = document.querySelector("#btnBuscar");
const botonPlusm = document.querySelector("#btnIncm");
const botonLessm = document.querySelector("#btnDecm");



//contador personas adultas

//agregar personas
let contadorAdultos = 1;

function agregarAdultos (e) {
    
    if(contadorAdultos <= 5){
        e.preventDefault();
        updateAdultos(++contadorAdultos);
    } else{
        e.preventDefault();
        alert('pasajeros maximos');
    }

}



function updateAdultos(contadorAdultos) {
    document.querySelector("#numAdultos").innerHTML = contadorAdultos;
}


botonPlus.addEventListener("click", agregarAdultos);



//eliminar personas

function eliminarAdultos (e) {

    if(contadorAdultos >= 1){
        e.preventDefault();
        removeAdultos(--contadorAdultos);
    } else{
        e.preventDefault();
    }
}


function removeAdultos(contadorAdultos) {
    document.querySelector("#numAdultos").innerHTML = contadorAdultos;
}

botonLess.addEventListener("click", eliminarAdultos);



//contador menores

//agregar menores


let contadorMenores = 0;

function agregarMenores (e) {
    
    if(contadorMenores <= 5){
        e.preventDefault();
        updateMenores(++contadorMenores);
    } else{
        e.preventDefault();
        alert('pasajeros maximos');
    }

}



function updateMenores(contadorMenores) {
    document.querySelector("#numMenores").innerHTML = contadorMenores;
}


botonPlusm.addEventListener("click", agregarMenores);



//eliminar menores


function eliminarMenores (e) {

    if(contadorMenores >= 1){
        e.preventDefault();
        removeMenores(--contadorMenores);
    } else{
        e.preventDefault();
    }
}


function removeMenores(contadorMenores) {
    document.querySelector("#numMenores").innerHTML = contadorMenores;
}

botonLessm.addEventListener("click", eliminarMenores);

// fin de eventos botones para contar personas


//creacion de objetos de viajes y arrays respectivos

class ViajeTotalIdaVuelta {

    constructor(origen, destino, inicio, fin, contadorAdultos, contadorMenores){
        this.origen = origen;
        this.destino = destino;
        this.fechaInicio = inicio;
        this.fechaFin = fin;
        this.contadorAdultos = contadorAdultos;
        this.contadorMenores = contadorMenores;
    }

}


let viajeIdaYvuelta = []

const agregarViajeIdaVuelta = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let fechaInicio = document.getElementById("startTrip").value;
    let fechaFin = document.getElementById("endTrip").value;
    contadorAdultos; 
    contadorMenores;

    let viaje = new ViajeTotalIdaVuelta (origen, destino, fechaInicio, fechaFin, contadorAdultos, contadorMenores);
    viajeIdaYvuelta.push(viaje);


}



class ViajeTotalSoloIda {

    constructor(origen, destino, inicio, contadorAdultos, contadorMenores){
        this.origen = origen;
        this.destino = destino;
        this.fechaInicio = inicio;
        this.contadorAdultos = contadorAdultos;
        this.contadorMenores = contadorMenores;
    }

}


let viajeIda = []

const agregarViajeIda = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let fechaInicio = document.getElementById("startTrip").value;
    contadorAdultos; 
    contadorMenores;

    let viajeSoloIda = new ViajeTotalSoloIda (origen, destino, fechaInicio, contadorAdultos, contadorMenores);
    viajeIda.push(viajeSoloIda);

}


class ViajeTotalMultidestino {

    constructor(origen, destino, tercerDestino, inicio, fin, contadorAdultos, contadorMenores){
        this.origen = origen;
        this.destino = destino;
        this.destinoTercero = tercerDestino;
        this.fechaInicio = inicio;
        this.fechaFin = fin;
        this.contadorAdultos = contadorAdultos;
        this.contadorMenores = contadorMenores;
    }

}


let viajeMultidestino = []

const agregarViajeMultidestino = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let destinoTercero = prompt ('hacia donde quieres viajar despues?').toLocaleLowerCase();
    let fechaInicio = document.getElementById("startTrip").value;
    let fechaFin = document.getElementById("endTrip").value;
    contadorAdultos; 
    contadorMenores;

    let viajeSoloMultidestino = new ViajeTotalMultidestino (origen, destino, destinoTercero, fechaInicio, fechaFin, contadorAdultos, contadorMenores);
    viajeMultidestino.push(viajeSoloMultidestino);

}


//cambios visuales 

let inputViajes = document.querySelector("#allTrips");

let viajeUno = document.querySelector("#tt1");
let viajeDos = document.querySelector("#tt2");
let viajeTres = document.querySelector("#tt3");
let fechaFin = document.getElementById("endTrip");

let nodoTercerDestino = document.createElement("input");
let nodoCuartoDestino = document.createElement("input");


nodoTercerDestino.setAttribute("type", "text");
nodoTercerDestino.setAttribute("name", "origen");
nodoTercerDestino.setAttribute("placeholder", "Origen");

nodoCuartoDestino.setAttribute("type", "text");
nodoCuartoDestino.setAttribute("name", "destino");
nodoCuartoDestino.setAttribute("placeholder", "Destino");

function cambiosVisuales () {

    if (viajeUno.checked) {
        fechaFin.style.visibility = "visible";
        nodoTercerDestino.style.display = "none";
        nodoCuartoDestino.style.display = "none";
        inputViajes.style.display = "block";
    } else if (viajeDos.checked) {
        fechaFin.style.visibility = "hidden";
        nodoTercerDestino.style.display = "none";
        nodoCuartoDestino.style.display = "none";
        inputViajes.style.display = "block";
    } else {
        fechaFin.style.visibility = "visible";
        nodoTercerDestino.style.display = "block"; 
        nodoCuartoDestino.style.display = "block";
        inputViajes.style.display = "grid";
        inputViajes.style.setProperty("grid-template-columns", "repeat(2, 1fr)");
        inputViajes.style.setProperty("grid-gap", "3px");
        document.getElementById("allTrips").append(nodoTercerDestino);
        document.getElementById("allTrips").append(nodoCuartoDestino);
    } 

}



viajeUno.addEventListener('click', cambiosVisuales);
viajeDos.addEventListener('click', cambiosVisuales);
viajeTres.addEventListener('click', cambiosVisuales);




//selector de viaje

const selectViaje = document.querySelector('#selectTrip');

selectViaje.addEventListener('change', (e) => {

    if (viajeUno.checked) {
        alert (`elegiste el viaje ${e.target.value}`);
    } else if (viajeDos.checked) {
        alert (`elegiste el viaje ${e.target.value}`);
    } else {
        alert (`elegiste el viaje ${e.target.value}`);
        
    } 

})










//* la opcion buscar no se si iria dentro de cada cons abajo de los objetos o dentro de la funcion viajeUsuario


let buscarOrigen = viajeIdaYvuelta.filter(obj => {
    return obj.origen == origen;
}) 

let buscarDestino = viajeIdaYvuelta.filter(obj => {
    return obj.destino == destino;
})

let buscarTercerDestino = viajeMultidestino.filter(obj => {
    return obj.terDestino = destinoTercero;
})






//* SORT . se usaria una vez que la pagina de el resultado de las busquedas para que puedan buscar el vuelo mas barato primero, por ejemplo
//* este al ser un metodo destructivo tendria que hacer otro array con un map no?

viajeIdaYvuelta.sort((a,b) => {

    if(a.precio > b.precio) {
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }
    return 0;

})

viajeIda.sort((a,b) => {

    if(a.precio > b.precio) {
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }
    return 0;

})

viajeMultidestino.sort((a,b) => {

    if(a.precio > b.precio) {
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }
    return 0;

})



var registro = new Date();
console.log(registro);


