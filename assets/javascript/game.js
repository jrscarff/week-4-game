$(document).ready(function() {
	var winCount = 0;
	var lossCount = 0;
	var yourScore = 0;
	$("#win-count").text(winCount);
	$("#loss-count").text(lossCount);
	function gameStart (){
		var yourScore = 0;
		var randomNumber = (Math.floor(Math.random() * 101) + 19);
		console.log(randomNumber);
		var gem1Number = Math.floor(Math.random() * 11) + 1;
		var gem2Number = Math.floor(Math.random() * 11) + 1;
		var gem3Number = Math.floor(Math.random() * 11) + 1;
		var gem4Number = Math.floor(Math.random() * 11) + 1;
		document.getElementById('random-score').textContent = randomNumber;

		$("#gem1").on("click", function () {
			yourScore += gem1Number;
			document.getElementById('your-score').textContent = yourScore;
			if (yourScore === randomNumber) {
			winCount ++;
			console.log(winCount);
			$("#win-count").text(winCount);
			document.getElementById("message").textContent = "You Won!";
			gameStart();
		}
			else if (yourScore > randomNumber) {
			lossCount ++;
			$("#loss-count").text(lossCount);
			document.getElementById("message").textContent = "You Lost";
			gameStart();
		}

		})
		$("#gem2").on("click", function () {
			yourScore += gem2Number;
			document.getElementById('your-score').textContent = yourScore;
			checkScore(randomNumber);

		})
		$("#gem3").on("click", function () {
			yourScore += gem3Number;
			
			document.getElementById('your-score').textContent = yourScore;
			checkScore(randomNumber);

		})
		$("#gem4").on("click", function () {
			yourScore += gem4Number;
			
			document.getElementById('your-score').textContent = yourScore;
			checkScore(randomNumber);

		})
		document.getElementById('your-score').textContent = yourScore;

	}
	function checkScore (randomNumber) {
		if (yourScore === randomNumber) {
			winCount ++;
			console.log(winCount);
			$("#win-count").text(winCount);
			document.getElementById("message").textContent = "You Won!";
			gameStart();
		}
		else if (yourScore > randomNumber) {
			lossCount ++;
			document.getElementById("message").textContent = "You Lost";
			gameStart();
		}
	}

	gameStart();
})
