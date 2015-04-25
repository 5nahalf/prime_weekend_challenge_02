var i = 0;
$(document).ready(function(){
	$("#btn2").on("click", function(){
		i++;
		shuffleArray(people);
		team2 = people.splice(0, 10);

	});
	$("#btn3").on("click", function(){
		i++;
		shuffleArray(people);
		team2 = people.splice(0, 7);
		team3 = people.splice(0, 6);
	
	});
	$("#btn4").on("click", function(){
		i++;
		shuffleArray(people);
		team2 = people.splice(0, 5);
		team3 = people.splice(0, 5);
		team4 = people.splice(0, 5);

	});
	$("#btn5").on("click", function(){
		i++;
		shuffleArray(people);
		team2 = people.splice(0, 4);
		team3 = people.splice(0, 4);
		team4 = people.splice(0, 4);
		team5 = people.splice(0, 4);

	});
	$("#btn6").on("click", function(){
		i++;
		shuffleArray(people);
		team2 = people.splice(0, 4);
		team3 = people.splice(0, 3);
		team4 = people.splice(0, 3);
		team5 = people.splice(0, 3);
		team6 = people.splice(0, 3);

	});
	$("#btn7").on("click", function(){
		i++;
		shuffleArray(people);
		team2 = people.splice(0, 3);
		team3 = people.splice(0, 3);
		team4 = people.splice(0, 3);
		team5 = people.splice(0, 3);
		team6 = people.splice(0, 3);
		team7 = people.splice(0, 3);

	});
	$("#btn8").on("click", function(){
		i++;
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
		i++;
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
		i++;
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
		if(i == 0){
			alert("Pick a team!");
		} else {
		$("p").empty();
		$("p").append("<ul>Team 1 <br>" + people + "</ul>");
		$("p").append("<ul>Team 2 <br>" + team2 + "</ul>");
		$("p").append("<ul>Team 3 <br>" + team3 + "</ul>");
		$("p").append("<ul>Team 4 <br>" + team4 + "</ul>");
		$("p").append("<ul>Team 5 <br>" + team5 + "</ul>");
		$("p").append("<ul>Team 6 <br>" + team6 + "</ul>");
		$("p").append("<ul>Team 7 <br>" + team7 + "</ul>");
		$("p").append("<ul>Team 8 <br>" + team8 + "</ul>");
		$("p").append("<ul>Team 9 <br>" + team9 + "</ul>");
		$("p").append("<ul>Team 10 <br>" + team10 + "</ul>");
		}
			for(i = 0; i < people.length; i++){
			}
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





function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

