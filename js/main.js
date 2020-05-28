$(document).ready(function() {
    $cuotas = 48;
    let plazo = '';
    for (let i = 1; i <= $cuotas; i++) {
        plazo += '<option value="' + i + '">';
    }
    $("#Plazo").html(plazo);
})
include('validar');
include('convercion_tasa');
include('Abono');

$("#datos_credito").submit(function() {
    if ($('.entero').hasClass("is-invalid")) {
        $(".is-invalid").focus();
    }
    calular();
    event.preventDefault();
    $("#entradas").hide();
    $("#salidas").show();
});
$("#VCalcular").click(function() {
    if ($("#Capital").val() != "" && $("#Cuotas").val() != "" && $("#i_entrada").val() != "") {
        event.preventDefault();
        Valor_Cuota();
    }
});

function calular() {
    Valor_Cuota();
    $capital = parseFloat($("#Capital").val());
    $Cuotas = parseInt($("#Cuotas").val());
    $Interes = parseFloat($("#i_salida").val()); //% EMV
    $Interes = parseFloat($Interes) / 100;
    $vcouta = parseFloat($("#vcouta_salida2").val());
    var cuerpo = "";
    var Amortizacion = 0;
    var Saldo = 0;
    var Interes = 0;
    for (let i = 1; i <= $Cuotas; i++) {

        if (i == 1) {
            Interes = $capital * $Interes;
            Amortizacion = $vcouta - Interes;
            Saldo = $capital - Amortizacion;
            cuerpo += `
            <tr>
                <th scope="row">${i}</th>
                <td>${financial($capital)}</td>
                <td>${ financial(Interes) }</td>
                <td>${financial(Amortizacion)}</td>
                <td>${financial($vcouta)}</td>
                <td>${ financial(Saldo )}</td>
            </tr>
            `;
        } else if (i == $Cuotas) {
            $capital = Saldo;
            Interes = $capital * $Interes;
            Amortizacion = $vcouta - Interes;
            Saldo = $capital - Amortizacion;
            cuerpo += `
            <tr>
                <th scope="row">${i}</th>-
                <td>${financial($capital)}</td>
                <td>${ financial(Interes)}</td>
                <td>${financial(Amortizacion)}</td>
                <td>${financial($vcouta)}</td>
                <td>${ financial(Saldo)}</td>
            </tr>
            `;
        } else {
            $capital = Saldo;
            Interes = $capital * $Interes;
            Amortizacion = $vcouta - Interes;
            Saldo = $capital - Amortizacion;
            cuerpo += `
            <tr>
                <th scope="row">${i}</th>-
                <td>${financial($capital)}</td>
                <td>${ financial(Interes)}</td>
                <td>${financial(Amortizacion)}</td>
                <td>${financial($vcouta)}</td>
                <td>${ financial(Saldo )}</td>
            </tr>
            `;
        }

    }

    $("#Cuerpo").html(cuerpo);
}

//=((1-(1+F4)^(-48)))/F4
function Valor_Cuota() {
    $capital = parseFloat($("#Capital").val());
    $Interes = $("#i_salida").val(); //% EMV
    // console.log("entrada:", $Interes);

    $Interes = parseFloat($Interes) / 100;
    // console.log("entrada %100:", $Interes);

    $Cuotas = parseFloat($("#Cuotas").val());
    $cal1 = 1 + $Interes;
    $cal2 = Math.pow($cal1, ($Cuotas * (-1)));
    $cal3 = 1 - $cal2;
    $cal4 = $cal3 / $Interes;
    $cal5 = $capital / $cal4;
    // console.log($capital, $Interes, $Cuotas);
    // console.log($cal1, $cal2, $cal3, $cal4, $cal5);


    $("#vcouta_salida").val(financial($cal5));
    $("#vcouta_salida2").val($cal5);
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

//dos decimales
// function financial(x) {
//     return Number.parseFloat(x).toFixed(2);
// }

//Separador de miles 
function financial(n) {
    if (n > 1000000000) {
        n = Number.parseFloat(n).toFixed(2)
        n = n.toString()
        while (true) {
            var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
            if (n == n2) break
            n = n2
        }
        var n2 = n.replace(/(\w+)\,(\w+)/, "$1\"$2'")

        return n2

    } else if (n > 1000000) {
        n = Number.parseFloat(n).toFixed(2)
        n = n.toString()
        while (true) {
            var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
            if (n == n2) break
            n = n2
        }
        var n2 = n.replace(/(\w+)\,(\w+)/, "$1'$2")

        return n2

    } else {
        n = Number.parseFloat(n).toFixed(2)
        n = n.toString()
        while (true) {
            var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
            if (n == n2) break
            n = n2
        }
        return n
    }

}