
var correct = 0,
	incorrect = 0,
	unanswered= 0,
	answerable = 1,
	intervalId,
	intervalId2,
	place = 0,
	questions = [
	q1 = { question: "In what year was Dumb and Dumber released?",
			answer1: "1993",
			answer2: "1994",
			answer3: "1995",
			answer4: "1996",
			correct: "1994",
			gif: "<img class ='gif' src ='assets/images/carrey2.gif'>",
			explanation: "Dumb and Dumber was directed by the Farrelly brothers. Their biggest hit was There's Something About Mary"
},
	q2 = { question: "What is the name on Mary's luggage?",
			answer1: "Samsonite",
			answer2: "Swanson",
			answer3: "Swansen",
			answer4: "Swinson",
			correct: "Samsonite",
			gif: "<img class ='gif' src ='assets/images/carrey1.gif'>",
			explanation: "Mary's last name is Swanson. The luggage only had the name of the brand, Samsonite."
},
	q3 = { question: '"The Shaggin\' Wagon" did not have a working radio. What song did Lloyd and Harry sing to their hitchhiker?', 
			answer1: "We've Got the Whole World in Our Hands",
			answer2: "Camptown Lady",
			answer3: "Kumbayah",
			answer4: "Mocking Bird",
			correct: "Mocking Bird",
			gif: "<img class ='gif' src ='assets/images/mockingbird.gif'>",
			explanation: 'They "mocked" a Carly Simon & James Taylor version of the song.'
},
	q4 = { question: "What is the name of the laxative given to Harry by LLoyd?",
			answer1: "EZ Lax",
			answer2: "Go Go Go",
			answer3: "Turbo Lax",
			answer4: "Reguloid",
			correct: "Turbo Lax",
			gif: "<img class ='gif' src ='assets/images/bathroom.gif'>",
			explanation: 'The bottle says,"For a regular guy, to help stay regular."'

},
	q5 = { question: "Before leaving Rhode Island, What is NOT one of the things that Lloyd sold?",
			answer1: "Baseball Cards",
			answer2: "Old Books",
			answer3: "Petey",
			answer4: "Sack of Marbles",
			correct: "Petey",
			gif: "<img class ='gif' src ='assets/images/bird.gif'>",
			explanation: '"Pretty bird. Yes, can you say pretty bird? Pretty bird, yeah pretty bird... Polly want a cracker?"'
},
	q6 = { question: 'When Lloyd drops his wallet in the "Rhode Island Slut" newspaper vending machine, who does he ask to watch his stuff while he goes to break a dollar?',
			answer1: "A little old lady",
			answer2: "A police officer",
			answer3: "A teenager",
			answer4: "A cowboy",
			correct: "A little old lady",
			gif: "<img class ='gif' src ='assets/images/oldlady.gif'>",
			explanation: '"Thanks. Hey, I guess they\'re right. Senior citizens, although slow and dangerous behind the wheel, can still serve a purpose. I\'ll be right back. Don\'t you go dying on me."'
},
	q7 = { question: "When Mary tells Lloyd that she is flying to Aspen, in what state does he think the city is located?",
			answer1: "California",
			answer2: "Kansas",
			answer3: "Colorado",
			answer4: "Canada",
			correct: "California",
			gif: "<img class ='gif' src ='assets/images/dance.gif'>",
			explanation: "Mmm, California… Beautiful"
}];

$( document ).ready(function() {
    console.log( "ready!");

    	$(".restartbtn").hide();
    	$(".main").hide();
    	$(".fulltimer").hide();

		function time(){
			gifstop();
			$(".iscorrect").empty();
			number = 5;
			intervalId = setInterval(decrement, 1000);
}
		function decrement() {
			number--;
			$(".fulltimer").show();
			$(".timer").html("<h5>" + number + "</h5>");
				if(number === 0){
					$(".iscorrect").html("Sorry, time's up. The correct  answer is " + questions[place].correct);
					$(".main").hide();
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
			$(".fulltimer").hide();
			$(".timer").empty();
			gifnumber = 5;
			intervalId2 = setInterval(gifdecrement, 1000);
}	
		function gifdecrement() {
			gifnumber--;
			if(gifnumber === 0){
				if(place < 7){
					showquestion();
					time();
				}else if(place = 7){
					gifstop();
					$(".iscorrect").hide();
					$(".main").hide();
					showresults();
				}	
}
}
		function gifstop() {
      		clearInterval(intervalId2);
}     		
		function showpara(){
			$(".para").html(questions[place].explanation).show();
			place++,
			console.log("place" + place);
			giftime();
}
		function showquestion() {
			console.log("place" + place);
			$(".para").hide();
			$(".main").show();
			$(".question").html(questions[place].question)
			$(".answer1").html(questions[place].answer1);
			$(".answer2").html(questions[place].answer2);
			$(".answer3").html(questions[place].answer3);
			$(".answer4").html(questions[place].answer4);
			answerable--;			
}	
		function showresults(){
			$(".para").html("Here are your stats:<br>Correct Answers: "+ correct + "<br>Incorrect Answers: " + incorrect + "<br>Unanswered Questions: " + unanswered +"<br>Press the Restart button if you'd like to try again")
			$(".restartbtn").show();	
}
		function restart(){
			place = 0;
			$(".para").hide();
			$(".restartbtn").hide();
			time();
			showquestion();
			unanswered = 0;
			correct = 0;
			incorrect = 0;			
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
				$(".iscorrect").html("Right!! The correct answer is " + questions[place].correct + "<br>" + questions[place].gif);
					correct++;
					$(".main").hide();
					showpara();
			}
			else{
				$(".iscorrect").html("Sorry, you were incorrect. The correct is " + questions[place].correct);
					incorrect++;
					showpara();				
			}
			}
		});
		
		$(".restartbtn").on("click",function(){
				restart();
	});
    });
