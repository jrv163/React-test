

interface Pasajero {
    nombre: string;
    hijos?: string [];
}

const Pasajero1: Pasajero = {
     nombre: 'Fernando',

} 

const Pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Alfonso', 'Gabriel'] 
} 

function imprimeHijos (pasajero: Pasajero) {

    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(Pasajero1);