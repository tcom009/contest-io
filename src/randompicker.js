const getNumbers = (params) => {
  const randomNumber = Math.round(Math.random(params[0], params[1]) * 100);
  return randomNumber;
};

const getPlayer = (selectedNumber) => {
  if (selectedNumber <= 33) {
    return 'player1';
  } else if (selectedNumber <= 66 && selectedNumber > 33) {
    return 'player2';
  } else if (selectedNumber <= 99 && selectedNumber > 66) {
    return 'player3';
  } else {
    return 'noplayer';
  }
};

//if number is odd returns false and true if even
const selectTwoPlayers = () => {
  const number = getNumbers([1, 100]);
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const selectThreePlayers = () => {
  const playersOrder = [];
  const fullRange = [1, 99];
  while(playersOrder.length !== 3)
  {
  if (playersOrder.length === 0) {
    playersOrder.push(getPlayer(getNumbers(fullRange)));
  } else if (playersOrder.includes('player1') && playersOrder.length === 1) {
    if (selectTwoPlayers()) {
      playersOrder.push('player2', 'player3');
    } else {
      playersOrder.push('player3', 'player2');
    }
  } else if (playersOrder.includes('player2') && playersOrder.length === 1) {
    if (selectTwoPlayers()) {
      playersOrder.push('player1', 'player3');
    } else {
      playersOrder.push('player3', 'player1');
    }
  } else if (playersOrder.includes('player3') && playersOrder.length === 1) {
    if (selectTwoPlayers()) {
      playersOrder.push('player2', 'player1');
    } else {
      playersOrder.push('player1', 'player2');
    }
  }}

  console.log(playersOrder);
};

selectThreePlayers();
