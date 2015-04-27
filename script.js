var i = 0;
var copyPeople = [];

$(document).ready(function(){
	$("#btn2").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 10);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
		});


	});
	$("#btn3").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 7);
		team3 = copyPeople.splice(0, 6);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
		});
	
	});
	$("#btn4").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 5);
		team3 = copyPeople.splice(0, 5);
		team4 = copyPeople.splice(0, 5);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
			$("p").append("<ul>Team 4" + getName(team4).join("") + "</ul>");
		});

	});
	$("#btn5").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 4);
		team3 = copyPeople.splice(0, 4);
		team4 = copyPeople.splice(0, 4);
		team5 = copyPeople.splice(0, 4);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
			$("p").append("<ul>Team 4" + getName(team4).join("") + "</ul>");
			$("p").append("<ul>Team 5" + getName(team5).join("") + "</ul>");
		});

	});
	$("#btn6").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 4);
		team3 = copyPeople.splice(0, 3);
		team4 = copyPeople.splice(0, 3);
		team5 = copyPeople.splice(0, 3);
		team6 = copyPeople.splice(0, 3);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
			$("p").append("<ul>Team 4" + getName(team4).join("") + "</ul>");
			$("p").append("<ul>Team 5" + getName(team5).join("") + "</ul>");
			$("p").append("<ul>Team 6" + getName(team6).join("") + "</ul>");
		});

	});
	$("#btn7").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 3);
		team3 = copyPeople.splice(0, 3);
		team4 = copyPeople.splice(0, 3);
		team5 = copyPeople.splice(0, 3);
		team6 = copyPeople.splice(0, 3);
		team7 = copyPeople.splice(0, 2);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
			$("p").append("<ul>Team 4" + getName(team4).join("") + "</ul>");
			$("p").append("<ul>Team 5" + getName(team5).join("") + "</ul>");
			$("p").append("<ul>Team 6" + getName(team6).join("") + "</ul>");
			$("p").append("<ul>Team 7" + getName(team7).join("") + "</ul>");
		});

	});
	$("#btn8").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 3);
		team3 = copyPeople.splice(0, 3);
		team4 = copyPeople.splice(0, 3);
		team5 = copyPeople.splice(0, 2);
		team6 = copyPeople.splice(0, 2);
		team7 = copyPeople.splice(0, 2);
		team8 = copyPeople.splice(0, 2);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
			$("p").append("<ul>Team 4" + getName(team4).join("") + "</ul>");
			$("p").append("<ul>Team 5" + getName(team5).join("") + "</ul>");
			$("p").append("<ul>Team 6" + getName(team6).join("") + "</ul>");
			$("p").append("<ul>Team 7" + getName(team7).join("") + "</ul>");
			$("p").append("<ul>Team 8" + getName(team8).join("") + "</ul>");
		});

	});
	$("#btn9").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 3);
		team3 = copyPeople.splice(0, 2);
		team4 = copyPeople.splice(0, 2);
		team5 = copyPeople.splice(0, 2);
		team6 = copyPeople.splice(0, 2);
		team7 = copyPeople.splice(0, 2);
		team8 = copyPeople.splice(0, 2);
		team9 = copyPeople.splice(0, 2);
		$("div").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
			$("p").append("<ul>Team 4" + getName(team4).join("") + "</ul>");
			$("p").append("<ul>Team 5" + getName(team5).join("") + "</ul>");
			$("p").append("<ul>Team 6" + getName(team6).join("") + "</ul>");
			$("p").append("<ul>Team 7" + getName(team7).join("") + "</ul>");
			$("p").append("<ul>Team 8" + getName(team8).join("") + "</ul>");
			$("p").append("<ul>Team 9" + getName(team9).join("") + "</ul>");
		});

	});
	$("#btn10").on("click", function(){
		i++;
		copyPeople = People.slice(0);
				shuffleArray(copyPeople);
		$("p").slideUp(function(){
			$(this).empty();
			$(this).show();
		});
		team2 = copyPeople.splice(0, 2);
		team3 = copyPeople.splice(0, 2);
		team4 = copyPeople.splice(0, 2);
		team5 = copyPeople.splice(0, 2);
		team6 = copyPeople.splice(0, 2);	
		team7 = copyPeople.splice(0, 2);
		team8 = copyPeople.splice(0, 2);
		team9 = copyPeople.splice(0, 2);
		team10 = copyPeople.splice(0, 2);
		$("#results").hide(function(){
			$("p").append("<ul>Team 1" + getName(copyPeople).join("") + "</ul>");
			$("p").append("<ul>Team 2" + getName(team2).join("") + "</ul>");
			$("p").append("<ul>Team 3" + getName(team3).join("") + "</ul>");
			$("p").append("<ul>Team 4" + getName(team4).join("") + "</ul>");
			$("p").append("<ul>Team 5" + getName(team5).join("") + "</ul>");
			$("p").append("<ul>Team 6" + getName(team6).join("") + "</ul>");
			$("p").append("<ul>Team 7" + getName(team7).join("") + "</ul>");
			$("p").append("<ul>Team 8" + getName(team8).join("") + "</ul>");
			$("p").append("<ul>Team 9" + getName(team9).join("") + "</ul>");
			$("p").append("<ul>Team 10" + getName(team10).join("") + "</ul>");
		});

	});
	$("#refresh").click(function(){
		
		if(i == 0){
			alert("Pick a team bro!!");
		} else {
			$("#results").slideDown();
		}
	});


	
});


var People = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
console.log(People.length)

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
		array[k] = "<li id='name'>" + array[k] + "</li>";
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

