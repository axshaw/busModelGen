$(document).ready(function(){

  $('.plan-section-wrapper').on('click', function(e){
    var elem = $(e.currentTarget);
    var id = elem.find('.plan-section').attr('data-key');

    $('.plan-section-wrapper').removeClass('active');

    $(elem).addClass('active');

    $('.plan-desc').hide();

    $('#' + id).fadeIn();

  });

});