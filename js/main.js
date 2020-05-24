$('#year').text(new Date().getFullYear());


    $('.port-item').click(function () {
      $('.collapse').collapse('hide');
    });

    $('.port-item').click(function(){
      $('.port-item').removeClass('active');
      $(this).toggleClass('active');

    
    
    
      
    });

    $(document).on('click', '[data-toggle="lightbox"]', function (e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });

    (function() {
        'use strict';

        window.addEventListener('load', function() {
            
            var forms = document.getElementsByClassName('needs-validation');
            
            var validation = Array.prototype.filter.call(forms, function(form) {
                
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    $(function(){
   
      $('.scroll').click(function(){
      
      var adjust = 0;
      
      var speed = 400;
      
      var href= $(this).attr("href");
     
      var target = $(href == "#" || href == "" ? 'html' : href);
     
      var position = target.offset().top + adjust;
      
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
      });
    });
  