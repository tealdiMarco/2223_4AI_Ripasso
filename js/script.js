window.onload = init;//asincrona
var indirizzo = "http://localhost:63342/2223_4AI_Ripasso-main/server/";

//window.location.href == da la stringa dove si trova mio progetto senza fare tanti giri
function init(){
    let ris = fetch(indirizzo+"domande.php",{method:'GET'});
    //una volta acquisita la risposta
    ris.then(async function (dati){
        //leggiamo i dati dalla risposta e li convertiamo in Json => chiamata asincrona
        let domande = await dati.json();
        let _div = document.getElementById("idDomande");
        for(let j in domande) {
            let domanda = document.createElement("div");
            domanda.innerHTML = domanda[j].testo;
            for (let i in domande[j].risp) {
                let radio = document.createElement("div");
                radio.innerHTML = `
                <input type='radio' value='${domande[j].risp[i].cod}' name='${domande[j].n}'/>
                ${domande[j].risp[i].desc}<br\>
                `;
                domanda.appendChild(radio);
            }
            div.appendChild(domanda);
        }

    });


}

