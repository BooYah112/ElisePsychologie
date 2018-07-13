$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var source = $(this).data('include');
    var file = 'sources/' + source+ '.html';
    var callback = undefined;
    if (source === 'menuBar'){
      callback = function(){
        var $previousSubMenu = undefined;
        var hoverIn = function(e){
            if (!$(this).next().hasClass('show')) {
              $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            if ($previousSubMenu && $previousSubMenu.is($subMenu)){
              // console.log("sub menu is same as previous. keep it");
            } else{
              $subMenu.toggleClass('show');
            }


            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
              $('.dropdown-submenu .show').removeClass("show");
            });


            return false;
        };
        var hoverOut = function(e){
          $previousSubMenu = $(e.target).next(".dropdown-menu");
          var target = e.target;
          // console.log(target);
          // console.log(target.classList);
          // console.log("hover Out");
        }
        $('.dropdown-menu a.dropdown-toggle').hover(hoverIn,hoverOut);
      };
    }
    $(this).load(file, callback);

  });
});
