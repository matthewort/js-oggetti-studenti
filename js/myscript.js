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
    'età': '18'
  },
  {
    'nome': 'ludovico',
    'cognome': 'caproni',
    'età': '18'
  },
  {
    'nome': 'lucia',
    'cognome': 'macchi',
    'età': '18'
  },
  {
    'nome': 'chiara',
    'cognome': 'reggiane',
    'età': '18'
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
studenti.push(richiestaNome);
console.log(studenti.nome);
var richiestaCognome = prompt("Scrivi cognome");
studenti.push(richiestaNome);
console.log(studenti.cognome);
var richiestaEta = prompt("Scrivi età");
studenti.push(richiestaNome);
console.log(studenti.eta);

studenti.push({
    nome: richiestaNome,
    cognome: richiestaCognome,
    eta: richiestaEta
});


var richiestaNome = {};
richiestaNome["nome"] = studenti.nome;


var richiestaCognome = {};
richiestaCognome["cognome"] = studenti.cognome;
studenti.push(richiestaCognome);
console.log(studenti.cognome);

var richiestaEta = {};
richiestaEta["età"] = studenti.eta;
studenti.push(richiestaEta);
console.log(studenti.eta);
