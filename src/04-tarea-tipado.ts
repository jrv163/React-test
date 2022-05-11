
interface superHero {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostarDireccion: () => string
}

interface Direccion {
    calle: string,
    ciudad: string,
    pais: string
}

const superHero = {

    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        ciudad: 'NY',
        pais: 'USA'
    },
    mostarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHero.mostarDireccion();
console.log(direccion);

