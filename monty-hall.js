var montyHall = function() {
	var userWin = false;
	
	// Answer
	var options = [];
	var answer = Math.floor(Math.random()*3);
	
	// Create the array with 1 winning answer
	for (var i = 0; i < 3; i++) {
		if (i === answer) {
			options[i] = "x";
		}
		else {
			options[i] = "";
		}
	}
	
	// User answer
	var userAnswerOptions = [];
	var userAnswer = Math.floor(Math.random()*3);
	
	for (var i = 0; i < 3; i++) {
		if (i === userAnswer) {
			userAnswerOptions[i] = "x";
		}
		else {
			userAnswerOptions[i] = "";
		}
	}
	
	if (options.indexOf("x") === userAnswerOptions.indexOf("x")) {
		userWin = true;
	}
	
	//console.log(options);
	//console.log(userAnswerOptions);
	//console.log("Win or lose? " + userWin);
	
	
	for (var i = 0; i < options.length; i++) {
		// win on first try
		if (userWin) {
			var nonWinIndex = [];
			
			
			for (var i = 0; i < options.length; i++) { // Get index of all losing options
				if (options[i] === "") {
					nonWinIndex.push(i);
				}
			}
			
			var indexOfOptionToSplice = Math.floor(Math.random()*2);
			options.splice(indexOfOptionToSplice, 1);
			userAnswerOptions.splice(indexOfOptionToSplice, 1);
			
		}
		
		if (options[i] === "" && userAnswerOptions[i] === "") {
			options.splice(i, 1);
			userAnswerOptions.splice(i, 1);
		}
	}
	
	if (options.indexOf("x") === userAnswerOptions.indexOf("x")) {
		userWin = true;
	}
	
	//console.log(options);
	//console.log(userAnswerOptions);
	return userWin;
}

var wins = 0;
var losses = 0;
var games = 1000;

for (var i = 0; i < games; i++) {
	var winOrLose = montyHall();
	if (winOrLose) {
		wins++;
	}
	else {
		losses++;
	}
}

console.log("Sticking to your guns on the first choice would get you: ")
console.log("Wins: " + wins);
console.log("Losses: " + losses);
