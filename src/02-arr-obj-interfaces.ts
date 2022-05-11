

let habilidades: string []= ['bash', 'counter', 'healing'];

interface personaje {

    nombre:string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
    
}

const personaje: personaje = {
 nombre: 'strider',
 hp: 70,
 habilidades: ['bash', 'counter', 'healing']
}

personaje.puebloNatal = 'pueblo paleta';

console.table(personaje);
