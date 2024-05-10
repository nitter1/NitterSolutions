jQuery(document).ready(function($) {
  "use strict";

  $('form.contactForm').submit(function() {
    var f = $(this);
    var str = f.serialize();
    var action = f.attr('action');

    if (!action) {
      action = 'https://api.staticforms.xyz/submit';
    }

    $.ajax({
      type: "POST",
      url: action,
      data: str,
      success: function(response) {
        if (response && response.success) {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html("Erro ao enviar o formulário. Por favor, tente novamente.");
        }
      },
      error: function(xhr, status, error) {
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html("Erro ao enviar o formulário. Por favor, tente novamente.");
      }
    });

    return false;
  });
});
