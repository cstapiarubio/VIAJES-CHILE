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
