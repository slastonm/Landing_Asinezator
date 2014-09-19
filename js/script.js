$(document).ready(function(){
   $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 900);
        return false; 
   }); 
});
$(document).ready(function($){
			
			$('body').on('click', '.trigger', function(e){
				e.preventDefault();
				$('#test-modal').modal().open();
			});

			
			$('.modal #close').on('click', function(e){
				e.preventDefault();
				$.modal().close();
			});

		});

  
