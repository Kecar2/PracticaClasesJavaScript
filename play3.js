/**
 * Vamos a definir una clase Pokemon.
 * Los Pokemon se pueden por:
 *    - Su identificador de Pokedex
 *    - Su nombre
 *    - Sus puntos de fuerza
 *    - De que tipo son (pueden ser de diversos tipos)
 * 
 *  
 *  /**
 * Vamos a definir una clase Pokemon.
 * Los Pokemon se pueden por:
 *    - Su identificador de Pokedex
 *    - Su nombre
 *    - Sus puntos de fuerza
 *    - De que tipo son (pueden ser de diversos tipos)
 * 
 * Ejercicio: Definidme la clase Pokemon con estas carecterísticas e instanciadme dos objetos del tipo Pokemon tal que así:
 * 
 * - Instanciar un pokemon que se llama "Pikachu", su PokedexID es 666; y es del tipo ["eléctrico", "tierra"] y tiene 50 de fuerza.
 * 
 *  - Instanciar un pokemon que se llama "Bulbasur", su PokedexID es 2, es de tipo ["agua", "planta"] y su fuerza es 45.
 *  - Definir un método "reforzar" que al invocarlo, DOBLA la fuerza del pokemon (lo podreis comprar si tras invocar el método su fuerza se ha doblado) 

 */
class Pokemon {
    constructor(Pokedex, Nombre, fuerza, Tipo) {
        this.Pokedex = Pokedex;
        this.Nombre = Nombre;
        this.fuerza = fuerza;
        this.Tipo = Tipo;
    }

    reforzar() {
        this.fuerza = this.fuerza * 2;
    }
}

let pikachu = new Pokemon(666, "Pikachu", 50, ["eléctrico", "tierra"]);

let bulbasaur = new Pokemon(2, "Bulbasaur", 45, ["agua", "planta"]);

console.log(pikachu);
console.log(bulbasaur);

bulbasaur.reforzar();

