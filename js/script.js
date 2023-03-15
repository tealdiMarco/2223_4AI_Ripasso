window.onload = init;

//window.location.href -> info sull'indirizzo attuale del sito e server
var indirizzo = "http://localhost:63342/2223_4AI_Ripasso-main/server/";

function init(){
    let ris = fetch(indirizzo+"domande.php", {method:'GET'});
    //Aspettiamo la risposta
    ris.then(async function(dati){
        //Leggiamo i dati della risposta e li convertiamo in json => chiamata asincrona
        let domande = await dati.json();
        let div = document.getElementById("divDomande");

        for(let i = 0 ;i < 4;i++)
        {

            let domanda = document.createElement("div");
            domanda.innerHTML = domande[i].testo;
            for(let j = 0;j<4;j++)
            {
                let radio = document.createElement("div");
                radio.innerHTML = `
                <input type='radio' value='${domande[i].risp[j].cod}'  />
                ${domande[i].risp[j].desc}<br>
                `;
                domanda.appendChild(radio);
            }
            div.appendChild(domanda);
        }

    });
}