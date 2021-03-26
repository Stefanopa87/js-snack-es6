// Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

function es1(){

  let arr = [
    {bici: 'bici donna', peso: 6},
    {bici: 'bici uomo', peso: 10},
    {bici: 'bici bimba', peso: 1},
    {bici: 'bici nonno', peso: 3}];

  // creo un ara con obj di arr principale
  // ma assegno a peso il valore massimo con MAX_SAFE_INTEGER
  let small= {bici: '', peso: Number.MAX_SAFE_INTEGER};

  // vado a ciclare su arr
  for (let i = 0; i < arr.length; i++) {

    // estraggo KEY
    let {bici, peso} = arr[i];

    // entra dentro small quella con peso più piccolo
    if (peso < small.peso){
      small = arr[i];
    }
  }
  console.log(small);
}


function init(){

  es1();

  console.log('primo es ^  --------------------- secondo es v');

  es2();
}


$(document).ready(init);
