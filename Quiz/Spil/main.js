function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var korrekt = 0;


    if (question1 == "Nej") {
        korrekt++;
    }
    if (question2 == "30%") {
        korrekt++;
    }
    if (question3 == "Sætter farten ned og stopper ved krydset") {
        korrekt++;
    }
    if (question4 == "Stopper bag ved lastbilen og lader ham køre først") {
        korrekt++;
    }
     if (question5 == "60kg") {
        korrekt++;
    }


    var pictures = ["https://media.giphy.com/media/QJvwBSGaoc4eI/giphy-downsized.gif", "https://media.giphy.com/media/3o85xGr7NxBC4eGTte/giphy.gif", "https://media.giphy.com/media/Cl7zPbqByClyw/giphy-downsized.gif"];
    var messages = ["Godt gået, du er hurtig som en hare!", "Du virker lidt sløv i betrækket, det kan du gøre bedre!", "Er du en skildpade eller hvad? Det kan du gøre bedre!"];
    var score;

    if (korrekt == 0) {
        score = 2;
    }

    if (korrekt > 0 && korrekt < 3) {
        score = 1;
    }

    if (korrekt == 3) {
        score = 1;
    }
    if (korrekt == 4) {
        score = 1;
    }
      if (korrekt == 5) {
        score = 0;
    }

    document.getElementById("bkimg").style.visibility = "hidden";
    document.getElementById("after_submit").style.visibility = "visible";


    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "Du fik " + korrekt + " korrekt.";
    document.getElementById("picture").src = pictures[score];
}

function myFunction() {
    var x =
    document.getElementById("korrekt");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {

        x.style.display = "none";
    }
}


