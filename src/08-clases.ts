

class personaNormal {
    constructor (
        public nombre: string,
        public direccion: string

    ) {}
}

class hero extends personaNormal {
    //alterEgo: string;
    //edad: number;
    //nombreReal: string;
 
    constructor (
         public alterEgo: string,
         public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'NY, USA');
    }
    
}

const ironman = new hero('Ironman', 45, 'Tony');
console.log(ironman);
