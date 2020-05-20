$interes_entrada = $("#i_entrada").val();
$tasa = $("#tasa").val();
$sub_tasa = $("#sub_tasa").val();


$("#i_entrada").keyup(function() {
    $interes_salida = convercion_tasa();
    $("#i_salida").val($interes_salida); //Salida es : Efectiva, Mensual Vencida
});
$("#sub_tasa").change(function() {
    $interes_salida = convercion_tasa();
    $("#i_salida").val($interes_salida); //Salida es : Efectiva, Mensual Vencida
});
$("#tasa").change(function() {
    $interes_salida = convercion_tasa();
    $("#i_salida").val($interes_salida); //Salida es : Efectiva, Mensual Vencida
});



//https://www.sabermassermas.com/conversion-de-tasas-de-interes/
//https://www.grupobancolombia.com/wps/portal/negocios-pymes/herramientas/conversor-tasas
//https://www.insolvenciacolombia.com/tasa_interes.htm
//https: //www.finanzaspersonales.co/calculadoras/articulo/conversion-tasas/39936
function convercion_tasa() {
    let tasa = $("#tasa").val();
    let sub_tasa = $("#sub_tasa").val();
    let interes_entrada = $("#i_entrada").val();
    let interes_salida = "0";

    if (tasa == 1) { //Vencida
        switch (sub_tasa) {
            case "1": //Mensual
                if (interes_entrada > 0) {
                    interes_salida = interes_entrada;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "2": //Bimestral
                if (interes_entrada > 0) {
                    //(((1+i)^12)raiz(6))-1
                    $cal0 = parseInt(interes_entrada) / 100;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal3 = Math.pow($cal2, 1 / 6);
                    $cal = $cal3 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "3": //Trimestral
                if (interes_entrada > 0) {
                    //(((1+i)^12)raiz(4))-1
                    $cal0 = parseInt(interes_entrada) / 100;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal3 = Math.pow($cal2, 1 / 4);
                    $cal = $cal3 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "4": //Semestral
                if (interes_entrada > 0) {
                    //(((1+i)^12)raiz(2))-1
                    $cal0 = parseInt(interes_entrada) / 100;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal3 = Math.pow($cal2, 0.5);
                    $cal = $cal3 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "5": //Anual
                if (interes_entrada > 0) {
                    //((1+i)^12)-1
                    $cal0 = parseInt(interes_entrada) / 100;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal = $cal2 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }

                break;
        } //::END=>switch

    } else { //Anticipada
        switch (sub_tasa) {
            case "1": //mensual
                if (interes_entrada > 0) {
                    //i=ia/1-ia
                    $cal0 = parseInt(interes_entrada) / 100;
                    $cal1 = $cal0 / (1 - $cal0);
                    interes_salida = $cal1 * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "2": //Bimestral
                if (interes_entrada > 0) {
                    //i=ia/1-ia
                    $spider0 = parseInt(interes_entrada) / 100;
                    $spider1 = $spider0 / (1 - $spider0);
                    //(((1+i)^12)raiz(6))-1
                    $cal0 = $spider1;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal3 = Math.pow($cal2, 1 / 6);
                    $cal = $cal3 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "3": //Trimestral
                if (interes_entrada > 0) {
                    //i=ia/1-ia
                    $spider0 = parseInt(interes_entrada) / 100;
                    $spider1 = $spider0 / (1 - $spider0);
                    //(((1+i)^12)raiz(4))-1
                    $cal0 = $spider1;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal3 = Math.pow($cal2, 1 / 4);
                    $cal = $cal3 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "4": //Semestral
                if (interes_entrada > 0) {
                    //i=ia/1-ia
                    $spider0 = parseInt(interes_entrada) / 100;
                    $spider1 = $spider0 / (1 - $spider0);
                    //(((1+i)^12)raiz(2))-1
                    $cal0 = $spider1;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal3 = Math.pow($cal2, 0.5);
                    $cal = $cal3 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }
                break;
            case "5": //Anual
                if (interes_entrada > 0) {
                    //i=ia/1-ia
                    $spider0 = parseInt(interes_entrada) / 100;
                    $spider1 = $spider0 / (1 - $spider0);
                    //((1+i)^12)-1
                    $cal0 = $spider1;
                    $cal1 = 1 + $cal0;
                    $cal2 = Math.pow($cal1, 12);
                    $cal = $cal2 - 1;

                    interes_salida = $cal * 100;
                } else {
                    invalidar('i_entrada');
                    interes_salida = 0;
                }

                break;
        } //::END=>switch

    } //::END=>if/else
    console.log(tasa, sub_tasa, interes_salida);

    return interes_salida;
}