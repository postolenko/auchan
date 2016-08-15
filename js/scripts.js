$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;



    var countCellCicklum = 0; // переменная для цыкла 
    var countTableCell = $(".table-cell").length;  // количество ячеек в таблице
    
    var widthP;  //  Ширина левой ячейки с текстом в таблице


    var timeAttr; // атрибут пункта времени года




    // var scrollBoxMenuTable;     // таблица со скроллом

    // var paddingContent;         // нижний отступ контента
    // var scrollBox;              // блок со скроллом
    // var scrollBoxCoor;          // кордината блока со скроллом



    var scrollCoorTime;  
    var timeOutScroll;   

    var scrollObjectIndex; // индекс элемента с анимацией скролла
    var scrollTablesTime = 35;  // время анимаии скролла

    var scrollCoor = 0;  // координата элемента с скроллом



    
    getElemntsHeight();  // получение высоты элементов

    getTableRowWidth();

    getPwidth();

    // getTableWrappWidth();

    $(document).scroll(function() {



    });


    $(window).resize(function() {        

        getElemntsHeight();  // получение высоты элементов

        getTableRowWidth();

        getPwidth();

        // getTableWrappWidth();

        $(".calendar-btn").outerHeight($(".time-content").height());  // вычисление высоты кнопки календаря


        $(".header-page-right-col").css({"min-height" : $(".header-page-nav-list").height() + parseInt( $(".header-page-nav-list").css("margin-top") ) + "px"});

    });

        $(".header-page-right-col").css({"min-height" : $(".header-page-nav-list").height() + parseInt( $(".header-page-nav-list").css("margin-top") ) + "px"});




    $(".calendar-btn").outerHeight($(".time-content").height());  // вычисление высоты кнопки календаря



    // ------------------------------------------------------------------------------

    // Скрипт для попапов


    var indexModalBox;  // инжекс модального окна
    var topCoor;        // верхняя координата модального окна


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


    // Скрипт календаря 

    // var timeAttr

        //  Отображение контента в панели

        $(".times .time-item").click(function() {

            var timeAttr = $(this).attr("id");

            $(".times-box .time-item").removeClass("active");

            $(".time-content .tab").css({"display" : "none"});

            $("#" + timeAttr).addClass("active");

            $("#" + timeAttr + "_tab").css({"display" : "block"});

        });



        // Определение радиусов закругления ячеек

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


    // получение ширины строки таблицы

    function getTableRowWidth() {

        $(".table-row").width( $(".report-table").width() - parseInt(  $(".table-row").css("padding-left")  ) * 2 );

    }


    // получение ширины левой ячейки с текстом в таблице

    function getPwidth() {   

        for( countCellCicklum = 0; countCellCicklum <= countTableCell - 1; countCellCicklum++ ) {

            widthP = $(".table-cell:eq("+ countCellCicklum +")").width() - $(".table-cell:eq("+ countCellCicklum +") > .product-num-box").width();

            $(".table-header .table-cell-block:eq("+ countCellCicklum +") h2").css({"width" : widthP + "px" });

            $(".table-cell:eq("+ countCellCicklum +") .price").css({"width" : widthP + "px" });

        }        

    }

    // --------------------------------------------------------------------

        // Скрипт для скролла таблицы 

    // var scrollCoorTime;
    // var timeOutScroll;

    // var scrollObjectIndex;
    // var scrollTablesTime = 35;

    // var scrollCoor = 0;

    $( ".scroll-box" )

        .mousewheel(function() {

            clearTimeout(scrollCoorTime, timeOutScroll);

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


// --------------------------------------------------------------------------------

    var scrollBoxMenuTable;     // таблица со скроллом

    var paddingContent;         // нижний отступ контента
    var scrollBox;              // блок со скроллом
    var scrollBoxCoor;          // кордината блока со скроллом

    var scrollBoxTableCoor;

    var scrollBoxMenuTableHeight;

    // Получение высоты элементов

        function getElemntsHeight() {


                setTimeout(function() {

                    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;

                    marginContent = parseInt( $(".content").css("margin-bottom") );

                    scrollBoxMenuTable = document.getElementsByClassName("scrollwrapp")[0];

                    scrollBox = document.getElementsByClassName("scrollwrapp")[1];

                    if( scrollBoxMenuTable && scrollBox ) {

                        scrollBoxCoor = scrollBoxMenuTable.getBoundingClientRect();

                        scrollBoxMenuTableHeight = bodyHeight - scrollBoxCoor.top - marginContent;

                        if( scrollBoxMenuTableHeight <= 0 ) {

                            scrollBoxMenuTableHeight = 250;

                        }

                        scrollBoxMenuTable.style.height = scrollBoxMenuTableHeight + "px";


                        scrollBoxTableCoor = scrollBox.getBoundingClientRect();

                        scrollBox.style.height = (bodyHeight - scrollBoxTableCoor.top - marginContent - 10 ) + "px";

                    }


                }, 300);


        }




// ------------------------------------------------------------------------------------------------------------
    // Вычисление отступа от верхнего края окна браузера модального окна для авторизации    

    $(".authorization-modal").css({"margin-top" : "-" + ( $(".authorization-modal").height() / 2 ) + "px" });


// ------------------------------------------------------------------------------------------------------------




// ------------------------------------------------------------------

                        // For Tablet Version // 

// ------------------------------------------------------------------


        // Скрипт для сайдбара при планшетной и мобильной версии

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




            // ------------------------------

            $(".o-decor:eq("+ 1 +")").css({
                "left" : "50%",
                "margin" : "0 0 0 -3px"
            });

            $(".o-decor:eq("+ 2 +")").css({
                "left" : 100 + "%",
                "margin" : "0 0 0 -6px"
            });

            // ------------------------------


// ---------------------------------------------------------------------------------------------------------

                        // For Mobile Version // 

// ---------------------------------------------------------------------------------------------------------


    // Показ и скрытие верхнего меню при мобильной версии

    $(".show-menu-head-btn").click(function() {

        $(".menu-mob").fadeIn(300);

    });


    $(".close-menuh-btn").click(function() {

        $(".menu-mob").fadeOut(300);

    });




// ----------------------------------

        $.mobile.loading().hide();  // скрытие сообщения Loading.




});