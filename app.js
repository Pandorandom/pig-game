/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, diceDOM, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		// 1. Random number needed (dice)
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. Display the result
		var diceDOM = document.querySelector('.dice');
		document.querySelector('.dice').style.display = 'block';
		document.querySelector('.dice').src = 'dice-' + dice + '.png';

		// 3. Update the round score only IF the rolled number was NOT a 1.
		if (dice !== 1) {
			// Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			// Next player
			nextPlayer();
		}
	}
});

// save current score to total score
document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add current score to global score.
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// Check if player won the game
		if (scores[activePlayer] >= 20) {
			document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			// Next player
			nextPlayer();
		}
	}

});

function nextPlayer() {
	// Next Player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-1').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	// break down the game
	// reset global score array
	scores = [0,0];
	// reset active player to left side (player 1)
	activePlayer = 0;
	// set score for the 'round' to 0
	roundScore = 0;
	// hide the die on the DOM
	document.querySelector('.dice').style.display = 'none';
	// set global score display text content to 0 for both players
	document.getElementById('score-0').textContent = '0';
	//  set global score display text content to 0 for both players
	document.getElementById('score-1').textContent = '0';
	//  set current score display text content to 0 for both players
	document.getElementById('current-1').textContent = '0';
	//  set current score display text content to 0 for both players
	document.getElementById('current-1').textContent = '0';
	// set player 1 name
	document.getElementById('name-0').textContent = 'Player 1';
	// set player 2 name
	document.getElementById('name-1').textContent = 'Player 2';
	// remove winner class from player 1
	document.querySelector('.player-0-panel').classList.remove('winner');
	// remove winner class from player 2
	document.querySelector('.player-1-panel').classList.remove('winner');
	// remove active class from player 1
	document.querySelector('.player-0-panel').classList.remove('active');
	// remove active class from player 2
	document.querySelector('.player-1-panel').classList.remove('active');
	// add active class from player 1
	document.querySelector('.player-0-panel').classList.add('active');
	// set state variable for active game
	gamePlaying = true;
}







// setters
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// getters
//var x = document.querySelector('#score-0').textContent;



// add or remove class attributes from html tag
//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('.player-1-panel').classList.add('active');

// toggle attributes
//document.querySelector('.player-0-panel').classList.toggle('active');







//
