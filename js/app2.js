$(document).ready(function(){

  $('.btn-step').on('click', function(e){

  	var currentPanel = $(e.currentTarget).parents('.panel');

  	currentPanel.animate({
  		"margin-left":"-50px",
  		"opacity":"0"
  	}, 1000, function(){
  		
  		$(this).hide();
  		var nextStep = $(e.currentTarget).attr('data-nextstep');
  		var nextElem = $('#' + nextStep);
  		var position = nextElem.offset().left;

  		//fix for full width columns. Clean up
  		var margin = (nextElem.hasClass('col-md-12')) ? '0px' : '25%';

  		nextElem
  			.show()
  			.css('margin-left', '50%')
  			.animate({
  				'opacity':'1',
  				'margin-left': margin
  			}, 1000)

  	});
  });

  $('.questions a').on('click', function(e){
  	var descElem = $(this).next('.desc');
  	var action = (descElem.is(':visible')) ? 'slideUp' : 'slideDown';
  	$(this).next('.desc')[action]();
  });

  //Handle clicks on business plan
  $('.plan-section-wrapper').on('click', function(e){
    var elem = $(e.currentTarget);
    var id = elem.find('.plan-section').attr('data-key');

    $('.plan-section-wrapper').removeClass('active');

    $(elem).addClass('active');

    $('.plan-desc').hide();

    $('#' + id).fadeIn();

  });



});