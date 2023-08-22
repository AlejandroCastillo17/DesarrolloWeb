class vehiculos
{
    constructor( {tipo, color, motor, combustible, c_ruedas}) 
 {
   this.c_ruedas = c_ruedas;
   this.color = color;
   this.tipo = tipo;
   this.motor = motor;
   this.combustible = combustible;
 }

 tipo(){
    return `El tipo es: ${this.tipo} `;
 }

 color(){
    return `El color es: ${this.color} `;
 }
 
}

class moto extends vehiculos
{
 constructor(tipo, color, motor, combustible, c_ruedas) {

    super(tipo, color, motor, combustible, c_ruedas)
 }


 combustible(){
    return `El combustible es: ${this.combustible} `;
 }

 c_ruedas(){
    return `La cantidad de ruedas es: ${this.c_ruedas} `;
 }

}

const motorrr = { 
    cilindraje: 250,
    infoMarca: {
        nombre: 'Yamaha',
        matricula: true 
    }
}

const xtz250 = new moto({ tipo: 'Moto', color: 'rojo', motor: motorrr, combustible: 'corriente', c_ruedas: 2})

console.log(xtz250.tipo)
console.log(xtz250.color)
console.log(xtz250.combustible)
console.log(xtz250.c_ruedas)