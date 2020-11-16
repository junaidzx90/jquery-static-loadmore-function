let limit = 4;//It's changable value, which you want to show post per click
function loads(limit) {//This function make loadmore facilities in frontend, acceptable only for filtering
    $('.card').hide();//Hide all loaded cards, which comes by ajax requests
    if ($('.card_items').children('.loadmore_btns').length == false) {
        $('.card_items').append('<div class="loadmore_btns"><button class="loadmore_btn">Load more</button></div>');//Add button if ajax daynamic btn not exist
    }
    $('.loadmore_btn').click(function () {//Make click event on loadmore button
        $('#loader-icon').show();
        setTimeout(function () {
            limit = limit + limit;
            loads(limit);
            $('#loader-icon').hide();
        }, 500);
    });
    var lengths = $('.card_items').children('.card').length;//Length for getting limits
    var listElements = $('.card_items').children('.card');
    for (let i = 0; i < limit; i++) {
        $(listElements[i]).show();//Show card depending limits
        lengths--;//make length minus as show per click
    }
    if (lengths < 0 ) {
        $('.loadmore_btn').remove();//Hide loadmore button if length minus value
    }	
}