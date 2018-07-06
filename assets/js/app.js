$(document).ready(function(){
    $('.btn-about').click(function(){
        $('#elemento').toggle(1000); 
    });
    $('.btn-about').click(function(){
    	$('.triangulo-equilatero-bottom-left').toggle(1000);
    })
     $('.btn-about').click(function(){
    	$('.fondo').toggle(1000)
    })
    $('#btn-home').click(function(){
    	$('#elemento').hide(1000);
    });
    $('#btn-home').click(function(){
    	$('.triangulo-equilatero-bottom-left').hide(1000);
    });
     $('#btn-home').click(function(){
    	$('.fondo').hide(1000);
    });
      $('#btn-home').click(function(){
    	$('.Bienvenido').show(1000);
    });
       $('.btn-about').click(function(){
    	$('.Bienvenido').hide(1000);
    });

    $('.btn-about').click(function(){
        $('.cote').animate({left: '450px'});
    });
    $('#btn-home').click(function(){
        $('.cote').animate({left: '-10px'});
    });
});

       



  // $('.btn-habilidades').on('click', function(){
	//$('#about').hide();

