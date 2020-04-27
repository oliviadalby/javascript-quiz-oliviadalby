
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "HTML CSS Javascript") {
		correct++;
}
	if (question2 == "Cascading Style Sheet") {
		correct++;
}
	if (question3 == "Action Development") {
		correct++;
	}

	if (question4 == "<!DOCTYPE html><html><head>") {
		correct++;
}

	if (question5 == "for ([condition]; [initialExpression]; [incrementExpression])") {
		correct++;
	}

	if (question6 == "True") {
		correct++;
	}

	if (question7 == "Global and Local") {
		correct++;
	}

	if (question8 == "Controller") {
		correct++;
	}

	if (question9 == "rake db") {
		correct++;
	}

	if (question10 == "The following while loop iterates as long as n is less than 3.") {
		correct++;
	}

	var pictures = ["img/win.gif", "img/mediocre.gif", "img/lose.gif"];
	var messages = ["Great job!", "That's fine.", "Work on it."];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
