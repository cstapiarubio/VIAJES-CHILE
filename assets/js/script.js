//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//modal
$(".tarjeta").click(function(){
    $(".modal").show();
});

//cerrar modal
$(".modal").click(function(){
    $(this).hide();
});

//alerta siguenos en redes sociales
$(".viajes").click(function(){
    alert("¡Recuerda seguirnos en redes sociales!");
});
