/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

function getRandomNumber() {
  return Math.floor(Math.random() * 21);
}

random = getRandomNumber();

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Stefano Gabriele",
  surname: "Nitti",
  age: 21,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const mySkills = ["JavaScript", "CSS", "HTML"];

me.skills = mySkills;

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

const newSkill = "DOM Manipulation";

me.skills.push(newSkill);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

let lastSkill = me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  return Math.ceil(Math.random() * 6);
}

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a === b) {
    window.alert("I due numeri sono uguali!");
  } else if (a > b) {
    return a;
  } else return b;
}

let a = 10;
let b = 20;

let biggestOne = whoIsBigger(a, b);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(myString) {
  splittedString = myString.split(" ");
  for (let i = 0; i < splittedString.length; i++) {
    const splittedWord = splittedString[i].split("");
    splittedWord[0] = splittedWord[0].toUpperCase(); //Come richiesto dal prof, ritorno ogni parola divisa con la prima lettera maiuscola
    splittedString[i] = splittedWord.join("");
  }
  return splittedString;
}

const stringToSplit = "Mi piace la banana";
console.log(splitMe(stringToSplit));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(myString, myBool) {
  if (myBool === true) {
    return myString.slice(1);
  } else return myString.slice(0, -1);
}

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(myString) {
  const numbers = "0123456789";
  const splittedString = myString.split(" ");
  for (let i = 0; i < splittedString.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (splittedString[i] === numbers[j]) {
        splittedString.splice(i, 1);
      }
    }
  }
  return splittedString;
}

const stringWithNumber = "Ho mangiato 4 banane";

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(myString) {
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "@") {
      const emailDomain = myString.split("@");

      if (emailDomain.length === 2) {
        for (let j = 0; j < emailDomain[1].length; j++) {
          if (emailDomain[1][j] === ".") {
            const checkEmailDomain = emailDomain[1].split(".");
            if (checkEmailDomain.length === 2) return true;
          }
        }
      }
    }
  }
  return false;
}

console.log(isThisAnEmail("1234@123.12"));

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollDice" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollDice(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollDice(num) {
  const myObj = {
    name: "Tiri del dado",
    sum: 0,
    values: [],
  };
  for (let i = 0; i < num; i++) {
    let diceNumber = dice();
    myObj.sum += diceNumber;
    myObj.values.push(diceNumber);
  }
  return myObj;
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const oggettinoinoino = {
  name: "Kid Yugi",
  album: "I Nomi Del Diavolo",
  age: 24,
};

const propToDelete = "age";

function deleteProp(myObj, myString) {
  delete myObj[myString];
  return myObj;
}

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(myMovies) {
  let lastFilm = Object.assign(myMovies[0]);
  for (let i = 1; i < myMovies.length; i++) {
    if (myMovies[i].Year > lastFilm.Year) {
      lastFilm = Object.assign(myMovies[i]);
    }
  }
  return lastFilm;
}

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies(myMovies) {
  return myMovies.length;
}

/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(myMovies) {
  return myMovies.map((movie) => movie.Year);
}

//Metodo Alternativo
/* function onlyTheYears(myMovies) {
  const moviesYears = [];
  myMovies.forEach((movie) => {
    moviesYears.push(movie.Year);
  });
  return moviesYears;
} */

/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(myMovies) {
  return myMovies.filter((movie) => parseInt(movie.Year) < 2000);
}

//Metodo Alternativo
/* function onlyInLastMillennium(myMovies) {
  const lastMilleniumYears = [];
  myMovies.forEach((movie) => {
    if (movie.Year < 2000) {
      lastMilleniumYears.push(movie);
    }
  });
  return lastMilleniumYears;
} */

/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(myMovies) {
  return myMovies.reduce(
    (accumulator, currentMovie) => accumulator + parseInt(currentMovie.Year),
    0
  );
}

