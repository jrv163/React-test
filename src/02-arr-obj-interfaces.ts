

let habilidades: number []= [1, 2, 3, 5];

interface personaje {

    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
    
}

const personaje: personaje = {
 nombre: 'strider',
 hp: 70,
 habilidades: [1, 2, 3, 5]
}

personaje.puebloNatal = 'pueblo paleta';

console.table(personaje);
