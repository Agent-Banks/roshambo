let playerOneScore = 0
let playerTwoScore = 0
let ties = 0
let playerOneChoice = ''
let playerTwoChoice = ''

function handlePlayerOneRockChoice(event) {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://www.rpsgame.org/assets/img/rock.svg'
}

const main = () => {
  const playerOneRock = document.querySelector(' .playerOneCard .rock ')
  playerOneRock.addEventListener('click', handlePlayerOneRockChoice)
}

document.addEventListener('DOMContentLoaded', main)
