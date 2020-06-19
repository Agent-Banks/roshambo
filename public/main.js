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

function handlePlayerOneEndTurn() {
  const playerOneCard = document.querySelector(' .playerOneCard')
  playerOneCard.style.display = 'none'
}

const main = () => {
  const playerOneRock = document.querySelector(' .playerOneCard .rock ')
  playerOneRock.addEventListener('click', handlePlayerOneRockChoice)

  const endPlayerOneTurn = document.querySelector(
    ' .playerOneCard .endPlayerOneTurn '
  )
  endPlayerOneTurn.addEventListener('click', handlePlayerOneEndTurn)
}

document.addEventListener('DOMContentLoaded', main)
