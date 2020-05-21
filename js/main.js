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

    $("#vcouta_salida").val("0");
}

$("#i_entrada").keyup(function() {
    Valor_Cuota();
});
$("#sub_tasa").change(function() {
    Valor_Cuota();
});
$("#tasa").change(function() {
    Valor_Cuota();
});
//=((1-(1+F4)^(-48)))/F4
function Valor_Cuota() {
    $capital = parseFloat($("#Capital").val());
    $Interes = $("#i_salida").val(); //% EMV
    $Interes = parseFloat($Interes) / 100;
    $Cuotas = parseFloat($("#Cuotas").val());
    $cal1 = 1 + $Interes;
    $cal2 = Math.pow($cal1, ($Cuotas * (-1)));
    $cal3 = 1 - $cal2;
    $cal4 = $cal3 / $Interes;
    $cal5 = $capital / $cal4;
    // console.log($capital, $Interes, $Cuotas);
    // console.log($cal1, $cal2, $cal3, $cal4, $cal5);


    $("#vcouta_salida").val($cal5);
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