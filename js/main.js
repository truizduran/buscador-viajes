
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
        updateAdultos(++contadorAdultos);      //operador ++
    } else{
        e.preventDefault();
        Toastify({
            text: "pasajeros maximos",
            duration: 1500,
        }).showToast();
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
        removeAdultos(--contadorAdultos);      //operador --
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
        Toastify({
            text: "pasajeros maximos",
            duration: 1500,
        }).showToast();
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


let viajeIdaYvuelta = JSON.parse(localStorage.getItem("viajeIdaVuelta")) || [];   // operador logico OR

const agregarViajeIdaVuelta = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let fechaInicio = document.getElementById("startTrip").value;
    let fechaFin = document.getElementById("endTrip").value;
    contadorAdultos; 
    contadorMenores;

    let viaje = new ViajeTotalIdaVuelta (origen, destino, fechaInicio, fechaFin, contadorAdultos, contadorMenores);
    viajeIdaYvuelta.push(viaje);

    localStorage.setItem("viajeIdaVuelta",JSON.stringify(viajeIdaYvuelta));
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


let viajeIda = JSON.parse(localStorage.getItem("viajeIda")) || [];   //operador logico OR

const agregarViajeIda = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let fechaInicio = document.getElementById("startTrip").value;
    contadorAdultos; 
    contadorMenores;

    let viajeSoloIda = new ViajeTotalSoloIda (origen, destino, fechaInicio, contadorAdultos, contadorMenores);
    viajeIda.push(viajeSoloIda);

    localStorage.setItem("viajeIda",JSON.stringify(viajeIda));
}


class ViajeTotalMultidestino {

    constructor(origen, destino, destinoTercero, cuartoDestino, inicio, fin, contadorAdultos, contadorMenores){
        this.origen = origen;
        this.destino = destino;
        this.destinoTercero = destinoTercero;
        this.cuartoDestino = cuartoDestino;
        this.fechaInicio = inicio;
        this.fechaFin = fin;
        this.contadorAdultos = contadorAdultos;
        this.contadorMenores = contadorMenores;
    }

}


let viajeMultidestino = JSON.parse(localStorage.getItem("viajeMultidestino")) || [];   //operador logico OR

const agregarViajeMultidestino = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let destinoTercero = document.getElementById("destinationThird").value;
    let cuartoDestino = document.getElementById("destinationFourth").value;
    let fechaInicio = document.getElementById("startTrip").value;
    let fechaFin = document.getElementById("endTrip").value;
    contadorAdultos; 
    contadorMenores;

    let viajeSoloMultidestino = new ViajeTotalMultidestino (origen, destino, destinoTercero, cuartoDestino, fechaInicio, fechaFin, contadorAdultos, contadorMenores);
    viajeMultidestino.push(viajeSoloMultidestino);

    localStorage.setItem("viajeMultidestino",JSON.stringify(viajeMultidestino));
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
nodoTercerDestino.setAttribute("id", "destinationThird");

nodoCuartoDestino.setAttribute("type", "text");
nodoCuartoDestino.setAttribute("name", "destino");
nodoCuartoDestino.setAttribute("placeholder", "Destino");
nodoCuartoDestino.setAttribute("id", "destinationFourth");

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




//selector de viaje, evento buscar y evento reset 

const selectViaje = document.querySelector('#selectTrip');
const formularioFlight = document.querySelector('#flightForm')

selectViaje.addEventListener('change', (e) => {

    if (viajeUno.checked) {
        
        botonBuscar.onclick = (e) => { 
            e.preventDefault();
            agregarViajeIdaVuelta();
            resetPasajeros();
            MostrarFechaInicio();
            mostrarFechaFin();
            validacion();

        }
    } else if (viajeDos.checked ) {
        
        botonBuscar.onclick = (e) => { 
            e.preventDefault();
            agregarViajeIda();
            resetPasajeros();
            MostrarFechaInicio();
            mostrarFechaFin();
            validacion();
        }
    } else{
        
        botonBuscar.onclick = (e) => { 
            e.preventDefault();
            agregarViajeMultidestino();
            resetPasajeros();
            MostrarFechaInicio();
            mostrarFechaFin();
            validacion();
        }
    }

})

