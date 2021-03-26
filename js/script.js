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

//  ------------------------------------------

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare,
// le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti
function random (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function es2(){


  let teams = [
    {nome:'roma', punti:0, falli:0},
    {nome:'lazio', punti:0, falli:0},
    {nome:'juve', punti:0, falli:0},
    {nome:'inter', punti:0, falli:0}];

  for (let i = 0; i < teams.length; i++) {

    // tiro fuori le key
    let result = teams[i];
    // assegno random a key
    result.punti = random(0,10);
    result.falli = random(0,20);
  }
  console.log(teams);

  // Usando la destrutturazione creiamo un nuovo array
  // i cui elementi contengono solo nomi e falli subiti
  // e stampiamo tutto in console.

  let newTeams = [];

  for (let i = 0; i < teams.length; i++) {

    let {punti, falli} = teams[i];

    let insert = {punti, falli};
    newTeams.push(insert)
  }
  console.log(newTeams);
}

function init(){

  es1();

  console.log('primo es ^  --------------------- secondo es v');

  es2();
}


$(document).ready(init);
