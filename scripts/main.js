/*$(document).ready(function(){
    
    $('.myWrapper').easyTicker({
        direction: 'up',
        easing: 'swing',
        speed: 'slow',
        interval: 2000,
        height: 'auto',
        visible: 1,
        mousePause: true,
        controls: {
            up: '',
            down: '',
            toggle: '',
            playText: 'Play',
            stopText: 'Stop'
        },
        callbacks: {
            before: false,
            after: false
        }
    });

});*/

new jBox('Tooltip', {
    attach: '.tooltip'
});


$('.my-news-ticker').AcmeTicker({
    type: 'typewriter',
    direction: 'right',
    speed: 50,
    controls: {
      prev: $('.acme-news-ticker-prev'),
      toggle: $('.acme-news-ticker-pause'),
      next: $('.acme-news-ticker-next')
    }
  });
  
  
  $('.add').on('click', function() {
    var lengths = $(".my-news-ticker-3 li").length + 1 //get length of lis
    //get refrence of last lis
    var get_reference = $(".my-news-ticker-3 li[data-ids=" + $(".my-news-ticker-3 li").length + "]")
    //insert new lis 
    $(`<li style="display: none; opacity: 0;" data-text="Breaking News ${lengths}" data-ids='${lengths}'><a href="#">Breaking News ${lengths}</a></li>`).insertAfter($(get_reference))
  
  });
