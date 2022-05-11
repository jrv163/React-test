
function sumar (a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
}

function multiplicar (numero: number, otroNumero?: number, base:number = 5): number {
    return numero * base;
}

//const resultado = multiplicar(10, 2, 100);
//console.log(resultado);

interface personajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;

}


function curar(personaje: personajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Strider',
    pv: 20,
    mostrarHp() {
        console.log('Puntos de vida', this.pv);
    }
}

curar ( nuevoPersonaje, 50);
nuevoPersonaje.mostrarHp();






