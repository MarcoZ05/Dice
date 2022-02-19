let diceWay = [];
let diceNow = [];
let diceUp = [];
let diceRight = [];
let sumOfDiceWay = [];

matheOhneGrenzenTest();

function simulateDiceWay(diceWayIndex) {
  if (diceWay[diceWayIndex] == "UP") {
    sumOfDiceWay += diceUp[diceWayIndex];
    diceUp.push(otherSideOfDice(diceNow[diceWayIndex]));
    diceNow.push(diceUp[diceWayIndex]);
    diceRight.push(diceRight[diceWayIndex]);
  } else if (diceWay[diceWayIndex] == "RIGHT") {
    sumOfDiceWay += diceRight[diceWayIndex];
    diceRight.push(otherSideOfDice(diceNow[diceWayIndex]));
    diceNow.push(diceRight[diceWayIndex]);
    diceUp.push(diceUp[diceWayIndex]);
  } else if (diceWay[diceWayIndex] == "DOWN") {
    sumOfDiceWay += otherSideOfDice(diceUp[diceWayIndex]);
    diceUp.push(diceNow[diceWayIndex]);
    diceNow.push(otherSideOfDice(diceUp[diceWayIndex]));
    diceRight.push(diceRight[diceWayIndex]);
  } else if (diceWay[diceWayIndex] == "LEFT") {
    sumOfDiceWay += otherSideOfDice(diceRight[diceWayIndex]);
    diceRight.push(diceNow[diceWayIndex]);
    diceNow.push(otherSideOfDice(diceRight[diceWayIndex]));
    diceUp.push(diceUp[diceWayIndex]);
  } else {
    console.error("Invalid value in diceWay: " + diceWay[diceWayIndex]);
  }
}

function otherSideOfDice(x) {
  return 7 - x;
}

function matheOhneGrenzenTest() {
  let amountDiceUpInDiceWay = 0;

  diceWay = ["UP", "UP", "UP", "UP", "UP", "UP"];
  diceNow = [4];
  diceUp = [1];
  diceRight = [5];
  sumOfDiceWay = [diceNow[0]];

  for (let counter = 0; counter < 64; counter++) {
    for (let diceWayIndex = 0; diceWayIndex < diceWay.length; diceWayIndex++) {
      simulateDiceWay(diceWayIndex);
      if (diceWay[diceWayIndex] == "UP") {
        amountDiceUpInDiceWay++;
      }
    }

    if (amountDiceUpInDiceWay == 3) {
      outputAll();
    }

    diceNow = [4];
    diceUp = [1];
    diceRight = [5];
    sumOfDiceWay = diceNow[0];
    sumOfDiceWay = [diceNow[0]];

    for (let i = 0; i < 6; i++) {
      if (diceWay[i] == "RIGHT") {
        diceWay[i] = "UP";
      } else {
        diceWay[i] = "RIGHT";
        break;
      }
    }
  }
}

function outputAll() {
  console.log("diceWay: " + diceWay);
  console.log("diceNow: " + diceNow);
  console.log("diceUp: " + diceUp);
  console.log("diceRight: " + diceRight);
  console.log("sumOfDiceWay: " + sumOfDiceWay);
  console.log(" ");
}
