$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    

    var countCellCicklum = 0;
    var countTableCell = $(".table-cell").length;



    var widthP;


    var countScrollWrapp;
    var countScrollWrappFor;
    var paddingContent;
    var scrollBox;
    var scrollBoxCoor;


    
    getElemntsHeight();

    // getPwidth();

    // getTableWrappWidth();

    $(document).scroll(function() {



    });


    $(window).resize(function() {        

        getElemntsHeight();

        // getPwidth();

        // getTableWrappWidth();


        $(".header-page-right-col").css({"min-height" : $(".header-page-nav-list").height() + parseInt( $(".header-page-nav-list").css("margin-top") ) + "px"});

    });


    $(".calendar-btn").outerHeight($(".time-content").height());

    $(".header-page-right-col").css({"min-height" : $(".header-page-nav-list").height() + parseInt( $(".header-page-nav-list").css("margin-top") ) + "px"});





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





    // ------------------------------------------------------------------


        $(".times .time-item").click(function() {

            var timeAttr = $(this).attr("id");

            $(".times-box .time-item").removeClass("active");

            $(".time-content .tab").css({"display" : "none"});

            $("#" + timeAttr).addClass("active");

            $("#" + timeAttr + "_tab").css({"display" : "block"});

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


    // ------------------------------------------------------------------




    // function getPwidth() {

    //     for( countCellCicklum = 0; countCellCicklum <= countTableCell - 1; countCellCicklum++ ) {

    //         widthP = $(".table-cell:eq("+ countCellCicklum +")").width() - $(".table-cell:eq("+ countCellCicklum +") > .product-num-box").width();

    //         $(".table-cell:eq("+ countCellCicklum +") .price").css({"width" : widthP + "px" });

    //     }        

    // }


    var scrollCoorTime;
    var timeOutScroll;

    var scrollObjectIndex;
    var scrollTablesTime = 35;

    var scrollCoor = 0;

    $( ".scroll-box" )

        .mousewheel(function() {

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

            scrollCoor = document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop;

            scrollCoorTime = setInterval(function() {

                if( scrollCoor >= $(".list-scroll:eq("+ scrollObjectIndex +")").height() - $(".scrollwrapp").height() ) {

                    clearTimeout(scrollCoorTime, timeOutScroll);

                    scrollCoor = document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop;

                }

                scrollCoor++;

                document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop = scrollCoor;

            }, scrollTablesTime);


        })
        .mouseleave(function() {

            clearTimeout(scrollCoorTime, timeOutScroll);

             scrollCoor = document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop;

        });


        function getScrollEvent(scrollCoor) {

            scrollCoorTime = setInterval(function() {

                scrollCoor++;

                document.getElementsByClassName("scrollwrapp")[scrollObjectIndex].scrollTop = scrollCoor;

            }, 35);

        }


        function getElemntsHeight() {


                // countScrollWrapp = document.getElementsByClassName("scrollwrapp").length;

                // countScrollWrappFor = 0;

                bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;

                paddingContent = parseInt( $(".content").css("padding-bottom") );

                // for ( countScrollWrappFor = 0; countScrollWrappFor <= countScrollWrapp - 1; ++countScrollWrappFor ) {

                //     var scrollBox = document.getElementsByClassName("scrollwrapp")[countScrollWrappFor];

                //     if( scrollBox ) {
                    
                //         scrollBoxCoor = scrollBox.getBoundingClientRect();

                //         if (countScrollWrappFor == 0) {

                //             paddingContent = 0;

                //         } else {

                //             paddingContent = parseInt( $(".content").css("padding-bottom") );                            

                //         }

                //         scrollBox.style.height = (bodyHeight - scrollBoxCoor.top - paddingContent) + "px";
    
                //     }

                // }

                var scrollBoxMenuTable = document.getElementsByClassName("scrollwrapp")[0];

                var scrollBox = document.getElementsByClassName("scrollwrapp")[1];

                if( scrollBoxMenuTable && scrollBox ) {

                    var scrollBoxCoor = scrollBoxMenuTable.getBoundingClientRect();

                    scrollBoxMenuTable.style.height = (bodyHeight - scrollBoxCoor.top - paddingContent ) + "px";


                    var scrollBoxCoor = scrollBox.getBoundingClientRect();

                    scrollBox.style.height = (bodyHeight - scrollBoxCoor.top - paddingContent- 10 ) + "px";

                }


        }




// ------------------------------------------------------------------------------------------------------------
    

    $(".authorization-modal").css({"margin-top" : "-" + ( $(".authorization-modal").height() / 2 ) + "px" });


// ------------------------------------------------------------------------------------------------------------







// ------------------------------------------------------------------

                        // For Tablet Version // 

// ------------------------------------------------------------------



    $(".showsidebar-btn").click(function() {

        $(".sidebar").animate({"left" : 0}, 500);

        $(".menu-bg").fadeIn(500);

    });

    $(".menu-bg, .sidebar ").on("swipeleft",function(){

        $(".sidebar").animate({"left" : -100 + "%"}, 500);

        $(".menu-bg").fadeOut(500);

    });

    $(".close-sidebar-btn").click(function(){

        $(".sidebar").animate({"left" : -100 + "%"}, 500);

        $(".menu-bg").fadeOut(500);

    });



    $(".o-decor:eq("+ 1 +")").css({
        "left" : "50%",
        "margin" : "0 0 0 -3px"
    });

    $(".o-decor:eq("+ 2 +")").css({
        "left" : 100 + "%",
        "margin" : "0 0 0 -6px"
    });



// ---------------------------------------------------------------------------------------------------------

                        // For Mobile Version // 

// ---------------------------------------------------------------------------------------------------------



    // function getTableWrappWidth() {

    //     if (bodyWidth <= 700) {

    //         $(".wrapp-content-320").width( $(window).width() );

    //     }

    // }


    $(".show-menu-head-btn").click(function() {

        $(".menu-mob").fadeIn(300);

    });


    $(".close-menuh-btn").click(function() {

        $(".menu-mob").fadeOut(300);

    });




// ----------------------------------

        // $.mobile.loading().hide();




});