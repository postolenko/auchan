$(document).ready(function() {

	var indexTab = 0;


	var countTimes = document.getElementsByClassName("time-item").length;

	var countTimesFor = 0;

	// console.log(countTimes);

	for ( countTimesFor = 0; countTimesFor <= countTimes - 1; ++countTimesFor ) {

		// $(".time-item:eq("+ countTimesFor +")").attr("onclick","getCalendarTab()");

		$(".time-item:eq("+ countTimesFor +")").attr("onclick"," getCalendarTab("+countTimesFor+") ");

	}




	// function getCalendarTab(indexTab) {

	// 	console.log(indexTab);

	// }





});