$(document).ready(function() {

	var countInput;

	$(".enter-btn").click(function() {

		$(".error-box .err-txt").css({"display" : "none"});

		$(".enter-form input").removeClass("error");


		if( $(".enter-name").val() == "admin"  &&  $(".enter-pass").val() == "admin" ) {

			$(".authorization-modal-bg").fadeOut(500);

		} else {

			for( countInput = 0; countInput <= ( $(".enter-form input").length - 1 ) ; countInput++ ) {

				if($(".enter-form input:eq(" + countInput + ")").val() != "admin") {

					dataVal =  $(".enter-form input:eq(" + countInput + ")").attr("data-item");

					if ( $(".enter-form input:eq(" + countInput + ")").attr("data-item") == dataVal &&  $(".enter-form .err-txt:eq(" + countInput + ")").attr("data-item") == dataVal) {

						$(".enter-form input:eq(" + countInput + ")").addClass("error");

						$(".error-box").css({"display" : "block"});

						$(".enter-form .err-txt:eq(" + countInput + ")").fadeIn(300);

					}

				}

			}

		}


	});


});