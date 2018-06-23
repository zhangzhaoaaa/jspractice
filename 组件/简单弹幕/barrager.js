/**
 *
 Created by zhangzhao on 2018/6/23.
 */
(function($) {

    $.fn.barrager = function(barrage) {
        barrage = $.extend({
            bottom: 0,
            speed: 8
        }, barrage || {});

        var time = new Date().getTime();
        var barrager_id = 'barrage_' + time;
        var id = '#' + barrager_id;
        var div_barrager = $("<div class='barrage' id='" + barrager_id + "'></div>").appendTo($(this));
        var window_height = $(window).height() - 100;
        var this_height =  (window_height > this.height()) ? this.height() : window_height;
        var window_width = $(window).width() + 500;
        var this_width =  (window_width > this.width()) ? this.width() : window_width;
        var random = Math.random();
        var bottom = (barrage.bottom == 0) ? Math.floor(random * this_height - 40 < 0 ? 0 : random * this_height - 40) : barrage.bottom;
        if (barrage.range) {
            if (barrage.range.length >=2) {
                bottom = barrage.range[Math.floor(Math.random() * barrage.range.length)];
            } else if (barrage.range.length === 1) {
                bottom = barrage.range[0];
            }
        }
        div_barrager.css("bottom", bottom + "px");

        var content = $("<span></span>").appendTo(div_barrager);
        content.empty().append(barrage.info);

        $(id).animate({right:this_width}, barrage.speed * 1000, function(){
            $(id).remove();
        });
    }
})(jQuery);
