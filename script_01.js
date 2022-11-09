// "use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/********* 02 Deklarationen + Wertzuweisung I *********/ 

// let firstName = "Dan";
// firstName = prompt("Bitte Vornamen eingeben:");
// // firstName = 55+88;

// let familyName = prompt("Bitte Nachnamen eingeben:");
// // familyName = 3;

// console.log(firstName, familyName);

// let test;
// test = "Hai";
// test = 2;
// test = true;

//* JS ist eine untypisierte Sprache! | untyped *
// console.log("Datentyp: ", typeof test);

// const test = "Hai";         // Konstanten müssen(!) Werte zugewiesen werden
// test = "Hallo";

// console.log("Inhalt: ", test);

/***** Beispiel - Berechnung Alter *****/

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung

ageJohn = 12;
ageMark = 56;

let date = new Date();
let year = date.getFullYear();
console.log(date);

// Berechnung

birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

console.log("birthYearJohn: ", birthYearJohn);
console.log("birthYearMark: ", birthYearMark);