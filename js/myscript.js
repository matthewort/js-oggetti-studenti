// Oggetti
//
//     - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
//     - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
//     - Dare la possibilità all’utente attraverso 3 prompt di
//     aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//
// Possiamo fare anche sullo stesso file o comunque stessa cartella, se ci pensate può essere una sequenza sullo stesso ex.Anche nel punto 2 gli oggetti studenti che stasnno nell’array hanno almeno le 3 proprietà come in quello iniziale.Bonus
//
//     se volete anadate di interazione e/o layout più ricco;
//     e/o gestione casi limite;
//     ciò che volete provare.

// ex1
// var studente = {
//   'nome': 'guglielmo',
//   'cognome': 'ansaldo',
//   'età': '32'
// };
//
// for(var key in studente) {
//   console.log(studente[key]);
// }

// ex2
var studenti =
[
  {
    'nome': 'giorgio',
    'cognome': 'piaggio',
    'eta': '18'
  },
  {
    'nome': 'ludovico',
    'cognome': 'caproni',
    'eta': '18'
  },
  {
    'nome': 'lucia',
    'cognome': 'macchi',
    'eta': '18'
  },
  {
    'nome': 'chiara',
    'cognome': 'reggiane',
    'eta': '18'
  },
];

for(var key in studenti) {
  console.log(studenti[key].nome);
  console.log(studenti[key].cognome);
};

// ex3
//     - Dare la possibilità all’utente attraverso 3 prompt di
//     aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var richiestaNome = prompt("Scrivi nome");
var richiestaCognome = prompt("Scrivi cognome");
var richiestaEta = prompt("Scrivi età");


studenti.push({
    nome: richiestaNome,
    cognome: richiestaCognome,
    eta: richiestaEta
});


console.log("---------------------------------");

for (var i in studenti) {
  console.log(studenti[i].nome);
  console.log(studenti[i].cognome);
  console.log(studenti[i].eta);
}
