//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
let num1 = 1 
let num2 = 2

if(num1 > num2) {
  alert(num1 + ' è maggiore di ' + num2)
} else {
  alert (num1 + ' è minore di ' + num2)
}
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* const num = prompt("Inserisci un numero")

if (num < 5) {
  alert(num + " è Tiny")
} else if(num >= 5 && num < 10) {
  alert(num + " è Small")
}
else if(num >= 10 && num < 15) {
  alert(num + " è Medium")
}
else if(num >= 15 && num < 20) {
  alert(num + " è Large")
}
else if(num >= 20) {
  alert(num + " è Huge")
} */


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/



/* for( let i=0 ; i < 11; i++) {
  if(i === 3 || i ===8) {
    continue
  } else {
    console.log(i)
  }
} */


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/



/* for(let i=0 ; i < 16; i++) {
  if(i % 2 === 0) {
    console.log(`${i} è un numero PARI `)
  } else {
    console.log(`${i} è un numero DISPARI `)
  }
}  */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* let num1 = 4
let num2 = 4


if(num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8){
  alert("Condition verified !!!")
} */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = parseInt(prompt ("inserisci il costo del tuo carrello"))
const shippingCost = 10

if(totalShoppingCart < 50) {
  dueToPay = totalShoppingCart += shippingCost
  console.log("Il tuo saldo è " + dueToPay + " €")
} else {
  dueToPay = totalShoppingCart
  console.log("Il tuo saldo è " + dueToPay + " €")
} */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* let totalShoppingCart = parseInt(prompt ("inserisci il costo del tuo carrello"))
const shippingCost = 10
let blackFriday = totalShoppingCart / 1.2

if(totalShoppingCart < 50) {
  dueToPay = blackFriday += shippingCost
  console.log("Il tuo saldo è " + dueToPay + " €")
} else {
  dueToPay = blackFriday
  console.log("Il tuo saldo è " + dueToPay + " €")
} */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* let isMale = "male"

let gender = isMale ? "male" : "female"

console.log(gender) */


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* 
for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(i)
  }
} 
*/