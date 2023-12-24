$(document).ready(function () {
    //  start scroll btn
    $(window).scroll(function () {
        var getprogress = $("#progress");
        var getprogressval = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        var getscrollheight = $(document).height();
        // console.log(getscrollheight);

        var getclientheight = $(window).height();
        // console.log(getclientheight);

        var calcheight = getscrollheight - getclientheight;
        var getfinal = Math.round(getscrolltop * 100 / calcheight);
        // console.log(getfinal);

        getprogressval.text(`${getfinal}%`);
        getprogress.css({
            "background": `conic-gradient(#7BC04B ${getfinal}%,#eee ${getfinal}%)`
        })
    })
    // end scroll btn

    // start promotion section
    $(window).scroll(function () {
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if (getscroll >= 232) {
            $(".cardones").addClass("moveleft");
            $(".cardtwos").addClass("moveright");
            $(".cardthrees").addClass("movebottom");
        } else {
            $(".cardones").removeClass("moveleft");
            $(".cardtwos").removeClass("moveright");
            $(".cardthrees").removeClass("movebottom");
        }
    });
    // end promotion section

    // start award section

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    // end award section



})


