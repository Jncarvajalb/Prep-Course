// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola soy Nicolás";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 6370;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  const devolverString = "Henry";
  return devolverString;
}

function suma(x, y) {
  var suma = x + y;
  return suma;
  
}

function resta(x, y) {
  var diferencia = x - y;
  return diferencia;
}

function multiplica(x, y) {
  var multiply = x*y;
  return multiply;
  
}

function divide(x, y) {
  div = x/y;
  return div;
  
}

function sonIguales(x, y) {
  if (x===y) {
      return true
  }
   else {
    return false
   }
}

function tienenMismaLongitud(str1, str2) {
   if (str1.length==str2.length){
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  if (num<90) {
    return true
}
 else {
  return false
 }
}

function mayorQueCincuenta(num) {
  if (num>50) {
    return true
    }
 else {
  return false
    }
}

function obtenerResto(x, y) {
  return (x%y);
  
}

function esPar(num) {
 if(num % 2 == 0){
  return true;
 } else {
  return false;
 }
  
}

function esImpar(num) {
  if(num % 2 == 1){
    return true;
   } else {
    return false;
   }
  
}

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);
  
}

function elevarAlCubo(num) {
  cube = Math.pow(num, 3);
  return cube;
  
}

function elevar(num, exponent) {
  pot = Math.pow(num, exponent);
  return pot;
  
}

function redondearNumero(num) {
  roundednum= Math.round(num);
return roundednum;
  
}

function redondearHaciaArriba(num) {
  return Math.ceil(num);
  
}

function numeroRandom() {
 return Math.random()
  
}

function esPositivo(numero) {
  if (numero>0){
    return "Es positivo";
  }
  else if (numero<0) {
    return "Es negativo";
  } 
  else {
  return  false;
  }

  
}

function agregarSimboloExclamacion(str) {
  return str + "!";
}

function combinarNombres(nombre, apellido) {
 return nombre+ " " + apellido ;
  
}

function obtenerSaludo(nombre) {
  return "Hola "+ nombre +"!";
  
}

function obtenerAreaRectangulo(alto, ancho) {
  rectangle = alto * ancho;
  return rectangle;
  
}


function retornarPerimetro(lado){
  perimetro = lado * 4;
  return perimetro;
  
}


function areaDelTriangulo(base, altura){
  triangle = (base*altura)/2;
  return triangle;

}


function deEuroAdolar(euro){
   exchange = euro * 1.20;
  return exchange;
}


function esVocal(letra){
 if (letra=='a'|| letra=='e' || letra=='i' ||letra=='o' ||letra=='u'){
  return "Es vocal" ;
 }else if (letra.length !== 1) {
  return('Dato incorrecto');
 } else {
  return('Dato incorrecto');
 }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
