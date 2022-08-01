// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];

}


function devolverUltimoElemento(array) {
  
  return array[array.length-1];
  
}


function obtenerLargoDelArray(array) {
 return array.length
  
}


function incrementarPorUno(array) {
  var newarray=[];
 for (var i=0 ; i<array.length; i++){
  element= array[i];
  suma= 1 + element;
  newarray[i]= suma;
  
 }
 return newarray;
 }


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  
  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  return palabras.join(" ");

}


function arrayContiene(array, elemento) {
  for (var i = 0; i<array.length; i++){
    if (array[i]== elemento){
      return true
    }
   }
   return false
  
}


function agregarNumeros(numeros) {
  suma = 0;
  for ( i = 0; i<numeros.length; i++ ){
    suma = suma + numeros[i];
  }
  return suma;
  }


function promedioResultadosTest(resultadosTest) {
  suma = 0;
  for ( i = 0; i<resultadosTest.length; i++ ){
    suma = suma + resultadosTest[i];
  }
  promedio = suma/ resultadosTest.length;

  return promedio;
  }


function numeroMasGrande(numeros) {
  var max = numeros[0];
  for (i = 0; i<numeros.length; i++){
    if (numeros[i]>max){
      max = numeros[i];
    }
  }
  return max;

}


function multiplicarArgumentos() {
  if (arguments.length < 1){
    return 0;
  } else {
    total = 1;
    for (i= 0; i<arguments.length; i++){
      total = total * arguments[i];
    }
  }
  return total;  
}


function cuentoElementos(arreglo){
  counter = 0;
  for (i =0; i<arreglo.length; i++){
    if (arreglo[i]>19){
      counter++;
    }
  }
  return counter;
}


function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia==1 || numeroDeDia==7 ){
    return "Es fin de semana"
  }else {
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  number = n.toString();
  if (number.charAt(0) == "9"){
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
for (i=0; i<arreglo.length; i++){
  if (arreglo[i] == arreglo [i+1]){
    return true;
  } else {
    return false;
  }
}

  
} 


function mesesDelAño(array) {
  meses = [];
  for (i= 0; i<array.length; i++){
    if (array[i] == "Enero"|| array[i] == "Marzo" || array[i] == "Noviembre"){
      meses.push(array[i]);
    }
  }
  if (meses.length<3){
    return "No se encontraron los meses pedidos";
  } else {
    return meses;
  }

}


function mayorACien(array) {
  mascien = [];

  for (i= 0; i<array.length; i++){
    if (array[i]>100){
      mascien.push(array[i]);
    }
   }
   return mascien
   //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
   salto = [];
  add = numero;
  for(i= 0; i<10; i++) {
    add = add + 2;
    if(add == i) break;
    else {
      salto.push(add);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return salto;
  }
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  max5 = [];
  add = numero;
  for(var i= 0; i<10; i++) {
    if(i == 5) continue;
    else {
      add = add + 2;
      max5.push(add);
    }
  }
  return max5;
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
