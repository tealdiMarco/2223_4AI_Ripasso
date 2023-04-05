<?php
    //Prelevare i dati
    //in formato json
    $json = file_get_contents('php://input');

    //Prendere la data di oggi
    $data = date("Y-m-d");

    //creo un file con le risposte dentro
    $fp = fopen("files/".$data."_risposte.json","w");
    fwrite($fp,$json);
    fclose($fp);

    /***************************************************************/
    //definisco risposta
    $risp = new stdClass();
    $risp-> cod = 0;
    $risp-> desc = "salvataggio dei dati su file avvenuto con successo";

    //ritorno una risposta la client
    echo json_encode($risp);


?>