//Metodo Alternativo
/* function sumAllTheYears(myMovies) {
  let yearsSum = 0;
  myMovies.forEach((movie) => {
    yearsSum += parseInt(movie.Year);
  });
  return yearsSum;
} */

/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(myMovies, myString) {
  return myMovies.filter((movie) => movie.Title.toUpperCase().includes(myString.toUpperCase()));
}

//Metodo Alternativo
/* function searchByTitle(myMovies, myString) {
  const filteredMovies = [];
  myString.trim();
  myMovies.forEach((movie) => {
    if (movie.Title.toUpperCase().includes(myString.toUpperCase())) {
      filteredMovies.push(movie);
    }
  });
  return filteredMovies;
} */

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(myMovies, myString) {
  const filteredMovies = {
    match: [],
    unmatch: [],
  };
  myString.trim();
  myMovies.forEach((movie) => {
    if (movie.Title.toUpperCase().includes(myString.toUpperCase())) {
      filteredMovies.match.push(movie);
    } else filteredMovies.unmatch.push(movie);
  });
  return filteredMovies;
}

/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(myMovies, num) {
  return myMovies.splice(num, 1);
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function getContainer() {
  return document.getElementById("container");
}

/* ESERCIZIO 21
Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function getAllTd() {
  return document.querySelectorAll("td");
}

/* ESERCIZIO 22
Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function showAllTds(allTd) {
  for (let i = 0; i < allTd.length; i++) {
    console.log(allTd[i].value);
  }
}

/* ESERCIZIO 23
Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

//Si potrebbe fare anche aggiungendo una classe CSS che assegnerà il valore "red" al tag a ciclando ogni tag
//mentre qui lo assegniamo direttamente inline

const allLinks = document.querySelectorAll("a");

function colorAllLinks(myLinks) {
  for (let i = 0; i < myLinks.length; i++) {
    myLinks[i].style.backgroundColor = "red";
  }
}

/* ESERCIZIO 24
Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const myUl = document.getElementById("myList");

function addElementToUl(myUl, liValue) {
  const newLi = document.createElement("li");
  newLi.innerText = liValue;
  myUl.appendChild("newLi");
}

/* ESERCIZIO 25
Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function removeAllLi(myUl) {
  while (myUl.firstChild) {
    myUl.removeChild(myUl.firstChild);
  } //Continua il ciclo finchè myUl possiede dei figli, altrimenti la condizione del while sarà false e uscirà
}

/* ESERCIZIO 26
Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const allTr = document.querySelectorAll("tr");
function addClassTest(allTr) {
  allTr.forEach((tr) => {
    tr.classList.add("test");
  });
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

Esempio:
halfTree(3)

*
**
***

*/

function halfTree(num) {
  for (let i = 0; i < num; i++) {
    let riga = "";
    for (let j = -1; j < i; j++) {
      riga += "*";
    }
    console.log(riga);
  }
}

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

Esempio:
tree(3)

*
***
*****


*/

function tree(num) {
  accumulatorCounter = 3;
  for (let i = 0; i < num; i++) {
    let spaces = "";
    let riga = "";
    if (i === 0) {
      riga += "*";
      do {
        spaces += " ";
      } while (spaces.length < num + 1);
    } else {
      while (spaces.length < num - i + 1) {
        spaces += " ";
      }
      do {
        riga += "*";
      } while (riga.length < accumulatorCounter);
      accumulatorCounter += 2;
    }
    console.log(spaces + riga);
  }
}

tree(40);

/* ESERCIZIO 29
Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num) {
  for (let i = num - 1; i > 1; i--) {
    if (num % i === 0) return false;
  }
  return true;
}

//Metodo Alternativo
/* function isItPrime(num) {
  let counter = 1;
  do {
    counter++;
    if (num % counter !== 0) {
      if (num === counter) {
        return false;
      }
    } else if (counter !== num) {
      return false;
    } else return true;
  } while (true);
}
 */
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
