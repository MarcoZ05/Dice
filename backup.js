let diceUp = [false, false, false, false, false, false];
let sum;
let max = 0;
let min = 1000;

function matheOhneGrenzen() {
  for (let i1 = 0; i1 < 2 ** diceUp.length; i1++) {
    diceCalc(4, 1, 5);
    if (max <= sum && inField()) {
      maxOutput(i1);
    }
    if (min >= sum && inField()) {
      minOutput(i1);
    }
    for (let i = 0; i < diceUp.length; i++) {
      if (!diceUp[i]) {
        diceUp[i] = true;
        break;
      } else {
        diceUp[i] = false;
      }
    }
  }
}

function diceCalc(x, y, z) {
  /*
    x ist die würfelseite, auf der der würfel ist
    y ist die würfelseite die nach oben geht
    z ist die würfelseite die nach rechts geht
    wenn diceUp == true, dann geht er nach oben
  */

  sum = x;
  let temp;

  for (let i = 0; i < diceUp.length; i++) {
    if (diceUp[i]) {
      sum += y;
      temp = y;
      y = 7 - x;
      x = temp;
    } else {
      temp = z;
      z = 7 - x;
      x = temp;
      sum += z;
    }
    console.log(i);
  }
}

function diceCalcOut(x, y, z) {
  /*
    x ist die würfelseite, auf der der würfel ist
    y ist die würfelseite die nach oben geht
    z ist die würfelseite die nach rechts geht
    wenn diceUp == true, dann geht er nach oben
  */

  sum = x;
  let temp;
  console.log("Bewegung Nr.0: " + x);

  for (let i = 0; i < diceUp.length; i++) {
    if (diceUp[i]) {
      console.log("Bewegung Nr." + (i + 1) + ": " + y);
      sum += y;
      temp = y;
      y = 7 - x;
      x = temp;
    } else {
      console.log("Bewegung Nr." + (i + 1) + ": " + z);
      temp = z;
      z = 7 - x;
      x = temp;
      sum += z;
    }
  }
}

function inField() {
  let counter = 0;
  for (let i = 0; i < diceUp.length; i++) {
    if (diceUp[i]) {
      counter++;
    }
  }
  if (counter == 3) {
    return true;
  } else {
    return false;
  }
}

function minOutput(i1) {
  console.log("MINIMUM");
  console.log("Runde: " + i1);
  console.log("Dice: " + diceUp);
  diceCalcOut(4, 1, 5);
  console.log("Summe: " + sum);
  console.log("");
  min = sum;
}

function maxOutput(i1) {
  console.log("MAXIMUM");
  console.log("Runde: " + i1);
  console.log("Dice: " + diceUp);
  diceCalcOut(4, 1, 5);
  console.log("Summe: " + sum);
  console.log("");
  max = sum;
}

matheOhneGrenzen();
