// 1. Chiedi all’utente il suo nome

// Prendo il nome
var nome = prompt('Inserisci il tuo nome');
// Inserisco il tag per il nome dell'utente
document.getElementById('titolo').innerHTML += nome;

// 2. Chiedi il suo cognome

// Prendo il nome
var cognome = prompt('Inserisci il tuo cognome');
// Inserisco il tag per il cognome dell'utente
document.getElementById('titolo2').innerHTML += cognome;

// 3. Chiedi il suo colore preferito
// Prendo il nome
var colore = prompt('Inserisci il tuo colore preferito');
// Inserisco il tag per il colore preferito dell'utente
document.getElementById('titolo3').innerHTML += colore;

// 4. Scrivi sulla pagina nomecognomecolorepreferito40