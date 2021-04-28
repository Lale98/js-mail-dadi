// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

var email = ['alessandro@gmail.com', 'dario@gmail.com', 'nicola@gmail.com', 'davide@gmail.com', 'marta@gmail.com']

var emailUtente = prompt('inserisca la sua email per la verifica');

for ( var i = 0; i < email.length; i++ ) {
    if ( email[i] == emailUtente) {
        document.getElementById('verifica').innerHTML = 'Benvenuto la tua Email \xE8 stata verificata con successo';
    } 

}