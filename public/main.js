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
  const playerOneCard = document.querySelector(' .playerOneCard')
  playerOneCard.style.display = 'none'
}

function handlePlayerTwoEndTurn() {
  const playerOneCard = document.querySelector(' .playerOneCard')
  playerOneCard.style.display = 'flex'

  if (playerOneChoice === playerTwoChoice) {
    const tie = document.querySelector(' .tieScore')
    tie.textContent++
  }

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock')
  ) {
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
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
