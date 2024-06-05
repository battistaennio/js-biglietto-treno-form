let risultato;

//selezione età
let inputAge = document.getElementById("age");

//selezione km
let inputKM = document.getElementById("km");

//selezione bottone
const bottoneInvia = document.getElementById("collect_data")

//evento click
bottoneInvia.addEventListener("click",
    function() {    
        
        //colleziono age e km
        let valoreAge = parseInt(inputAge.value);
        console.log("valoreAge: ", valoreAge);

        let valoreKM = parseInt(inputKM.value);
        console.log("valoreKM: ", valoreKM);

        //moltiplico userKM a 0.21
        const prezzoKM = valoreKM * 0.21;

        //calcolo prezzo biglietto
        if (valoreAge <= 17) {  //se età è utente è <= a 17 sottraggo prezzoKM al 20%
            risultato = prezzoKM - (prezzoKM * 0.2);
        } else if (valoreAge >= 65) {  	//altrimenti se età è utente è >= a 65 sottraggo prezzoKM al 40%
            risultato = prezzoKM - (prezzoKM * 0.4);  
        } else {   //altimenti il risultato è uguale al prezzo al km
            risultato = prezzoKM;
        }
        console.log(risultato);
    }
);





//se età è utente è <= a 17 sottraggo prezzoKM al 20%

//approssimo il risultato alla seconda cifra decimale
// const prezzoFinale = risultato.toFixed(2);

//comunico prezzo finale
// document.getElementById("train_price").innerHTML = prezzoFinale;


// usando esclusivamente due input e un bottone, richiediamo età passeggero e km da percorrere

//completare il form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.