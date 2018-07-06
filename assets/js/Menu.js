$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var source = $(this).data('include');
    var file = 'sources/' + source+ '.html';
    var callback = undefined;
    if (source === 'menuBar'){
      callback = function(){
        $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
          if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
          }
          var $subMenu = $(this).next(".dropdown-menu");
          $subMenu.toggleClass('show');


          $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
          });


          return false;
        });
      };
    }
    $(this).load(file, callback);

  });
});
