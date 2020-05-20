$interes_entrada = $("#i_entrada").val();
$tasa = $("#tasa").val();
$sub_tasa = $("#sub_tasa").val();

function convercion_tasa() {

    $("#i_salida").val("0");
}
$("#i_entrada").keydown(function() {
    convercion_tasa();
});