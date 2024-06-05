let risultato;

//chiedo età
let userAge = parseInt(prompt("Inserisci la tua età"));
console.log("età: ", userAge);
document.getElementById("age").innerHTML = userAge;

//chiedo numero chilometri da percorrere
let userKM = parseInt(prompt("Inserisci i km da percorrere"));
console.log("km: ", userKM);
document.getElementById("km").innerHTML = userKM;


//moltiplico userKM a 0.21
const prezzoKM = userKM * 0.21;
console.log("€: ", prezzoKM);
document.getElementById("price_km").innerHTML = prezzoKM.toFixed(2);


//se età è utente è <= a 17 sottraggo prezzoKM al 20%
if (userAge <= 17) {  
    risultato = prezzoKM - (prezzoKM * 0.2);
} else if (userAge >= 65) {  	//altrimenti se età è utente è >= a 65 sottraggo prezzoKM al 40%
    risultato = prezzoKM - (prezzoKM * 0.4);  
} else {   //altimenti il risultato è uguale al prezzo al km
    risultato = prezzoKM;
}

//approssimo il risultato alla seconda cifra decimale
const prezzoFinale = risultato.toFixed(2);
console.log("prezzo finale 1: ", prezzoFinale);

//comunico prezzo finale
document.getElementById("train_price").innerHTML = prezzoFinale;

// usando esclusivamente due input e un bottone, richiediamo età passeggero e km da percorrere

//completare il form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.