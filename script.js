
$(document).ready(function(){
	$("#btn2").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 10);

	});
	$("#btn3").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 7);
		team3 = people.splice(0, 6);
	


	});
	$("#btn4").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 5);
		team3 = people.splice(0, 5);
		team4 = people.splice(0, 5);

	});
	$("#btn5").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 4);
		team3 = people.splice(0, 4);
		team4 = people.splice(0, 4);
		team5 = people.splice(0, 4);

	});
	$("#btn6").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 4);
		team3 = people.splice(0, 3);
		team4 = people.splice(0, 3);
		team5 = people.splice(0, 3);
		team6 = people.splice(0, 3);

	});
	$("#btn7").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 3);
		team3 = people.splice(0, 3);
		team4 = people.splice(0, 3);
		team5 = people.splice(0, 3);
		team6 = people.splice(0, 3);
		team7 = people.splice(0, 3);

	});
	$("#btn8").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 3);
		team3 = people.splice(0, 3);
		team4 = people.splice(0, 3);
		team5 = people.splice(0, 2);
		team6 = people.splice(0, 2);
		team7 = people.splice(0, 2);
		team8 = people.splice(0, 2);

	});
	$("#btn9").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 3);
		team3 = people.splice(0, 2);
		team4 = people.splice(0, 2);
		team5 = people.splice(0, 2);
		team6 = people.splice(0, 2);
		team7 = people.splice(0, 2);
		team8 = people.splice(0, 2);
		team9 = people.splice(0, 2);

	});
	$("#btn10").on("click", function(){
		shuffleArray(people);
		team2 = people.splice(0, 2);
		team3 = people.splice(0, 2);
		team4 = people.splice(0, 2);
		team5 = people.splice(0, 2);
		team6 = people.splice(0, 2);
		team7 = people.splice(0, 2);
		team8 = people.splice(0, 2);
		team9 = people.splice(0, 2);
		team10 = people.splice(0, 2);

	});
	$("#refresh").click(function(){
		$("p").empty();
		$("p").append("<div id='team1'>" + people + "</div>");
		$("p").append("<div id='team2'>" + team2 + "</div>");
		$("p").append("<div id='team3'>" + team3 + "</div>");
		$("p").append("<div id='team4'>" + team4 + "</div>");
		$("p").append("<div id='team5'>" + team5 + "</div>");
		$("p").append("<div id='team6'>" + team6 + "</div>");
		$("p").append("<div id='team7'>" + team7 + "</div>");
		$("p").append("<div id='team8'>" + team8 + "</div>");
		$("p").append("<div id='team9'>" + team9 + "</div>");
		$("p").append("<div id='team10'>" + team10 + "</div>");

	});


	
});


var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
console.log(people.length)

var team2 = [];
var team3 = [];
var team4 = [];
var team5 = [];
var team6 = [];
var team7 = [];
var team8 = [];
var team9 = [];
var team10 = [];


var rand = people[Math.floor(Math.random() * people.length)];


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

