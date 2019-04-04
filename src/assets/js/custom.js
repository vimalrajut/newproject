$(document).ready(function(){
	$('#grid-opt').click(function(){
		$('.order-row').addClass('col-width');
	});
	$('#list-opt').click(function(){
		$('.order-row').removeClass('col-width');
	});

	$('.grid-list ul li').click(function(){
	    $('li').removeClass("active");
	    $(this).addClass("active");
	});
});

$(document).ready(function() { 
    if ($(window).width() <=767) 
    {
      $('.order-row').addClass('col-width');
    }
});