$(function () {
    //fade slider in top
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
        }
    }
    chng_top_img();

    //repeat and create item in portfolios
    function repeatItem() {
        for(let i = 1 ; i <= 19 ; i++){
            let item =
                `<div class="item">
                    <div class="-pos-r before-show  -dis-n -cur-point -brd-r-3 -ovf-h transition">
                        <p class="transition -pos-a -top-0 -right-0 -c-black -m-3 dis-f flex-d-rw al-it-c">
                            <i class="-fnt-icon-plus transition -dis-ib -brd-r-c sqr -t-al-c -b-c-white"></i>
                            <span class="-fnt-s-p transition -dis-ib -pr-1">click to zoom</span>
                        </p>
                        <img class="-w-11 -dis-b -brd-r-3" src="/uploads/images/portfolios/${i}.jpg" alt="painting number ${i}">
                    </div>
                </div>`;

            $('#portfolios > main').append(item);
        }
    }
    repeatItem();

    //resize item by click
    $('#portfolios > main > .item > div').on('click',function () {
        if($(window).width() >= 490){
            if($(this).closest('.item').hasClass('open')){
                $(this).closest('.item').removeClass('open');
                $(this).find('i').toggleClass('-fnt-icon-plus -fnt-icon-cancel');
                let topOffset = $(this).closest('.item').offset().top;
                $(window).scrollTop(topOffset);
            }else{
                $('.item').removeClass('open');
                $('.item > div > p > i').removeClass('-fnt-icon-cancel').addClass('-fnt-icon-plus');
                $(this).closest('.item').addClass('open');
                $(this).find('i').toggleClass('-fnt-icon-plus -fnt-icon-cancel');
                let topOffset = $(this).closest('.item').offset().top;
                $(window).scrollTop(topOffset);
            }
        }else{
            $('body').toggleClass('-ovf-h');
            $(this).closest('.item').toggleClass('big_open');
            $(this).find('i').toggleClass('-fnt-icon-plus -fnt-icon-cancel');
            let topOffset = $(this).closest('.item').offset().top;
            $(window).scrollTop(topOffset);
        }
    });

    //show by scroll
    function show() {
        let itemTop = $(this).parent().offset().top;
        let winBottom = Number($(window).scrollTop() + $(window).height());
        console.log('item :'+itemTop);
        console.log('win bot :'+winBottom);
        console.log('win sc :'+$(window).scrollTop());
        console.log('win he :'+$(window).innerHeight());
        if(itemTop < winBottom + 100){
            $(this).removeClass('-dis-n');
        }
        if(itemTop < winBottom){
            $(this).removeClass('before-show');
        }
    }
    $('.before-show').each(show);

    //run function by scroll
    $(window).on("scroll", function() {
        $('.before-show').each(show);
    });
});