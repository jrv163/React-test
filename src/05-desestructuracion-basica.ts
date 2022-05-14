
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
     autor: string;
     anio: number;
}

const reproductor: Reproductor = {
   volumen: 90,
   segundo: 36,
   cancion: 'mess',
   detalles: {
    autor: 'Ed Sheeran',
    anio: 2015
 }
}

const { volumen, segundo, cancion, detalles } = reproductor
const { autor, anio } = detalles;


//console.log('El volumen de la cancion es ', volumen );
//console.log('El segundo de la cancion es ', segundo );
//console.log('La cancion actual es ', cancion);
//console.log('El autor de la cancion es ', autor);

const dbz: string[] = ['Goku', 'Vegueta', 'Trunks'];

console.log('Personaje 1', dbz[0]);
console.log('Personaje 2', dbz[1]);
console.log('Personaje 3', dbz[2]);