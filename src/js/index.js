// Initialize your app
var App = new Framework7({
	swipePanel: 'left' //activamos la opcion del desplazamiento con dedo del menu
});

// Export selectors engine
var $$ = Dom7;

var reg = new Vue({
    el:'#div_reg',
    data:{
        annio:(new Date).getFullYear()
    } 
});

//localStore guarda informacion en elquipo y sessionStore en la sesion
// Add view
var mainView = App.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

function generar()
{
    if($$("#num_precio").val() == '')
    {
        App.alert("Es necesario el valor del articulo.","");
        return 0;
    }

     if($$("#num_porcentaje").val() == '')
    {
        App.alert("Es necesario el porcentaje del articulo.","");
        return 0;
    }

    var descuento = ($$("#num_precio").val() * ($$("#num_porcentaje").val() / 100));
    var precio = $$("#num_precio").val() - descuento;

    $$("#txt_resultado").val("$" + (precio * $$("#num_articulos").val()) + " (Ahorro = $" + (descuento * $$("#num_articulos").val()) + ")");
}