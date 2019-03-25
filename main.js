
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Nej") {
		correct++;
}
	if (question2 == "30%") {
		correct++;
}
	if (question3 == "Sætter farten ned og stopper ved krydset.") {
		correct++;
	}

	var pictures = ["https://media.giphy.com/media/QJvwBSGaoc4eI/giphy-downsized.gif", "https://media.giphy.com/media/3o85xGr7NxBC4eGTte/giphy.gif", "https://media.giphy.com/media/Cl7zPbqByClyw/giphy-downsized.gif"];
	var messages = ["Godt gået, du er hurtig som en hare!", "Du virker lidt sløv i betrækket, det kan du gøre bedre!", "Er du en skildpade eller hvad? Det kan du gøre bedre!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Du fik " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}

