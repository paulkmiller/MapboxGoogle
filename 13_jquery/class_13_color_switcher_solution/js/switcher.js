var currentClass;

$('.js-color-switcher-btn').click(function(evt){
  if(currentClass){
    $('body').removeClass(currentClass);
  }
 currentClass = 'bg-' + $(this).data('color');
  $('body').addClass(currentClass);
});