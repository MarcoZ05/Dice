let diceWay = []
let diceNow = [];
let diceUp = [];
let diceRight = [];
let sumOfDiceWay = 0;

function simulateDiceWay(diceWayIndex) {
  if (diceWay[diceWayIndex] == "UP") {
    sumOfDiceWay += diceUp[diceWayIndex];
    diceUp[diceWayIndex + 1] = otherSideOfDice(diceNow[diceWayIndex]);
    diceNow[diceWayIndex + 1] = diceUp[diceWayIndex];
  } else if (diceWay[diceWayIndex] == "RIGHT") {
    sumOfDiceWay += diceRight[diceWayIndex];
    diceRight[diceWayIndex + 1] = otherSideOfDice(diceNow[diceWayIndex]);
    diceNow[diceWayIndex + 1] = diceRight[diceWayIndex];
  } else if (diceWay[diceWayIndex] == "DOWN") {
    sumOfDiceWay += otherSideOfDice(diceUp[diceWayIndex]);
    diceUp[diceWayIndex + 1] = diceNow[diceWayIndex];
    diceNow[diceWayIndex + 1] = otherSideOfDice(diceUp[diceWayIndex]);
  } else if (diceWay[diceWayIndex] == "LEFT") {
    sumOfDiceWay += otherSideOfDice(diceRight[diceWayIndex]);
    diceRight[diceWayIndex + 1] = diceNow[diceWayIndex];
    diceNow[diceWayIndex + 1] = otherSideOfDice(diceRight[diceWayIndex]);
  } else {
    console.error("Invalid value in diceWay: " + diceWay[diceWayIndex]);
  }
}

function otherSideOfDice(x) {
  return 7 - x;
}

function matheOhneGrenzenTest() {
  diceWay = ["UP", "UP", "UP", "UP", "UP", "UP"]
  diceNow = [4];
  diceUp = [5];
  diceRight = [1];
  sumOfDiceWay = diceNow[0];

  outputAll()

  for (let diceWayIndex = 0; diceWayIndex < 64; diceWayIndex++) {

    simulateDiceWay(diceWayIndex)
    outputAll()

    for (let i = 0; i < 6; i++) {
      if (diceWay[i] == "UP") {
        diceWay[i] = "RIGHT";
      } else {
        diceWay[i] = "UP";
        break;
      }
    }
  }
  for (let i = 0; i < 6; i++) {

  }
}

function outputAll() {
  console.log(diceWay)
  console.log(diceNow)
  console.log(diceUp)
  console.log(diceRight)
  console.log(sumOfDiceWay)
}