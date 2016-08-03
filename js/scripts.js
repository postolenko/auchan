$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    var countCellCicklum = 0;
    var countTableCell = $(".table-cell").length;
    var widthP;


    // getPwidth();


    $(document).scroll(function() {



    });

    $(window).resize(function() {

        // getPwidth();

    });


    $(".time-content .right").outerHeight($(".time-content").height());

    $(".header-page-right-col").css({"min-height" : $(".header-page-nav-list").height() + "px"});


       console.log(countTableCell + "  " + widthP +"   "+ parseInt($(".header-page-nav-list").css("top"))* -1);

    function getPwidth() {

        for( countCellCicklum = 0; countCellCicklum <= countTableCell - 1; countCellCicklum++ ) {

            widthP = $(".table-cell:eq("+ countCellCicklum +")").width() - $(".table-cell:eq("+ countCellCicklum +") > .product-num-box").width();

            $(".table-cell:eq("+ countCellCicklum +") .price").css({"width" : widthP + "px" });

            console.log(countTableCell + "  " + widthP);

        }

        

    }



// -----------------

    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    function getScrollToTopBtn() {


        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }



});