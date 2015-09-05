$(document).ready(function(){
	$('.sliderx').on('click', function(){
		
		if ( $('.activex').next('.slidex').length ){
			$('.activex').removeClass('activex')
				.next('.slidex')
				.addClass('activex');
		} else {
			$('.activex').removeClass('activex');
			$('.slidex').first().addClass('activex');
		}
		
	});
});
