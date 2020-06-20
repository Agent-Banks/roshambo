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
}

const main = () => {
  const playerOneRock = document.querySelector(' .playerOneCard .rock ')
  playerOneRock.addEventListener('click', handlePlayerOneRockChoice)

  const playerOnePaper = document.querySelector(' .playerOneCard .paper ')
  playerOnePaper.addEventListener('click', handlePlayerOnePaperChoice)

  const playerOneScissors = document.querySelector(' .playerOneCard .scissors ')
  playerOneScissors.addEventListener('click', handlePlayerOneScissorsChoice)

  const playerTwoRock = document.querySelector(' .playerTwoCard .rock ')
  playerTwoRock.addEventListener('click', handlePlayerTwoRockChoice)

  const playerTwoPaper = document.querySelector(' .playerTwoCard .paper ')
  playerTwoPaper.addEventListener('click', handlePlayerTwoPaperChoice)

  const playerTwoScissors = document.querySelector(' .playerTwoCard .scissors ')
  playerTwoScissors.addEventListener('click', handlePlayerTwoScissorsChoice)

  const startGameButton = document.querySelector('.gameButtonsSection')
  startGameButton.addEventListener('click', handleStartGame)

  const endPlayerOneTurn = document.querySelector(
    ' .playerOneCard .endPlayerOneTurn '
  )
  endPlayerOneTurn.addEventListener('click', handlePlayerOneEndTurn)

  const endPlayerTwoTurn = document.querySelector(
    ' .playerTwoCard .endPlayerTwoTurn '
  )
  endPlayerTwoTurn.addEventListener('click', handlePlayerTwoEndTurn)
}

document.addEventListener('DOMContentLoaded', main)
