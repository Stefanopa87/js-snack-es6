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


// -------------------------------------------

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

function es3(){

  function getIconsDb() {
    return [
      {
        name: "cat",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "crow",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dove",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "horse",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas",
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
      },
      {
        name: "user-astronaut",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-graduate",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-ninja",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
      {
        name: "user-secret",
        prefix: "fa-",
        type: "user",
        family: "fas",
      },
    ];
  }

  const icons = getIconsDb();

  print(icons);
  // creo una funzione per scrivere codice in html
  function print(array){
    // mi aggancio al div classe icons dell'html
    const container = $('.icons');



    // creo un ciclo con forEach sugli elementi contenuti nell'array
    array.forEach((elem) => {

      // sezione colore da ciclare per inserire color in style html
      let color;
      if(elem.type === 'animal'){
        color = 'orange';
      } else if (elem.type === 'vegetable'){
        color = 'blue';
      } else if (elem.type === 'user'){
        color = 'red';
      }
      // fine sezione colore

      const iconHTML =
      // con i pedici vado a fare un copia incolla in html, sostituendo le classi
      // ad ogni ciclo in base a quello che mi interessa
      // sostituiso quindi fas fa-*** con quello che mi interessa (attenzione agli spazi)
      // .prefix e .name infatti devono essere vicini
      `
        <div>
          <i class="${elem.family} ${elem.prefix}${elem.name}" style="color:${color}"></i>
          <div class="title">${elem.name.toUpperCase()}</div>
        </div>
      `;
      // appendo quindi quanto creato con il .append()
      container.append(iconHTML);

    });
  }

  addOptions(icons);

  function addOptions(array){

    // prima filtro i types
    const types = [];
    array.forEach(elem =>{

      if(!types.includes(elem.type)){
        types.push(elem.type)
      }
    });
    console.log(types);
    // fine filtro

    const select = $('#type')

    types.forEach(elem => {

      const iconHTML =
      `
        <option value="${elem}">${elem}</option>
      `;

      select.append(iconHTML);
    });
  }
}

function init(){

  // es1();

  console.log('primo es ^  --------------------- secondo es v');

  // es2();

  console.log('es pasqua');

  es3();
}


$(document).ready(init);
