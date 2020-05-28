// $("#AbonoCuota").attr("disabled", 'true');
// $("#AbonoPlazo").attr("disabled", 'true');

$("#AbonoPlazo").click(function() {
    $("#AbonoCuota").addClass('btn-secondary');
    $("#AbonoCuota").removeClass('btn-success');
    $("#AbonoCuota").attr("disabled", 'true');
    $("#formPlazo").show();
    $("#AbonoP").focus();
});

$("#AbonoCuota").click(function() {
    $("#AbonoPlazo").addClass('btn-secondary');
    $("#AbonoPlazo").removeClass('btn-success');
    $("#AbonoPlazo").attr("disabled", 'true');
    $("#formCuota").show();
    $("#AbonoC").focus();
});
$("#formCuota").submit(function() {
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

function bono_cuota() {
    cuerpo = $("#bodyAbono").html();
    cuerpo += `
            <tr>
                <th scope="row">1</th>
                <td>Cuota</td>
                <td>10</td>
                <th scope="row">1</th>
                <td>1</td>
            </tr>
            `;
    $("#bodyAbono").html(cuerpo);
}

function bono_plazo() {
    cuerpo = $("#bodyAbono").html();

    cuerpo += `
            <tr>
                <th scope="row">1</th>
                <td>Plazo</td>
                <td>11</td>
                <th scope="row">1</th>
                <td>NO</td>
            </tr>
            `;
    $("#bodyAbono").html(cuerpo);
}