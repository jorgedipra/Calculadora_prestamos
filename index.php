
<!DOCTYPE html>
<html lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Simulador de Créditos</title>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/index.css">
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" />
	    <link rel="apple-touch-icon" href="./image/ico.png" />	
    </head>
    <body>
    <br><br>
    <div  class="container">
        <div class="row">
            <div class="col text-center">
                <h1>Calculadora de Prestamo Simulador</h1>
            </div>
        </div>
        <br>
        <div id="entradas" class="row">
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Datos del Credito</h5>
                    </div>
                    <div class="card-body">
                        <form id="datos_credito">
                        <div class="form-group">
                            <label for="Capital">Valor del crédito </label>
                            <input type="number" class="form-control entero" id="Capital"  name="Capital" placeholder="Capital" required>
                            <small id="CapitalHelp" class="form-text text-muted">*Valor del crédito (Capital)</small>
                        </div>
                        <div class="form-group">
                            <label for="Capital">Plazo </label>
                            <input list="Plazo" class="form-control entero" id="Cuotas"  name="Cuotas" placeholder="Cuotas" required >
                            <datalist id="Plazo">
                            </datalist>
                            <small id="CapitalHelp" class="form-text text-muted">*Numero de Cuotas</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tasa Interés </label>
                            <div class="row">
                                <div class="col">
                                    <select class="form-control" id="tasa">
                                        <option value="2" selected>Tasa Vencida</option>
                                        <option value="1">Tasa Anticipada</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <select class="form-control" id="sub_tasa">
                                        <option value="1" selected>Efectiva Mensual</option>
                                        <option value="2" >Efectiva Bimestral</option>
                                        <option value="3" >Efectiva Trimestral</option>
                                        <option value="4" >Efectiva Semestral</option>
                                        <option value="5" >Efectiva Anual</option>
                                    </select>
                                </div>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">*Tasa Interés (Vencidas - Efectivas)</small>
                            <br>
                            <div class="row">
                                <div class="col">
                                    <input type="number" class="form-control entero" id="i_entrada" name="interes" placeholder="%" step="0.01"  min="0" max="100" required>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" id="i_salida" aria-describedby="emailHelp" disabled>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <small id="emailHelp" class="form-text text-muted">*Tasa Interés % Entrada</small>
                                </div>
                                <div class="col">
                                    <small id="emailHelp" class="form-text text-muted">*Tasa Interés % Salida (%MV)</small>
                                </div>
                            </div>
                            
                            <!-- interes o anticipada / egectivas y vencidas -->
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Seguro </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">*Es opcional</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Periodicidad</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                            <small id="emailHelp" class="form-text text-muted">*Periodicidad Cuota (Mensual, Bimestral, Trimestral, Semestral, Anual)</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Valor Cuota </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">*Valor Cuota (De acuerdo a periocidad)</small>
                        </div>
                        <button type="submit" id="Calcular" class="btn btn-success">Calcular</button>
                        <button type="submit" class="btn btn-danger">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Pagos</h5>
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">Pagos Extraordinario</h5>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Periodo</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Valor</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">Capital</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Disminución</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                            <small id="emailHelp" class="form-text text-muted">Cuota</small>
                        </div>
                        <button type="submit" class="btn btn-success">Pagar</button>
                        <button type="submit" class="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="salidas" class="container">
    <div class="row">
        <div class="col-3">
            <button type="button" id="Recalcular" class="btn btn-success"><< Recalcular</button>                        
        </div>
        <div class="col"></div>
     </div>
     <br><br>
    <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </table>

    </div>
        <!-- Bootstrap JavaScript -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        <script src="./js/main.js"></script>
    </body>
</html>