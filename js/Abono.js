let newCuotaD = '';
$("#AbonoCuota").attr("disabled", 'true');
$("#AbonoPlazo").attr("disabled", 'true');

$("#AbonoPlazo").click(function() {
    $("#AbonoPlazo").addClass('btn-success');
    $("#formCuota").hide();
    $("#AbonoCuota").addClass('btn-secondary');
    $("#AbonoCuota").removeClass('btn-success');
    $("#AbonoCuota").attr("disabled", 'true');
    $("#formPlazo").show();
    $("#AbonoP").focus();

    cuotasCal('plazo');
});

$("#AbonoCuota").click(function() {
    $("#AbonoCuota").addClass('btn-success');
    $("#formPlazo").hide();
    $("#AbonoPlazo").addClass('btn-secondary');
    $("#AbonoPlazo").removeClass('btn-success');
    $("#AbonoPlazo").attr("disabled", 'true');
    $("#formCuota").show();
    $("#AbonoC").focus();

    cuotasCal('cuota');
});
$("#formCuota").submit(function() {
    $cuotasmax = $("#Cuotas").val();
    $Cuotas = $("#newCuotasc").val();
    if ($Cuotas > $cuotasmax) {
        alert("El Maximo de Cuotas Permitidos son " + $cuotasmax);
        $("#newCuotasc").focus();
        return false;
    }
    event.preventDefault();
    bono_cuota();
    $("#AbonoPlazo").removeAttr("disabled");
    $("#AbonoPlazo").addClass('btn-success');
    $("#AbonoPlazo").removeClass('btn-secondary');
    $("#formCuota").hide();
    $("#titleP")
        .removeClass('hide')
        .show();
    $("#tableP")
        .removeClass('hide')
        .show();
});
$("#formPlazo").submit(function() {
    $cuotasmax = $("#Cuotas").val();
    $Cuotas = $("#newCuotasp").val();
    if ($Cuotas > $cuotasmax) {
        alert("El Maximo de Cuotas Permitidos son " + $cuotasmax);
        $("#newCuotasp").focus();
        return false;
    }
    event.preventDefault();
    bono_plazo();
    $("#AbonoCuota").removeAttr("disabled");
    $("#AbonoCuota").addClass('btn-success');
    $("#AbonoCuota").removeClass('btn-secondary');
    $("#formPlazo").hide();
    $("#titleP")
        .removeClass('hide')
        .show();
    $("#tableP")
        .removeClass('hide')
        .show();
});
$(".cancelarAbono").click(function() {
    $("#AbonoCuota").removeAttr("disabled");
    $("#AbonoCuota").addClass('btn-success');
    $("#AbonoCuota").removeClass('btn-secondary');
    $("#AbonoPlazo").removeAttr("disabled");
    $("#AbonoPlazo").addClass('btn-success');
    $("#AbonoPlazo").removeClass('btn-secondary');
    $("#formPlazo").hide();
    $("#formCuota").hide();
    $("#AbonoC").val('');
    $("#newCuotasc").val('');
    $("#AbonoP").val('');
    $("#newCuotasp").val('');
});

function bono_cuota() {
    let w = $("#DatosCredito").width();
    let h = $("#DatosCredito").height();
    $("#velo").remove();
    $("#DatosCredito").after(`<span id="velo" style="background: #ffffff47;
    width: ${w}px;
    height: calc(${h}px - 60px);
    z-index: 99999;
    position: absolute;
    top: 0;"></span>`);

    cuerpo = $("#bodyAbono").html();
    $abono = $("#AbonoC").val();
    $cuota_afectada = $("#newCuotasc").val();
    $vcouta = $("#vcouta_salida2").val();
    $new_cuota = parseFloat($vcouta) + parseFloat($abono);
    $("#vcouta_salida2").val($new_cuota);

    cuerpo += `
            <tr>
                <th scope="row">${financial($abono)}</th>
                <td>Cuota</td>
                <td>${$cuota_afectada}</td>
                <th scope="row">${financial($new_cuota)}</th>
                <td>1</td>
            </tr>
            `;
    $("#bodyAbono").html(cuerpo);
    $("#AbonoC").val('');
    $("#newCuotasc").val('');
    newCuotaD = $cuota_afectada;
    if (newCuotaD === $("#Cuotas").val()) {
        $(".newAbono").hide();
        $(".newAbonoTitle").html('No se Puede Agregar Mas Abonos <br><button type="submit" id="nuevo" class="btn btn-info">Nuevos Calculos </button>').show();
    }
}

function bono_plazo() {
    let w = $("#DatosCredito").width();
    let h = $("#DatosCredito").height();
    $("#velo").remove();
    $("#DatosCredito").after(`<span id="velo" style="background: #ffffff47;
    width: ${w}px;
    height: calc(${h}px - 60px);
    z-index: 99999;
    position: absolute;
    top: 0;"></span>`);
    cuerpo = $("#bodyAbono").html();
    $abono = $("#AbonoP").val();
    $cuota_afectada = $("#newCuotasp").val();

    cuerpo += `
            <tr>
                <th scope="row">${financial($abono)}</th>
                <td>Plazo</td>
                <td>${$cuota_afectada}</td>
                <th scope="row">${financial($abono)}</th>
                <td>NO</td>
            </tr>
            `;
    $("#bodyAbono").html(cuerpo);
    $("#AbonoP").val('');
    $("#newCuotasp").val('');
    newCuotaD = $cuota_afectada;
    if (newCuotaD === $("#Cuotas").val()) {
        $(".newAbono").hide();
        $(".newAbonoTitle").html('<button type="submit" id="VCalcular" class="btn btn-info">Valor Cuota</button>').show();
    }

}

function cuotasCal() {
    $cuotas = $("#Cuotas").val();

    if (newCuotaD == '') {
        $inicio = 1;
    } else {
        $inicio = newCuotaD;
    }

    let plazo = '';
    for (let i = $inicio; i <= $cuotas; i++) {
        plazo += '<option value="' + i + '">';
    }
    $("#newPlazop").html(plazo);
    $("#newPlazoc").html(plazo);

}