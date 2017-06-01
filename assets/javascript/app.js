
var correct = 0,
	incorrect = 0,
	unanswered= 0,
	answerable = 1,
	intervalId,
	intervalId2,
	place = 0,
	questions = [
	q1 = { question: "the question",
			answer1: "<button>a1</button>",
			answer2: "<button>a2</button>",
			answer3: "<button>a3</button>",
			answer4: "<button>a4</button>",
			correct: "a1",
			explanation: "somestuff"
},
	q2 = { question: "question2",
			answer1: "<button>a1</button>",
			answer2: "<button>a2</button>",
			answer3: "<button>a3</button>",
			answer4: "<button>a4</button>",
			correct: "a1",
			explanation: "somestuff"
},
	q3 = { question: "the question3",
			answer1: "<button>a1</button>",
			answer2: "<button>a2</button>",
			answer3: "<button>a3</button>",
			answer4: "<button>a4</button>",
			correct: "a1",
			explanation: "somestuff"
},
	q4 = { question: "the question4",
			answer1: "<button>a1</button>",
			answer2: "<button>a2</button>",
			answer3: "<button>a3</button>",
			answer4: "<button>a4</button>",
			correct: "a1",
			explanation: "somestuff"

},
	q5 = { question: "the question5",
			answer1: "<button>a1</button>",
			answer2: "<button>a2</button>",
			answer3: "<button>a3</button>",
			answer4: "<button>a4</button>",
			correct: "a1",
			explanation: "somestuff"
},
	q6 = { question: "the question6",
			answer1: "<button>a1</button>",
			answer2: "<button>a2</button>",
			answer3: "<button>a3</button>",
			answer4: "<button>a4</button>",
			correct: "a1",
			explanation: "somestuff"
},
	q7 = { question: "the question7",
			answer1: "<button>a1</button>",
			answer2: "<button>a2</button>",
			answer3: "<button>a3</button>",
			answer4: "<button>a4</button>",
			correct: "a1",
			explanation: "somestuff"
}];

$( document ).ready(function() {
    console.log( "ready!");

    	$(".restartbtn").hide();

		function time(){
			gifstop();
			$(".timer").empty();
			$(".iscorrect").empty();
			number = 1;
			intervalId = setInterval(decrement, 1000);
}
		function decrement() {
			number--;
			$(".timer").html("<h2>" + number + "</h2>");
				if(number === 0){
					$(".iscorrect").html("Sorry, time's up. The correct  answer is " + questions[place].correct);
					stop();
					showpara();
					unanswered++;
					answerable++;
		}
}
		function stop() {
      		clearInterval(intervalId);
}
		function giftime() {
			stop();
			$(".timer").empty();
			gifnumber = 1;
			intervalId2 = setInterval(gifdecrement, 1000);
}	
		function gifdecrement() {
			gifnumber--;
			$(".timer").html("<h2>" + gifnumber + "</h2>");
			if(gifnumber === 0){
				if(place < 7){
					showquestion();
					time();
				}else{
					gifstop();
					showresults();

				}	
}
}
		function gifstop() {
      		clearInterval(intervalId2);
}     		
		function showpara(){
			$(".para").html(questions[place].explanation);
			place++,
			console.log("place" + place);
			giftime();
}
		function showquestion() {
			console.log("place" + place);
			$(".question").html(questions[place].question)
			$(".answer1").html(questions[place].answer1)
			$(".answer2").html(questions[place].answer2)
			$(".answer3").html(questions[place].answer3)
			$(".answer4").html(questions[place].answer4)
			answerable--;			
}
		function showresults(){
			$(".para").html("Here are your stats:<br>Correct Answers: "+ correct + "<br>Incorrect Answers: " + incorrect + "<br>Unanswered Questions: " + unanswered +"<br>Press the Restart button if you'd like to try again")
			$(".restartbtn").show();	
}
		
    	$(".startbtn").on("click",function(){
				time();
				showquestion();
				$(this).hide();
});
		$(".answerbtn").on('click', function(){
			if(answerable ===0){
				answerable++;

			var userGuess = $(this).text()
			console.log(userGuess);

			if(userGuess === questions[place].correct){
				$(".iscorrect").html("Right!! The correct answer is " + questions[place].correct);
					correct++;
					showpara();
			}
			else{
				$(".iscorrect").html("Sorry, you were incorrect. The correct is " + questions[place].correct);
					incorrect++;
					showpara();				
			}
			}
		});
		
		

    });


// function.time(){
//     setTimeout(function()){
//     (question)
//     ~30sec (30000)
// }
// ifTime= 0 unaswered++

// else {
//     call next question
//     }
// }
// }


// onclick function disappear start
// start function{
//     if unanswered= 0 && answered = 0 then start game
// }
//    g answer gives feedback on correctness
// >> fires question 1
//     if click = correct{
//     correct++;
//     answer++;
//     place++;

//     }

// >>timerstarts
// question and answerchoices appear
// clickin