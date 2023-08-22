//foreach

const numeros = [1, 5, 10, 30, 50];
let replica =0;

numeros.forEach((item)=>{replica+=item;})
console.log(replica);


//map

const doble = numeros.map((valor)=> valor*2);
console.log(doble);

// vector de objetos

const estudiantes = [
    {nombre:'Alejo', apellido: 'Perez'},
    {nombre:'juanma', apellido: 'alvarez'},
    {nombre:'pepe', apellido: 'montoya'}
];

const nombrecompleto = estudiantes.map((student) => `${student.nombre} ${studemt.apellido}`); 
console.log(nombrecompleto);

//filter

const numerosfiltrados = numeros.filter((numero)=> numero<30);
const objetofiltrado = estudiantes.filter((student)=>student==='Perez');

console.log(numerosfiltrados);
console.log(objetofiltrado);

//every 

const frutas = ['banano', 'fresa', 'mango', 'piña'];
const cumple = frutas.every((fruit) => fruit.length >3);

const objetofruta = [
    {nombre: 'banana', buena:true},
    {nombre: 'fresa', buena:false},
    {nombre: 'mango', buena:true},
    {nombre: 'limon', buena:true}
];

const validar = objetofruta.every((anuel) => anuel.buena===true);

// objetos

const auto = {
    color: 'blanco',
    modelo: 2005,
    cant_puertas: 4,
    marca: 'bmw',
    revisiones: {
        fechasingreso: '10/enero/2020',
        fechassalida: '20/enero/2020',
        estadosalida: 'bueno',
        entregador: 'juan perez', 
    },
    seguro:true,
    matriculado:true 
};

let autos = [];
autos.push(auto);

console.log(autos);

// actividasd de clase

// vector ´principal
const vehiculos = [];

// primer objeto
const carro = {

    color: 'negro',
    modelo: 2022,
    marca: 'chevrolet',
    capacidad: 4,
    tipocombustible: 'diesel',
    matricula:true,
    gastosanuales: {
        soat: 500.000,
        impuestos: 200.000,
        tecnomecanica:200.000
    }
};

// segundo objeto
const moto = {

    color: 'negro',
    modelo: 2020,
    marca: 'yamaha',
    capacidad: 2,
    tipocombustible: 'corriente',
    matricula:true,
    gastosanuales: {
        soat: 250.000,
        impuestos: 100.000,
        tecnomecanica:150.000
    }
};

//ingreso los objetos al vector
vehiculos.push(carro, moto);

//utilizacion de los metodos

// metodo every
const validarcosto = vehiculos.every((comparar) => comparar.matricula === true);

// metodo filter
const vehiculofilter = vehiculos.filter((costo)=> costo.gastosanuales.soat>100.000);

// metodo map
const sumavehiculos = vehiculos.map((valor)=> valor.modelo+1);

