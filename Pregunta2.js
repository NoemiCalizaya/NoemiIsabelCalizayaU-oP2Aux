'use strict';

// Escriba un programa que reciba una lista de nombres de variables escritos en 
//underscore_case y convertirlos en camelCase.
const cadena = "underscore_case first_name Some_Variable calculate_AGE delayed_departure";

const replace = cadena.replaceAll("_", "");
//console.log(replace);
let lowerC = replace.toLowerCase();
//console.log(lowerC);
let cadena1 = lowerC.slice(0, 14);
cadena1 = lowerC.slice(0, 10) + cadena1[10].toUpperCase() + cadena1.slice(11);
console.log(cadena1);