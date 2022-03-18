class Persona{
    nombre = "";
    apellido = "";
    edad = 0;
    dni = 0;
    comida = "";
    constructor(nombre = "Lucio", apellido= "Sanfilippo", edad = 50, dni = 37800540) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.dni = dni;
    }
    set comidaFavorita(comida){
        this.comida = comida;
    }
    get comidaFavorita(){
        return `Mi comida favorita es: ${this.comida}`;
    }
    saludar(){
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
}
const persona1 = new Persona("Fernando","Godino",26,38500820);
const persona2 = new Persona("Osvaldo","De La Canal",40,26200350);
persona2.saludar();
persona1.comidaFavorita = "Lasagna";
console.log(persona1.comidaFavorita);
