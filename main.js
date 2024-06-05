// let risultato;

//selezione età
let userAge = document.getElementById("age");

//selezione km
let userKM = document.getElementById("km");

//selezione bottone
const bottoneInvia = document.getElementById("collect_data")

//evento click
bottoneInvia.addEventListener("click",
    function() {   

        let valoreAge = parseInt(userAge.value);
        console.log("valoreAge: ", valoreAge);
                                                 //colleziono age e km
        let valoreKM = parseInt(userKM.value);
        console.log("valoreKM: ", valoreKM);

    }
);





//se età è utente è <= a 17 sottraggo prezzoKM al 20%

//approssimo il risultato alla seconda cifra decimale
// const prezzoFinale = risultato.toFixed(2);

//comunico prezzo finale
// document.getElementById("train_price").innerHTML = prezzoFinale;


// usando esclusivamente due input e un bottone, richiediamo età passeggero e km da percorrere

//completare il form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.