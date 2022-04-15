
/*
let idaYvuelta = confirm('ida y vuelta?');
let soloIda = confirm ('solo ida?');
let multiDestino = confirm ('es mas de un destino?');
let origen = prompt ('desde donde quieres viajar?').toLocaleLowerCase();
let destino = prompt ('hacia donde quieres viajar?').toLocaleLowerCase();
let destinoTercero = prompt ('hacia donde quieres viajar despues?').toLocaleLowerCase();
let fechaInicio = parseInt (prompt('que dia quieres viajar?'));
let fechaFin = parseInt (prompt('que dia quieres volver?'));
let adultos = parseInt (prompt('cuantos adultos viajan?'));
let menores = parseInt (prompt ('cuantos menores de 16 años viajan?'));
let buscar = confirm ('quieres buscar el vuelo?'); 
*/


/*
let origenUsuario = prompt ('desde donde quieres viajar?').toLocaleLowerCase();
let destinoUsuario = prompt ('hacia donde quieres viajar?').toLocaleLowerCase();
let fechaInicioUsuario = parseInt (prompt('que dia quieres viajar?'));
let FechaFinUsuario = parseInt (prompt('que dia quieres volver?'));
let adultosUsuario = parseInt (prompt('cuantos adultos viajan?'));
let menoresUsuario = parseInt (prompt ('cuantos menores de 16 años viajan?'));
*/

/* 
let viajeIdaYvuelta  = `tu viaje desde ${origen} a ${destino} con salida el dia ${fechaInicio}, hasta el dia ${fechaFin} con ${adultos} adultos y ${menores} menores, esta listo para buscar.`;
return viajeIdaYvuelta;
*/




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

    let origen = prompt ('desde donde quieres viajar?').toLocaleLowerCase();
    let destino = prompt ('hacia donde quieres viajar?').toLocaleLowerCase();
    let fechaInicio = parseInt (prompt('que dia quieres viajar?'));
    let fechaFin = parseInt (prompt('que dia quieres volver?'));
    let adultos = parseInt (prompt('cuantos adultos viajan?'));
    let menores = parseInt (prompt ('cuantos menores de 16 años viajan?'));

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

    let origen = prompt ('desde donde quieres viajar?').toLocaleLowerCase();
    let destino = prompt ('hacia donde quieres viajar?').toLocaleLowerCase();
    let fechaInicio = parseInt (prompt('que dia quieres viajar?'));
    let adultos = parseInt (prompt('cuantos adultos viajan?'));
    let menores = parseInt (prompt ('cuantos menores de 16 años viajan?'));

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

    let origen = prompt ('desde donde quieres viajar?').toLocaleLowerCase();
    let destino = prompt ('hacia donde quieres viajar?').toLocaleLowerCase();
    let destinoTercero = prompt ('hacia donde quieres viajar despues?').toLocaleLowerCase();
    let fechaInicio = parseInt (prompt('que dia quieres viajar?'));
    let fechaFin = parseInt (prompt('que dia quieres volver?'));
    let adultos = parseInt (prompt('cuantos adultos viajan?'));
    let menores = parseInt (prompt ('cuantos menores de 16 años viajan?'));

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

let buscarOrigenIda = viajeIda.filter(obj => {
    return obj.origen == origen;
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