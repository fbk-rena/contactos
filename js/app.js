$(document).ready(function () {

    $('#modal1').modal();
    
    Materialize.updateTextFields();
    
    $("#cancelar").click(function(){
        $('#modal1').modal('close');
    });

    $("#addContacto").click(function () {
        //se obtienen los Datos
        var $nombre = $("#nombre-form").val();
        var $telefono = $("#telefono-form").val();

        /*function Contacto($nombre, $apellido, $telefono) {
            this.nombre = $nombre;
            this.apellido = $apellido;
            this.telefono = $telefono;
        }*/

        //Crea contenedores con las clases necesarias
        var $tarjeta = $("<div/>", {
            'class': 'card-panel teal white-text'
        });
        var $contInfo = $("<div />", {
            'class': 'row'
        });
        var $icon = $("<i/>", {
            'class': 'material-icons prefix large col s3'
        });
        var $contDatos = $("<div />", {
            'class': 'col s9 center'
        });
        var $infoContacto = $("<span/>", {
            'class': 'row'
        });
        var $btnBorrar = $("<a/>", {
            'class': 'btn-floating teal right'
        });

        //Agregar contenido
        var $iconContacto = $icon.text("account_circle");
        var $showName = $infoContacto.text($nombre);
        var $showNum = $infoContacto.text($telefono);
        var $iconBorrar = $icon.text("delete")

        //Armar tarjeta de contacto
        $contDatos.append($showName, $showNum);
        $contInfo.append($iconContacto, $contDatos);
        $btnBorrar.append($iconBorrar);
        $tarjeta.append($contInfo, $btnBorrar);

        //Agregar tarjeta de contacto
        $("#contactos").append($tarjeta);

        $btnBorrar.click(function () {
            $(this).parent().remove();
        });
        $('#modal1').modal('close');

    });



});
