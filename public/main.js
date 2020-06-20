let playerOneScore = 0
let playerTwoScore = 0
let ties = 0
let playerOneChoice = ''
let playerTwoChoice = ''

function handlePlayerOneRockChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://www.rpsgame.org/assets/img/rock.svg'
  playerOneChoice = 'rock'
}

function handlePlayerOnePaperChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://www.rpsgame.org/assets/img/paper.svg'
  playerOneChoice = 'paper'
}

function handlePlayerOneScissorsChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://www.rpsgame.org/assets/img/scissors.svg'
  playerOneChoice = 'scissors'
}

function handlePlayerOneLizardChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://rpsls.net/images/lizard.png'
  playerOneChoice = 'lizard'
}

function handlePlayerOneSpockChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://rpsls.net/images/spock.png'
  playerOneChoice = 'spock'
}

function handlePlayerTwoRockChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://www.rpsgame.org/assets/img/rock.svg'
  playerTwoChoice = 'rock'
}

function handlePlayerTwoPaperChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://www.rpsgame.org/assets/img/paper.svg'
  playerTwoChoice = 'paper'
}

function handlePlayerTwoScissorsChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://www.rpsgame.org/assets/img/scissors.svg'
  playerTwoChoice = 'scissors'
}
function handlePlayerTwoLizardChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://rpsls.net/images/lizard.png'
  playerTwoChoice = 'lizard'
}

function handlePlayerTwoSpockChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://rpsls.net/images/spock.png'
  playerTwoChoice = 'spock'
}

function handlePlayerOneEndTurn() {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'You must pick before ending turn!'
    return
  }

  const playerOneCard = document.querySelector(' .playerOneCard')
  playerOneCard.style.display = 'none'

  const playerTwoCard = document.querySelector(' .playerTwoCard')
  playerTwoCard.style.display = 'flex'
}

function handlePlayerTwoEndTurn() {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'You must pick before ending turn!'
    return
  }

  const playerOneCard = document.querySelector(' .playerOneCard')
  playerOneCard.style.display = 'flex'

  const gameButtons = document.querySelector('.gameButtonsSection')
  gameButtons.style.display = 'flex'
  gameButtons.style.justifyContent = 'space-around'

  const startGameButton = document.querySelector(
    '.gameButtonsSection .startRound'
  )
  startGameButton.textContent = 'Start New Round'

  if (playerOneChoice === playerTwoChoice) {
    const tie = document.querySelector(' .tieScore')
    ties++
    tie.textContent = `${ties}`

    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'Tie!'
    return
  }

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock')
  ) {
    const playerOneWin = document.querySelector('.playerOneScore')
    playerOneScore++
    playerOneWin.textContent = `${playerOneScore}`

    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'Player One Wins!'
  } else {
    const playerTwoWin = document.querySelector('.playerTwoScore')
    playerTwoScore++
    playerTwoWin.textContent = `${playerTwoScore}`

    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'Player Two Wins!'
  }
}

function handleStartGame() {
  const playerTwoCard = document.querySelector(' .playerTwoCard')
  playerTwoCard.style.display = 'none'

  const startGame = document.querySelector('.gameEndLabel')
  startGame.textContent = 'Game On!'

  const startGameButton = document.querySelector('.gameButtonsSection')
  startGameButton.style.display = 'none'

  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src = ''
  document.querySelector('.playerOneCard .playerOneChoiceImg').src = ''
  playerOneChoice = ''
  playerTwoChoice = ''
}

function handleRestartGame() {
  const startGame = document.querySelector('.gameEndLabel')
  startGame.textContent = 'Press Start Game to Play'

  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src = ''
  document.querySelector('.playerOneCard .playerOneChoiceImg').src = ''
  playerOneChoice = ''
  playerTwoChoice = ''

  const playerOneWin = document.querySelector('.playerOneScore')
  playerOneScore = 0
  playerOneWin.textContent = `${playerOneScore}`

  const playerTwoWin = document.querySelector('.playerTwoScore')
  playerTwoScore = 0
  playerTwoWin.textContent = `${playerTwoScore}`

  const tie = document.querySelector(' .tieScore')
  ties = 0
  tie.textContent = `${ties}`

  const startGameButton = document.querySelector(
    '.gameButtonsSection .startRound'
  )
  startGameButton.textContent = 'Start Game'
}

const main = () => {
  const playerOneRock = document.querySelector(' .playerOneCard .rock ')
  playerOneRock.addEventListener('click', handlePlayerOneRockChoice)

  const playerOnePaper = document.querySelector(' .playerOneCard .paper ')
  playerOnePaper.addEventListener('click', handlePlayerOnePaperChoice)

  const playerOneScissors = document.querySelector(' .playerOneCard .scissors ')
  playerOneScissors.addEventListener('click', handlePlayerOneScissorsChoice)

  const playerOneLizard = document.querySelector(' .playerOneCard .lizard ')
  playerOneLizard.addEventListener('click', handlePlayerOneLizardChoice)

  const playerOneSpock = document.querySelector(' .playerOneCard .spock ')
  playerOneSpock.addEventListener('click', handlePlayerOneSpockChoice)

  const playerTwoRock = document.querySelector(' .playerTwoCard .rock ')
  playerTwoRock.addEventListener('click', handlePlayerTwoRockChoice)

  const playerTwoPaper = document.querySelector(' .playerTwoCard .paper ')
  playerTwoPaper.addEventListener('click', handlePlayerTwoPaperChoice)

  const playerTwoScissors = document.querySelector(' .playerTwoCard .scissors ')
  playerTwoScissors.addEventListener('click', handlePlayerTwoScissorsChoice)

  const playerTwoLizard = document.querySelector(' .playerTwoCard .lizard ')
  playerTwoLizard.addEventListener('click', handlePlayerTwoLizardChoice)

  const playerTwoSpock = document.querySelector(' .playerTwoCard .spock ')
  playerTwoSpock.addEventListener('click', handlePlayerTwoSpockChoice)

  const startGameButton = document.querySelector(
    '.gameButtonsSection .startRound'
  )
  startGameButton.addEventListener('click', handleStartGame)

  const endPlayerOneTurn = document.querySelector(
    ' .playerOneCard .endPlayerOneTurn '
  )
  endPlayerOneTurn.addEventListener('click', handlePlayerOneEndTurn)

  const endPlayerTwoTurn = document.querySelector(
    ' .playerTwoCard .endPlayerTwoTurn '
  )
  endPlayerTwoTurn.addEventListener('click', handlePlayerTwoEndTurn)

  const restart = document.querySelector('.gameButtonsSection .restart')
  restart.addEventListener('click', handleRestartGame)
}

document.addEventListener('DOMContentLoaded', main)
