// Diego Alejandro Castillo Perez


// cracion de variables con el let
let salario1=30000;
let salario2=20000;
let salario3=10000;
const pelicula="titanic";
const vehiculo="moto";
let prueba=true 
let prueba2=false
chech(prueba);
chech(prueba2);

// imprimir las variables numericos con la concanetacion 
console.log("el primer salario es:"+salario1);
console.log(`el segundo salario es: ${salario2}`)


// condicional if con "or"
if(salario1===0||salario2===0 || salario3===0){
    console.log("No puede haber un salario en 0");
}

// condicional else 
else{
    console.log("los salarios se encuentran bien");
}

// condicional if con "and"
if(salario1===30000 && salario2===10000){
 console.log("Los dos salarios son iguales");
}
else{
 console.log("los dos salarios no son iguales")
}

// condicional switch 
switch(vehiculo){
    case "moto":
        console.log("has elejido la moto");
    break;
    case "carro":
        console.log("has elejido el carro")
    break;
}

switch(pelicula){
    case "titanic":
        console.log("has elejido la pelicula titanic");
    break;
    case "batman":
        console.log("has elejido la pelicula batman")
    break;
}

// ternary operator 
function chech(prueba, prueba2){

    prueba? console.log("Aprobaste la prueba") : console.log("Reprobaste la pruebra");
    prueba2? console.log("Verdadero") : console.log("Falso");
}

// condicional else con if 
if(salario1===0){
    console.log("no puedes tener un salario en 0")
}
else if(salario1>0){
  console.log("el salario esta estable")
}

// ciclo do - while
do{
 salario3=salario3+salario2+salario1
}
while(salario3>120000)

// ciclo for
for(let i=0;i<120000;i++){
 salario3=salario3+10000

}

console.log("(|$|)");
