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

// console.log( document.getElementsByClassName("list-items")[0].scrollTop);

    // console.log( $(".list-items").scroll() );

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

        if( !$(".modal-box:eq("+ indexModalBox +")").hasClass("show-modal-block") ) {

            $(".modal-box:eq("+ indexModalBox +")").addClass("show-modal-block");

             $(".modal-box:eq("+ indexModalBox +").show-modal-block").css({"top" : ""});
            $(".show-popup:eq("+ indexModalBox +")" ).addClass("close");

            topCoor = parseInt ( $(".modal-box:eq("+ indexModalBox +").show-modal-block").css("top") );


            $(".modal-box:eq("+ indexModalBox +").show-modal-block").css({"top" : topCoor - 10 + "px"});

            setTimeout(function() {

                $(".modal-box:eq("+ indexModalBox +").show-modal-block").animate({
                                                                            "opacity" : 1,
                                                                            "top" : topCoor + "px"
                                                                        }, 300);

            }, 100);


        } else {


            $(".modal-box:eq("+ indexModalBox +").show-modal-block").animate({
                                                                            "opacity" : 0,
                                                                            "top" : topCoor - 10 + "px"
                                                                        }, 300);

            setTimeout(function() {

                $(".modal-box:eq("+ indexModalBox +").show-modal-block").css({"top" : ""});
                $(".modal-box:eq("+ indexModalBox +")").removeClass("show-modal-block");
                $(".show-popup:eq("+ indexModalBox +")" ).removeClass("close");

            }, 310);

        }
        

    });

    for ( var countCalendar = 0; countCalendar <= $(".calendar-table").length - 1; countCalendar++ ) {

            $(".calendar-table:eq("+ countCalendar +") .active:eq(0)").css({
                    "-webkit-border-radius": "50% 0 0 50%",
                    "-moz-border-radius": "50% 0 0 50%",
                    "-ms-border-radius": "50% 0 0 50%",
                    "-o-border-radius": "50% 0 0 50%",
                    "border-radius": "50% 0 0 50%",
                });

            $(".calendar-table:eq("+ countCalendar +") .active").last().css({
                            "-webkit-border-radius": "0 50% 50% 0",
                            "-moz-border-radius": "0 50% 50% 0",
                            "-ms-border-radius": "0 50% 50% 0",
                            "-o-border-radius": "0 50% 50% 0",
                            "border-radius": "0 50% 50% 0",
                        });

            if( $(".calendar-table:eq("+ countCalendar +") .active").length <= 1 ) {

                $(".calendar-table:eq("+ countCalendar +") .active").css({
                            "-webkit-border-radius": "50%",
                            "-moz-border-radius": "50%",
                            "-ms-border-radius": "50%",
                            "-o-border-radius": "50%",
                            "border-radius": "50%",
                        });

            }


    }




    // function getPwidth() {

    //     for( countCellCicklum = 0; countCellCicklum <= countTableCell - 1; countCellCicklum++ ) {

    //         widthP = $(".table-cell:eq("+ countCellCicklum +")").width() - $(".table-cell:eq("+ countCellCicklum +") > .product-num-box").width();

    //         $(".table-cell:eq("+ countCellCicklum +") .price").css({"width" : widthP + "px" });

    //         console.log(countTableCell + "  " + widthP);

    //     }

        

    // }


    // document.getElementsByClassName("list-items")[0];

    console.log( $(".list-items").height() );
    // document.getElementsByClassName("list-items")[0].scrollHeight = -200;

     // document.getElementsByClassName("list-items")[0].scrollTop = 200;



    var scrollCoorTime;
    var timeOutScroll;

    var scrollObjectIndex;
    var scrollTablesTime = 35;

    var scrollCoor = 0;

    $( ".scroll-box" )

        .mousewheel(function() {

            console.log("true");           

            // document.getElementsByClassName("list-items")[0].scrollTop = "";

            clearTimeout(scrollCoorTime, timeOutScroll);

            // timeOutScroll = setTimeout(function() {

            //     scrollCoor = document.getElementsByClassName("list-items")[0].scrollTop;

            //     // getScrollEvent(scrollCoor);

            //     scrollCoorTime = setInterval(function() {

            //         scrollCoor++;

            //         document.getElementsByClassName("list-items")[0].scrollTop = scrollCoor;

            //     }, 35);

            // }, 6000);

             scrollCoor = document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop;

        })
        .mouseenter(function() {

            scrollObjectIndex = $(".scroll-box").index(this);

            clearTimeout(timeOutScroll);

            console.log(scrollObjectIndex);

            scrollCoor = document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop;

            scrollCoorTime = setInterval(function() {

                if( scrollCoor >= $(".list-scroll:eq("+ scrollObjectIndex +")").height() - $(".scrollwrapp").height() ) {

                    clearTimeout(scrollCoorTime, timeOutScroll);

                    scrollCoor = document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop;

                }

                scrollCoor++;

                document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop = scrollCoor;

            }, scrollTablesTime);


            console.log($(".list-items").height());

        })
        .mouseleave(function() {

            clearTimeout(scrollCoorTime, timeOutScroll);

             scrollCoor = document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop;

            // document.getElementsByClassName("list-items")[0].scrollTop = scrollCoor;

        });


        function getScrollEvent(scrollCoor) {

            scrollCoorTime = setInterval(function() {

                scrollCoor++;

                document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop = scrollCoor;

            }, 35);

        }

        // var countGetHeightBlocks = $(".get-height").lenght;
        // var countforGetHight = 0;

        // getElemntsHeight();

        // function getElemntsHeight() {

        //     for(countforGetHight = 0; countforGetHight <= countGetHeightBlocks - 1; countforGetHight++ ) {

        //         $(".get-height:eq("+ countforGetHight +")").outerHeight( $(window).height() - $(".get-height:eq("+ countforGetHight +")").offset().top );

        //     }

        // }



        // -----------------------------------

            
            $(".authorization-modal").css({"margin-top" : "-" + ( $(".authorization-modal").height() / 2 ) + "px" });



        // -----------------------------------


});