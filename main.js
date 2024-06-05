// let risultato;

//selezione età
let userAge = document.getElementById("age");

//selezione km
let userKM = document.getElementById("km");

console.log(userAge, userKM);

//selezione bottone
const bottoneInvia = document.getElementById("collect_data")

console.log(bottoneInvia);




/*
//moltiplico userKM a 0.21
const prezzoKM = userKM * 0.21;

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

//comunico prezzo finale
document.getElementById("train_price").innerHTML = prezzoFinale;
*/

// usando esclusivamente due input e un bottone, richiediamo età passeggero e km da percorrere

//completare il form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.