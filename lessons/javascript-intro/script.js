let Food = "meat";
const proteins = "500";
console.log(Food, typeof meat);
console.log(proteins, typeof 500);
Food = true;
console.log(Food, typeof Food);

// comentario//

/* multi 
comentario
*/

let fruit1 = "pera";
let fruit2 = "manzana";
let fruit3 = "tomate";

let recipe =
  "La receta para el smothie es: " + fruit1 + ", " + fruit2 + " y " + fruit3;

console.log(recipe);

// Interpolación de strings => ``backticks
let recipeBetter = `la receta para el smoothie es: ${fruit1}, ${fruit2} y ${fruit3}`;
console.log(recipeBetter);

// INDICES
let simpleWord = "hola";
//                ||||
//                0123
console.log(simpleWord[0]);
console.log(simpleWord[3]);
console.log(simpleWord.charAt(0));

// propiedad length => cantidad de caracteres en un string

console.log(simpleWord.length);

console.log(simpleWord[simpleWord.length - 1]);

// indexOf => para buscar la posicion de un caracter

console.log(simpleWord.indexOf("e"));

// Otros metodos de strings

let longWord = "bananawakawakasamirarami";

//slice => hace una copia de una seccion del string

console.log(longWord.slice(0, 6));
console.log(longWord.slice(16, 20));

let strSlice = longWord.slice(16, 20);

// console.log(strSlice.toUpperCase())

let strSliceUpperCase = strSlice.toUpperCase();
console.log(strSliceUpperCase.repeat(20));

// o encadenar metodos
// console.log (longWord.slice (16,20). toUpperCase().repeat(20))
let name = "bob";
let nameCapitalized = name[0].toUpperCase() + name.slice(1);
console.log(nameCapitalized);

//numbers
let posNumb = 5;
let negNum = -10;
let decNum = 10.2131313123;

console.log(posNumb, negNum, decNum);

//operaciones matematicas
let num1 = 6;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);

//modulo => no tiene nada que ver con los porcentajes
console.log(num1 % num2); // 2 + 2 + 2 = 6 restante 0

console.log(24 % 5); // 5 + 5 + 5 + 5 = 20 restante 4

// se usa para saber si un numero es par o impar

console.log(27 % 2); // 0=par, 1=impar

// asignación y matematicos

let age = 35;
//feliz cum
age = age + 1;
console.log(age);

// abreviaciones de sintaxis += -= *= /=

age += 1;
console.log(age);

// unicamente cuando son incrementos o decrementos de 1

age++;
console.log(age);

// todas las operaciones anteriores hacen lo mismo

//COERCION => cuando JS intenta cambiar los tipos de data
console.log(3 + 5); // => 8
console.log("3" + "5"); // => "35"

console.log("5" - "3"); // => coercion 5. coercion 3 => 5 - 3 =2

console.log("javascript" - "script"); // NaN => Not a Number

console.log("3" + 5); // coerciona el 5 a "5" (string 5) y luego concatena
console.log("javascript" + 5);

// Objeto Global Math.
//console.log(Math.rando()) // 0 - 1
let random10 = Math.random() * 10; // 0 - 10
console.log(Math.floor(random10)); // 0 - 10 sin decimales

// BOLEANOS
let posBool = true;
let negBool = false;
console.log(posBool, negBool);

// Operador NOT invierte el valor boleano
console.log(!posBool);
console.log(!negBool);

// Operadores de comparación

let food1 = "pizza";
let food2 = "pasta";
let food3 = "pizza";

console.log(food1 === food2);
console.log(food1 === food3);
console.log(food1 !== food2); // true

console.log(12 > 15);
console.log(12 < 15);
console.log(12 <= 12);
console.log(12 >= 12);

console.log("a" < "f"); // Usa los codigos ASCII. 97 < 102
// usado apra ordenar alfabeticamente

// === !== son comparacione estrictas. Comparan el valor y comparan el tipo de data.

console.log("5" === "5");
console.log("5" === 5); // es falso porque tienen tipo de data diferente

// == y != son comparaciones no estrictas. Comapran solo el valor haciendo coercion.

