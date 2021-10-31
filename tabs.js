(function($) {
    $(function() {
      
      $('.tabs__caption').on('click', '.tabs__btn:not(.tabs__active)', function() {
        $(this)
          .addClass('tabs__active').siblings().removeClass('tabs__active')
          .closest('div.tabs').find('.tabs__content').removeClass('tabs__content-active').eq($(this).index()).addClass('tabs__content-active');
      });
      
    });
    })(jQuery);
    
// (function($) {
//     $(function() {
      
//       $('.tabs__caption').on('click', '.tabs__btn:not(.tabs__active)', function() {
//         $(this)
//           .addClass('tabs__active').siblings().removeClass('tabs__active')
//           .closest('div.tabs').find('.tabs__content').removeClass('tabs__content-active').eq($(this).index()).addClass('tabs__content-active');
//       });
      
//     });
//     })(jQuery);