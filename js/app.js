$(document).ready(function(){

  $('.plan-section').on('click', function(e){
    var elem = $(e.currentTarget);
    var id = elem.attr('data-key');

    $('.plan-section').removeClass('active');

    $(elem).addClass('active');

    $('.plan-desc').hide();

    $('#' + id).fadeIn();

  });

});