console.log("5" == 5); // true.
console.log("5" == 20); // false

// Operadores Logicos
// && para Y
// || para O

console.log("manzana" === "pera" && "tomate" === "tomate");
// Todas las condiciones deben ser verdad para que todas las codiciones deban ser verdad.

console.log("manzana" === "pera" || "tomate" === "tomate");
// Si al menos una de las condiciones es true toda la operacion es true.

// CONDICIONALES

let naranjas = 5;

//if {/* condicion que eva evualue como boleano ç*/} {
// todo lo que va a ocurrir si la condicion es true }

//if (naranjas === 0){
//console.log ("No tienes anranjas para hacer zumo")
//}
//if (naranjas > 0 && naranjas <= 5){
//  console.log ("Tienes sufcientees naranjas para un zumo")
//}
//if (naranjas > 5) {
//   console.log("tienes suficientes naranjas para muchos zumos")
//}
if (naranjas === 0) {
  console.log("No tienes anranjas para hacer zumo");
  // si JS determina una condicion true deja de revisar las siguientes.
} else if (naranjas > 0 && naranjas <= 5) {
  console.log("Tienes sufcientes naranjas para un zumo");
} else if (naranjas > 5) {
  console.log("tienes suficientes naranjas para muchos zumos");
} else {
  console.log("no entiendo el valor de las naanjas");
}

// Condicionales de tipo switch

let color = "black";

switch (color) {
  case "yellow":
    console.log("yellow things: bananas, sun, ducks");
    break;
  case "orange":
    console.log("orange things: garfield...");
    break;
  default:
    //en cualquier otro caso.
    console.log("no conozco ese color");
}

// Truthy y Falsy

//if (30 === 30) {
//  console.log("esto se imprimirá")
//}

//if (30){
//    console.log("esto se imprimira")
// }
if (-10) {
  console.log("esto se imprimira");
}
// todos los valores de JS tienen un aspecto que asemeja true o false

// 0 es Falsy
// cualquier otro numero es Thruthy

// todos estos valores son falsy
if (0 || "" || undefined || null || NaN || false) {
  console.log(" esto nunca se imprimira ");
}

let money = 20;

if (money) {
  console.log(`tienes ${money} euros en tu cuenta`);
} else {
  console.log("no tienes dinero, te lo gastaste en NFTs");
}

// Bucle FOR

//sintaxis
//for(variable control; condicion; expresion final){
// el codigo a ejecutar x cantidad de veces
//}



for (let patata = 0; patata < 10; patata = patata + 1){
//  let patata = 0 // ESTO OCURRE UNA SOLA VEZ AL INCIIO DEL BUCLE

// if (patata < 10) continua el bucle. ESTO OCURRRE AL INICIO DE CADA ITERACION DEL BUCLE
// si no es false, sal del bucle.

console.log("ejecutando la patata", patata)
}

//...
// patata = patata + 1 // ESTO SE EJECUTA AL FINAL DE CADA TERACION DEL BUCLE.
// luego vuelve a empezar

//console.log(patata) // solo se usa para el bucle, no tenemos acceso fuera del bucle.



//let lyrics = "Around the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the WorldAround the World, Around the World"


//let counterComas = 0;

//for (let i = 0; i < lyrics.length; i + 1)
 // console.log("bucle por los caracteres de lyrics")

// console.log(lyrics [i])

//if (lyrics[i] === ","){
//  console.log("consegui una coma")
//  counterComas = counterComas + 1
//}

//console.log(`en el lyrics hay ${counterComas} comas`)


// BUCLES FOR OF
let newString = "hola"

for(let fruta of newString){
  console.log (fruta)
}



// break y continue

let numStr = "34120x00031412312400"

//1. quiero crear un nuevo string con solo los numeros 0;
// 2. cuando consigas la letra x. No sigas agregando los 0;
let newNumStr = "";

for ( let char of numStr){
 
  if (char === "x"){
    //quiero detener todo el bucle
    break
  }
if (char !== "0"){
  //quiero detenar la iteracion
  continue
}



newNumStr = newNumStr + char
  }

console.log ( newNumStr)