let origen = document.getElementById("originTrip");
let destino = document.getElementById("destinationTrip");

botonBuscar.onclick = (e) => { 
    
    e.preventDefault();
    agregarViajeIdaVuelta();
    //formularioFlight.reset();
    resetPasajeros();
    MostrarFechaInicio();
    mostrarFechaFin();
    validacion();

}


function resetPasajeros (){
    contadorAdultos = 1;
    contadorMenores = 0;

    updateAdultos(contadorAdultos);
    updateMenores(contadorMenores);
}


//validacion de input de viajes

//document.getElementById("originTrip").addEventListener('keyup', function(){
//    validacion();
//});

document.getElementById("destinationTrip").addEventListener('keyup', function(){
    validacion();
});


const validacion = () => {

    let origen = document.getElementById("originTrip");
    let destino = document.getElementById("destinationTrip");

    if (origen.value.length > 0 && destino.value.length > 0){
        destino.classList.remove("errorVer");
        origen.classList.remove("errorVer");
        destino.setAttribute("placeholder", "Destino");
        origen.setAttribute("placeholder", "Origen");
        
    } else {
        destino.classList.add("errorVer");
        origen.classList.add("errorVer");
        destino.setAttribute("placeholder", "Por favor, elija destino...");
        origen.setAttribute("placeholder", "Por favor, elija origen...");
    }

}










const search = document.getElementById("originTrip");
const matchList = document.getElementById("match-list");
const searchDestination = document.getElementById("destinationTrip");

//busqueda de airports.json y filtros

const searchAirports = async searchText => {
    const res = await fetch('../data/aeropuertos.json');
    const airports = await res.json();

    let matches = airports.filter(airport => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return airport.properties.ciudad.match(regex) || airport.properties.iata.match(regex);
        
    });

    if (searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }

    outputHtml(matches);
    
};

//mostrar resultados en html

const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match =>  `
            <li class="airList"> ${match.properties.nombre2}, ${match.properties.iata} <span> </span> </li>
        `).join('');
    
        matchList.innerHTML = html

        
    }

    
};



search.addEventListener('input', () => searchAirports(search.value));
searchDestination.addEventListener('input', () => searchAirports(searchDestination.value));




// organizando fechas de calendario utilizando libreria luxon


const DateTime = luxon.DateTime;

const dt = DateTime.now();
let fechaInicio = document.getElementById("startTrip");

function MostrarFechaInicio () {

    let mes = DateTime.now().toFormat('MM');
    let dia = DateTime.now().toFormat('dd');
    let anio = DateTime.now().toFormat('yyyy');
    let anioMax = DateTime.now().plus({ years: 1 }).toFormat('yyyy');
    let diaN = DateTime.now().toFormat('dd');
    let mesMax = DateTime.now().minus({ months: 2 }).toFormat('MM');


    hoy = anio+"-"+mes+"-"+dia;
    fechaInicio.value=hoy;
    fechaInicio.setAttribute("min", hoy);
    oneYear= anioMax+"-"+mesMax+"-"+diaN;
    fechaInicio.setAttribute("max", oneYear);
}

MostrarFechaInicio();


function mostrarFechaFin () {

    let mes = DateTime.now().toFormat('MM');
    let mesT = DateTime.now().plus({ months: 1 }).toFormat('MM');
    let dia = DateTime.now().toFormat('dd');
    let anio = DateTime.now().toFormat('yyyy');
    let anioMax = DateTime.now().plus({ years: 1 }).toFormat('yyyy');
    let diaN = DateTime.now().toFormat('dd');
    let mesMax = DateTime.now().minus({ months: 2 }).toFormat('MM');

    oneSemana = anio+"-"+mesT+"-"+dia;
    oneYear= anioMax+"-"+mesMax+"-"+diaN;
    hoy = anio+"-"+mes+"-"+dia;
    
    fechaFin.value=oneSemana;
    fechaFin.setAttribute("max", oneYear);
    fechaFin.setAttribute("min", hoy);
}

mostrarFechaFin();

//enviar formulario

function enviar_formulario(){
    document.formularioFinal.submit()
}