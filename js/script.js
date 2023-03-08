window.onload = init;//asincrona
var indirizzo = window.location.href+"/server";
//window.location.href == da la stringa dove si trova mio progetto senza fare tanti giri
function init(){
    let ris = fetch(indirizzo+"domande.php",{method:'GET'});
    ris.then(async function (dati){
        let file = await dati.json();
    });


}

