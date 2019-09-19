var age;
var dias;

age = 36;
days = age * 365;

console.log("edad en dias " + days);



var solesConvertionFactor;
var dolaresConvertionFactor;
var eurosConvertionFactor;
var pesos; 
var sol;
var euro;
var dolar;

solesConvertionFactor = 5.81;  //factores de conversion de XXXX a pesos
dolaresConvertionFactor = 19.41;
eurosConvertionFactor = 21.41; 

sol = 2500; //numero de soles que tengo y quiero convertir a otras monedas.
pesos = solesConvertionFactor * sol;

euro = pesos / eurosConvertionFactor;
dolar = pesos / dolaresConvertionFactor; 

console.log(sol + " en " + "dolares en " + dolar);
console.log(" euros : " + euro + " y en pesos " + pesos);



var radio; //es el radio pues
var area; //es el area 
const PI = 3.1415; // es una constante pue TODO EL NOMBRE DE LA CONSTANTE DEBE DE SER EN MAYUSCULA; 


radio = 10; 
area = PI * radio * radio; //se hae la operacion

console.log("El area " + area + " es de un circulo de radio " + radio); //lo imprime pues


