$('.entero').on("keyup", function() {
    const entrada = this.value;
    const id = this.id;
    const int = entero(entrada);
    const numeros = RegExp("(1|2|3|4|5|6|7|8|9|0)");

    if (int) {
        if (numeros.test(entrada)) {
            switch (id) {
                case 'Cuotas':
                    if (entrada <= $cuotas) {
                        validar(id);
                    } else {
                        invalidar(id);
                    }
                    break;
                case 'i_entrada':
                    if (entrada <= 100) {
                        validar(id);
                    } else {
                        invalidar(id);
                    }
                    break;

                default:
                    validar(id);
                    break;
            } //::END=>switch
        } else {
            invalidar(id);
        }
    } else {
        if (numeros.test(entrada)) {
            validar(id);
        } else {
            invalidar(id);
        }
    } //::END=>if



});

function validar(id) {
    $("#" + id).addClass('is-valid');
    $("#" + id).removeClass('is-invalid');
}

function invalidar(id) {
    $("#" + id).addClass('is-invalid');
    $("#" + id).removeClass('is-valid');
}

function entero(input) {
    var status;
    if (parseInt(input)) {
        status = true;
    } else {
        status = false;
    }
    return status;
}