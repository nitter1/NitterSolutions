jQuery(document).ready(function($) {
  "use strict";

  $('form.contactForm').submit(function() {
    var f = $(this);
    var str = f.serialize();
    var action = f.attr('action');

    if (!action) {
      action = 'https://api.staticforms.xyz/submit'; // URL da API para enviar o formulário
    }

    $.ajax({
      type: "POST",
      url: action,
      data: str,
      success: function(msg) {
        if (msg == 'OK') {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg); // Exibir mensagem de erro retornada pela API
        }
      },
      error: function(xhr, status, error) {
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html("Erro ao enviar o formulário. Por favor, tente novamente."); // Mensagem de erro genérica
      }
    });

    return false;
  });
});
