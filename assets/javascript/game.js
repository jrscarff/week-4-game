$(document).ready(function() {
	var winCount = 0;
	var lossCount = 0;
	$("#win-count").text(winCount);
	$("#loss-count").text(lossCount);
	gameStart();
	

	function gameStart () {
		var yourScore = 0;
			var randomNumber = (Math.floor(Math.random() * 101) + 19);
			var gem1Number = Math.floor(Math.random() * 11) + 1;
			var gem2Number = Math.floor(Math.random() * 11) + 1;
			var gem3Number = Math.floor(Math.random() * 11) + 1;
			var gem4Number = Math.floor(Math.random() * 11) + 1;
			$("#random-score").text(randomNumber);
			$("#your-score").text(yourScore);
		

		function numberCheck (yourScore) {
		if (yourScore === randomNumber) {
			winCount += 1;
			$("#win-count").text(winCount);
			document.getElementById("message").textContent = "You Won!";
			return true
		}
			else if (yourScore > randomNumber) {
			lossCount += 1;
			$("#loss-count").text(lossCount);
			document.getElementById("message").textContent = "You Lost";
			return true
			
		}
	}

		function gameReset() {
			yourScore = 0;
			randomNumber = (Math.floor(Math.random() * 101) + 19);
			gem1Number = Math.floor(Math.random() * 11) + 1;
			gem2Number = Math.floor(Math.random() * 11) + 1;
			gem3Number = Math.floor(Math.random() * 11) + 1;
			gem4Number = Math.floor(Math.random() * 11) + 1;
			$("#random-score").text(randomNumber);
			$("#your-score").text(yourScore);
	}
		$("#gem1").on("click", function () {
			yourScore += gem1Number;
			document.getElementById('your-score').textContent = yourScore;
			if (numberCheck(yourScore)) {
				gameReset();
			} ;

			
		})

		$("#gem2").on("click", function () {
			yourScore += gem2Number;
			document.getElementById('your-score').textContent = yourScore;
			if (numberCheck(yourScore)) {
				gameReset();
			} ;

			
		})

		$("#gem3").on("click", function () {
			yourScore += gem3Number;
			document.getElementById('your-score').textContent = yourScore;
			if (numberCheck(yourScore)) {
				gameReset();
			} ;

			
		})

		$("#gem4").on("click", function () {
			yourScore += gem4Number;
			document.getElementById('your-score').textContent = yourScore;
			if (numberCheck(yourScore)) {
				gameReset();
			} ;

			
		})
}

})

