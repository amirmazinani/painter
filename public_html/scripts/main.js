$(function () {
    function chng_top_img() {
        if($('.top-img').length > 0){

            $(".top-img:gt(0)").hide();

            setInterval(function() {
                $('.top-img:first')
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo('.all-top-img');
            },  7000);


            console.log('ok');
        }
    }
    chng_top_img();
});