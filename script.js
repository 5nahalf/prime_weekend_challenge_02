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
		console.log(getName(team2));
		$("p").append("<ul>" + getName(people) + "</ul>");
		$("p").append("<ul>" + getName(team2) + "</ul>");
		$("p").append("<ul>" + getName(team3) + "</ul>");
		$("p").append("<ul>" + getName(team4) + "</ul>");
		$("p").append("<ul>" + getName(team5) + "</ul>");
		$("p").append("<ul>" + getName(team6) + "</ul>");
		$("p").append("<ul>" + getName(team7) + "</ul>");
		$("p").append("<ul>" + getName(team8) + "</ul>");
		$("p").append("<ul>" + getName(team9) + "</ul>");
		$("p").append("<ul>" + getName(team10) + "</ul>");
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

function getName(array){
	for(k = 0; k < array.length; k++){
		array[k].toString();
		array[k] = "<li>" + array[k] + "</li>";
		}
		return array;
};	



function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

