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


    $(".calendar-btn").outerHeight($(".time-content").height());

    $(".header-page-right-col").css({"min-height" : $(".header-page-nav-list").height() + "px"});





    var indexModalBox;
    var topCoorDefault;
    var topCoor;

    $(".show-popup").click(function() {

        indexModalBox = $(".show-popup").index(this);

        // $(".show-user-ac:eq("+ indexModalBox +")" ).toggleClass("close");

        if( !$(".modal-box:eq("+ indexModalBox +")").hasClass("show-modal-block") ) {

            $(".modal-box:eq("+ indexModalBox +")").addClass("show-modal-block");
            $(".show-popup:eq("+ indexModalBox +")" ).addClass("close");

            topCoor = parseInt ( $(".modal-box:eq("+ indexModalBox +").show-modal-block").css("top") );


            $(".modal-box:eq("+ indexModalBox +").show-modal-block").css({"top" : topCoor - 10 + "px"});

            setTimeout(function() {

                $(".modal-box:eq("+ indexModalBox +").show-modal-block").animate({
                                                                            "opacity" : 1,
                                                                            "top" : topCoor + "px"
                                                                        }, 500);

            }, 100);


        } else {


            $(".modal-box:eq("+ indexModalBox +").show-modal-block").animate({
                                                                            "opacity" : 0,
                                                                            "top" : topCoor - 10 + "px"
                                                                        }, 500);

            setTimeout(function() {

                $(".modal-box:eq("+ indexModalBox +").show-modal-block").css({"top" : ""});
                $(".modal-box:eq("+ indexModalBox +")").removeClass("show-modal-block");
                $(".show-popup:eq("+ indexModalBox +")" ).removeClass("close");

            }, 510);

        }
        

    });

    $(".calendar-table .active:eq(0)").css({
                    "-webkit-border-radius": "50% 0 0 50%",
                    "-moz-border-radius": "50% 0 0 50%",
                    "-ms-border-radius": "50% 0 0 50%",
                    "-o-border-radius": "50% 0 0 50%",
                    "border-radius": "50% 0 0 50%",
                });

    $(".calendar-table .active").last().css({
                    "-webkit-border-radius": "0 50% 50% 0",
                    "-moz-border-radius": "0 50% 50% 0",
                    "-ms-border-radius": "0 50% 50% 0",
                    "-o-border-radius": "0 50% 50% 0",
                    "border-radius": "0 50% 50% 0",
                });

    if( $(".calendar-table .active").length <= 1 ) {

        $(".calendar-table .active").css({
                    "-webkit-border-radius": "50%",
                    "-moz-border-radius": "50%",
                    "-ms-border-radius": "50%",
                    "-o-border-radius": "50%",
                    "border-radius": "50%",
                });

    }


    // function getPwidth() {

    //     for( countCellCicklum = 0; countCellCicklum <= countTableCell - 1; countCellCicklum++ ) {

    //         widthP = $(".table-cell:eq("+ countCellCicklum +")").width() - $(".table-cell:eq("+ countCellCicklum +") > .product-num-box").width();

    //         $(".table-cell:eq("+ countCellCicklum +") .price").css({"width" : widthP + "px" });

    //         console.log(countTableCell + "  " + widthP);

    //     }

        

    // }


});