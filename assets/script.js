$(function(){
$(document).on('mouseenter', '.titles a', function(){
  $(this).next().toggleClass('active');
});
$(document).on('click click', '.titles a', function(){
  $(this).next().toggleClass('active');
});
});