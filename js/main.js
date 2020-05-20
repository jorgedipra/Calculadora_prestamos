$(document).ready(function() {
    $cuotas = 36;
    let plazo = '';
    for (let i = 1; i <= $cuotas; i++) {
        plazo += '<option value="' + i + '">';
    }
    $("#Plazo").html(plazo);
})
include('validar');
include('convercion_tasa');

$("#datos_credito").submit(function() {
    if ($('.entero').hasClass("is-invalid")) {
        $(".is-invalid").focus();
    }
    calular();
    event.preventDefault();
    $("#entradas").hide();
    $("#salidas").show();
});

function calular() {
    $capital = $("#Capital").val();
    $Cuotas = $("#Cuotas").val();
    $Interes = $("#i_salida").val(); //% EMV
    $Interes = parseFloat($Interes) / 100;

}



$("#Recalcular").click(function() {
    $("#entradas").show();
    $("#salidas").hide();
});

//load js
function include(archivo) {
    const oHead = document.getElementsByTagName("head")[0];
    const oScript = document.createElement("script");
    const extention = ".js";
    const origen = "./js/";
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";
    oScript.src = origen + archivo + extention;
    oHead.appendChild(oScript);
}