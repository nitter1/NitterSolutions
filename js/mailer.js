document.addEventListener('DOMContentLoaded', function() {
  emailjs.init("VRfKQV9YKBMNNLKJn");

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var serviceID = 'service_sn9zk7l'; // Substitua pelo Service ID
    var templateID = 'template_g0ls5z7'; // Substitua com seu Template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(function() {
        document.getElementById('sendmessage').style.display = 'block';
        document.getElementById('errormessage').style.display = 'none';
      }, function(error) {
        document.getElementById('sendmessage').style.display = 'none';
        document.getElementById('errormessage').style.display = 'block';
      });
  });
});
