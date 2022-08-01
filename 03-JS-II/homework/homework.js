// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x>y){
    return x
  } else if (x<y){
    return y
  }else {
    return x
  }
}

function mayoriaDeEdad(edad) {
  if (edad>=18){
    return "Allowed";
  }
  else {
    return "Not allowed";
  }
}
  
function conection(status) {
  if (status==1){
    return "Online";
  } else if (status==2){
    return "Away";
  } else {
    return "Offline";
  }
}

function saludo(idioma) {
 if (idioma == "aleman"){
  return "Guten Tag!";
 } else if (idioma == "mandarin"){
  return "Ni Hao!"
 } else if (idioma =="ingles"){
  return "Hello!"
 } else {
  return "Hola!"
 }
}

function colors(color) {
  switch (color){
    case "blue":
    return "This is blue";
  case "red":
    return "This is red"
 case "green":
    return "This is green"
  case "orange":
    return "This is orange"
  default:
    return "Color not found"
  }
  
}

function esDiezOCinco(numero) {
if (numero == 5 || numero == 10){
  return true
} else {
  return false
}
  
}

function estaEnRango(numero) {
 if (numero<50 & numero >20){
  return true
 } else {
  return false
 }
  
}

function esEntero(numero) {
return numero % 1 == 0;
 
}

function fizzBuzz(numero) {
  if (numero%3==0 & numero%5==0){
    return "fizzbuzz"
  }else if (numero%3==0) {
    return "fizz"
  } else if (numero%5==0) {
    return "buzz"
  } else {
    return numero
  }
 
}

function operadoresLogicos(num1, num2, num3) {
   if (num1<0 || num2<0 || num3<0){
    return "Hay negativos"
  } else if( num1>num2 & num1>num3 & num1>0){
    return "Número 1 es mayor y positivo"
  } else if (num1==0 | num2==0 | num3==0){
    return "Error"
  }else if (num3>num1 & num3>num2){
    return (num3+1) 
   } else {
    return false
  }
  }

function esPrimo(numero) {
  if (numero <2){
    return false;
  }
  if (numero == 2){
    return true;
  }
  for (var i=2; i<numero; i++){
    if (numero%i == 0){
      return false
    }
  }
  return true

}

function esVerdadero(valor){
  if (valor == true){
    return "Soy verdadero"
  } else {
    return "Soy falso"
  }


}

function tablaDelSeis(){
let arreglotabladel6 = []
  for (i= 0; i<=10 ;i++){
  i*6
  arreglotabladel6.push(i*6)
}
return arreglotabladel6
 
  
}

function tieneTresDigitos(numero){
  if (numero>99 && numero <1000){
    return true
  } else {
    return false
  }
 
  
}

function doWhile(numero) {
  var a= numero;
  var i= 0;
  do {
    i = i + 1;
    a= a + 5;
  }
  while (i<8);
  return a;
  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
