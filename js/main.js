/**
 * Created by davidlopez on 2/18/18.
 */

onPageLoad();

onWindowResize();

onPageScroll();

function loadSmallCounters(){
    $('#countdown').timeTo({
        seconds: 60,
        displayDays: 0,
        theme: "white",
        displayCaptions: true,
        fontSize: 40,
        captionSize: 14
    });
    $('#countdown_2').timeTo({
        seconds: 60,
        displayDays: 0,
        theme: "white",
        displayCaptions: true,
        fontSize: 40,
        captionSize: 14
    });
}

function loadBigCounters() {
    $('#countdown').timeTo({
        seconds: 60,
        displayDays: 0,
        theme: "white",
        displayCaptions: true,
        fontSize: 50,
        captionSize: 14
    });
    $('#countdown_2').timeTo({
        seconds: 60,
        displayDays: 0,
        theme: "white",
        displayCaptions: true,
        fontSize: 50,
        captionSize: 14
    });
}

function loadStickyBtn() {
    $('.button-cont').addClass('sticky-btn');
}

function hideStickyBtn() {
    $('.button-cont').removeClass('sticky-btn');
}

function isMobile() {
    return $(window).width() < 768;
}

function inDom(elem) {
    return $(elem).length > 0;
}

function onWindowResize() {
    $( window ).resize(function () {

        //
        //
        // Toggle Mobile Button Visibility
        //
        //


        if (isMobile()) {
            if(!inDom('.sticky')) {
                if ( getDistanceFromTop('.sticky-trigger') > 0) {
                    loadStickyBtn();
                }
            } else if (getDistanceFromTop('.sticky-trigger') > 985 && inDom('.sticky'))  {
                hideStickyBtn()
            }
        } else {
            if(inDom('.sticky')) {
                hideStickyBtn();
            }
        }
    });
}

function onPageLoad() {
    $( document ).ready(function () {

        if( isMobile()) {
            loadSmallCounters();
            loadStickyBtn();
        } else {
            loadBigCounters();
        }

        // Bootstrap Modal Focus Fix
        $('#ebook-modal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
    })
}

function getDistanceFromTop(elem) {
    return $(elem).offset().top;
}

function onPageScroll() {
    $( window ).scroll(function () {

        //
        //
        // Make the ebook sticky
        //
        //

        if( !isMobile()) {
            if(!inDom('.sticky')) {
                if ( getDistanceFromTop('.sticky-trigger') > 187) {
                    $('.ebook-ipad-cont').addClass('sticky');
                }
            } else if (getDistanceFromTop('.sticky-trigger') < 187 && inDom('.sticky'))  {
                $('.ebook-ipad-cont').removeClass('sticky');
            }
        } else {
            if(inDom('.sticky')) {
                $('.ebook-ipad-cont').removeClass('sticky');
            }
        }
    })
}
