let risultato;

//selezione età
let inputAge = document.getElementById("age");

//selezione km
let inputKM = document.getElementById("km");

//selezione nome
let inputName = document.getElementById("name");

//selezione bottone
const bottoneGenera = document.getElementById("collect_data")

//evento click
bottoneGenera.addEventListener("click",
    function(event) {    
        
        event.preventDefault()
        //colleziono age, km e nome
        let valoreAge = parseInt(inputAge.value);

        let valoreKM = parseInt(inputKM.value);

        let valoreName = inputName.value;

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

        //comunico nome, prezzo finale, carrozza, codice CP in pagina
        document.getElementById("name-output").innerHTML = valoreName;

        document.getElementById("ticket-output").innerHTML = risultato.toFixed(2);

        document.getElementById("random-output-1").innerHTML = Math.floor(Math.random() * 10) + 1;

        document.getElementById("random-output-2").innerHTML = Math.floor(Math.random() * 100000) + 10000;

        //comunico tipologia biglietto
        if (valoreAge <= 17) {  //se età è utente è <= a 17 Biglietto Junior
            document.getElementById("type-ticket-output").innerHTML = "Biglietto Junior";
        } else if (valoreAge >= 65) {  	//altrimenti se età è utente è >= a 65 Biglietto Senior
            document.getElementById("type-ticket-output").innerHTML = "Biglietto Senior";
        } else {   //altimenti Biglietto Standard
            document.getElementById("type-ticket-output").innerHTML = "Biglietto Standard";
        }

    }
)