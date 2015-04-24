
$(document).ready(function(){
	$("#btn2").on("click", function(){

	});
	$("#btn3").on("click", function(){

	});
	$("#btn4").on("click", function(){

	});
	$("#btn5").on("click", function(){

	});
	$("#btn6").on("click", function(){

	});
	$("#btn7").on("click", function(){

	});
	$("#btn8").on("click", function(){

	});
	$("#btn9").on("click", function(){

	});
	$("#btn10").on("click", function(){

	});
	$("#refresh").click(function(){
		$("p").empty();
	});


	
});


var people = ["Erik", "Aaron", "Alicia", "Brian", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince"];

var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];
var team5 = [];
var team6 = [];
var team7 = [];
var team8 = [];
var team9 = [];




function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}