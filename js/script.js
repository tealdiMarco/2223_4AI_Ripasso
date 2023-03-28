window.onload = init;
 // no parentesi perchè asincrona
var domande=[];
var risultati=[];

//window.location.href -> info sull'indirizzo attuale del sito e server
var indirizzo = "http://localhost:63342/2223_4AI_Ripasso-main/server/";

function init() {
    let ris = fetch(indirizzo + "domande.php", {method: 'GET'});
    //Aspettiamo la risposta
    ris.then(async function (dati) {
        //Leggiamo i dati della risposta e li convertiamo in json => chiamata asincrona
        domande = await dati.json();
        let div = document.getElementById("divDomande");

        for (let i in domande) {

            let domanda = document.createElement("div");
            domanda.innerHTML = domande[i].testo;
            for (let j in domande[i].risp) {
                let radio = document.createElement("div");
                radio.innerHTML = `
                <input type='radio' value='${domande[i].risp[j].cod}'  name='${domande[i].n}'  />
                ${domande[i].risp[j].desc}<br>
                `;
                domanda.appendChild(radio);
            }
            div.appendChild(domanda);
        }

    });

    //document.getElementById("btnControlla").addEventListener("click",controlla.bind(this,domande)); // bind passo tutto cio che voglio ad una asincrona quindi senza mettere parentesi ==> metto per primo this perchè passo pag dove si trova
    document.getElementById("btnControlla").addEventListener("click", controlla);
}

function controlla(){
    //alert("controllo avviato");
    risultati=[];
    let risposte = document.querySelectorAll("input:checked");//document.querySelectorAll("input:checked") == prelevo input solo checckati
    if(risposte.length == domande.length){
        let contErrate = 0;
        for(let risposta of risposte){
            if(!domande[risposta.name].risp[risposta.value].corretta)
            {
                contErrate++;
            }
            risultati.push({
                nDomanda : risposta.name,
                nRisposta : risposta.value
            });
        }
        alert("hai sbagliato "+contErrate+"risposte");
    }
    else{
        alert("non hai risposto a tutto!!!");
    }
    console.log(risultati);

    /*DOWNLOAD FILE */

    let d ="data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(risultati));
    let a = document.createElement("a");
    a.setAttribute("href",d);
    a.setAttribute("download", "risultati.json");
    a.click();







}

function premuto(evento){
 console.log(evento);
 stampaID(this);
}
function stampaID(elem){
    console.log(elem)
}