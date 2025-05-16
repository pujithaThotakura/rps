function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').innerText = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;

  const winnerText = getWinner(userChoice, computerChoice);
  document.getElementById('winner').innerText = winnerText;
}

function getWinner(user, computer) {
  if (user === computer) {
    return "It's a draw!";
  }

  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "🎉 You win!";
  } else {
    return "💻 Computer wins!";
  }
}
