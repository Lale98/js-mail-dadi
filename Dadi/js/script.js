// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var dadoUtente = Math.floor(Math.random() * 7);

var dadoPc = Math.floor(Math.random() * 7);

document.getElementById('numero_utente').innerHTML = dadoUtente;
document.getElementById('numero_pc').innerHTML = dadoPc;

if (dadoUtente > dadoPc) {
    document.getElementById('esito_utente').innerHTML = 'hai vinto !'
    document.getElementById('esito_pc').innerHTML = 'hai perso...'
} else if (dadoPc > dadoUtente) {
    document.getElementById('esito_utente').innerHTML = 'hai perso...'
    document.getElementById('esito_pc').innerHTML = 'hai vinto !'
} else {
    document.getElementById('esito_utente').innerHTML = 'pareggio'
    document.getElementById('esito_pc').innerHTML = 'pareggio'
}



