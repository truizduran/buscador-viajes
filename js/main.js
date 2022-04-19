




class ViajeTotalIdaVuelta {

    constructor(origen, destino, inicio, fin, adulto, menor){
        this.origen = origen;
        this.destino = destino;
        this.fechaInicio = inicio;
        this.fechaFin = fin;
        this.adultos = adulto;
        this.menores = menor;
    }

}


let viajeIdaYvuelta = []

const agregarViajeIdaVuelta = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let fechaInicio = document.getElementById("startTrip").value;
    let fechaFin = document.getElementById("endTrip").value;
    let adultos = parseInt(document.getElementById("numAdultos")).value;
    let menores = parseInt(document.getElementById("numMenores")).value;

    let viaje = new ViajeTotalIdaVuelta (origen, destino, fechaInicio, fechaFin, adultos, menores);
    viajeIdaYvuelta.push(viaje);

}


class ViajeTotalSoloIda {

    constructor(origen, destino, inicio, adulto, menor){
        this.origen = origen;
        this.destino = destino;
        this.fechaInicio = inicio;
        this.adultos = adulto;
        this.menores = menor;
    }

}


let viajeIda = []

const agregarViajeIda = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let fechaInicio = document.getElementById("startTrip").value;
    let adultos = parseInt(document.getElementById("numAdultos")).value;
    let menores = parseInt(document.getElementById("numMenores")).value;

    let viajeSoloIda = new ViajeTotalSoloIda (origen, destino, fechaInicio, adultos, menores);
    viajeIda.push(viajeSoloIda);

}


class ViajeTotalMultidestino {

    constructor(origen, destino, tercerDestino, inicio, fin, adulto, menor){
        this.origen = origen;
        this.destino = destino;
        this.destinoTercero = tercerDestino;
        this.fechaInicio = inicio;
        this.fechaFin = fin;
        this.adultos = adulto;
        this.menores = menor;
    }

}


let viajeMultidestino = []

const agregarViajeMultidestino = () => {

    let origen = document.getElementById("originTrip").value;
    let destino = document.getElementById("destinationTrip").value;
    let destinoTercero = prompt ('hacia donde quieres viajar despues?').toLocaleLowerCase();
    let fechaInicio = document.getElementById("startTrip").value;
    let fechaFin = document.getElementById("endTrip").value;
    let adultos = parseInt(document.getElementById("numAdultos")).value;
    let menores = parseInt(document.getElementById("numMenores")).value;

    let viajeSoloMultidestino = new ViajeTotalMultidestino (origen, destino, destinoTercero, fechaInicio, fechaFin, adultos, menores);
    viajeMultidestino.push(viajeSoloMultidestino);

}






function viajeUsuario(){

    let tipoViaje = prompt('que tipo de viaje es: ida y vuelta, solo ida o multidestino', 'ida y vuelta');

    if (tipoViaje == 'ida y vuelta'){

        agregarViajeIdaVuelta();
        return agregarViajeIdaVuelta;
        


    } else if (tipoViaje == 'solo ida'){

        agregarViajeIda();
        return agregarViajeIda;

    } else if (tipoViaje == 'multidestino') {

        agregarViajeMultidestino();
        return agregarViajeMultidestino;

    } else {

        alert('gracias por venir');
        
    }





    
}





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


