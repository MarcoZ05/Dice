let diceWay = ["UP","UP","UP","UP","UP","UP"]
let diceNow = [4];
let diceUp = [5];
let diceRight = [1];
let sumOfDiceWay = diceNow[0];

function simulateDiceWay(diceWayIndex) {
  if (diceWay[diceWayIndex] == "UP") {
    sumOfDiceWay += diceUp[diceWayIndex];
    diceUp[diceWayIndex+1] = otherSideOfDice(diceNow[diceWayIndex]);
    diceNow[diceWayIndex+1] = diceUp[diceWayIndex];
  } else if (diceWay[diceWayIndex] == "RIGHT") {
    sumOfDiceWay += diceRight[diceWayIndex];
    diceRight[diceWayIndex+1] = otherSideOfDice(diceNow[diceWayIndex]);
    diceNow[diceWayIndex+1] = diceRight[diceWayIndex];
  } else if (diceWay[diceWayIndex] == "DOWN") {
    sumOfDiceWay += otherSideOfDice(diceUp[diceWayIndex]);
    diceUp[diceWayIndex+1] = diceNow[diceWayIndex];
    diceNow[diceWayIndex+1] = otherSideOfDice(diceUp[diceWayIndex]);
  } else if (diceWay[diceWayIndex] == "LEFT") {
    sumOfDiceWay += otherSideOfDice(diceRight[diceWayIndex]);
    diceRight[diceWayIndex+1] = diceNow[diceWayIndex];
    diceNow[diceWayIndex+1] = otherSideOfDice(diceRight[diceWayIndex]);
  } else {
    console.error("Invalid value in diceWay: "+diceWay[diceWayIndex]);
  }
}

function otherSideOfDice(x){
  return 7-x;
}

for (let i = 0; i < diceWay.length; i++) {
  console.log(diceNow[0]+", "+sumOfDiceWay)
  simulateDiceWay(i);
}
console.log(diceNow[0]+", "+sumOfDiceWay)