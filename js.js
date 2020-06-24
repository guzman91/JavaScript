//RENAME OBJECT NAME
let objectName = {
  //declaration of variables for input Values
  userInputArray: [],
  inputValueA: undefined,
  inputValueB: undefined,
  inputValueC: undefined,
  inputValueD: undefined,

  //declaration of variables for input HTML Path
  inputPathA: undefined,
  inputPathB: undefined,
  inputPathC: undefined,
  inputPathD: undefined,

  /* Validation result: 
  undefined - validation was successful; 
  1         - validation was unsuccessful */
  validationResult: undefined,

  //declaration of variables for result Values
  resultArray: [],

  resultValue1: undefined,
  resultValue2: undefined,
  resultValue3: undefined,
  resultValue4: undefined,
  resultValue5: undefined,
  resultValue6: undefined,
  resultValue7: undefined,

  //declaration of variables for result HTML Path
  resultPath1: undefined,
  resultPath2: undefined,
  resultPath3: undefined,
  resultPath4: undefined,
  resultPath5: undefined,
  resultPath6: undefined,
  resultPath7: undefined,

  //Methods declaration
  setDefaultValuesForKeys: function () {
    for (i in this) {
      if (i == "setDefaultValuesForKeys") break;
      i == "userInputArray" || i == "resultArray"
        ? (this[i] = [])
        : (this[i] = undefined);
    }
  },

  saveUserInput: function (valueA, valueB, valueC, valueD) {
    for (value in arguments) {
      if (arguments[value] === undefined) continue;
      this.userInputArray.push(parseNumber(arguments[value]));
    }

    this.inputValueA = parseNumber(valueA);
    this.inputValueB = parseNumber(valueB);
    this.inputValueC = parseNumber(valueC);
    this.inputValueD = parseNumber(valueD);
  },

  saveInputPath: function (inputPathA, inputPathB, inputPathC, inputPathD) {
    this.inputPathA = inputPathA;
    this.inputPathB = inputPathB;
    this.inputPathC = inputPathC;
    this.inputPathD = inputPathD;
  },

  saveResultPath: function (
    resultPath1,
    resultPath2,
    resultPath3,
    resultPath4,
    resultPath5,
    resultPath6,
    resultPath7
  ) {
    this.resultPath1 = resultPath1;
    this.resultPath2 = resultPath2;
    this.resultPath3 = resultPath3;
    this.resultPath4 = resultPath4;
    this.resultPath5 = resultPath5;
    this.resultPath6 = resultPath6;
    this.resultPath7 = resultPath7;
  },

  setInputOutlineWidth: function (
    inputPathA,
    inputPathB,
    inputPathC,
    inputPathD
  ) {
    let validInputOutlineWidth = "0px";
    let invalidInputOutlineWidth = "1px";

    for (i in arguments) {
      if (arguments[i] === undefined) break;
      arguments[i].style.outlineWidth = isNaN(this.userInputArray[i])
        ? invalidInputOutlineWidth
        : validInputOutlineWidth;
    }
  },

  showResalt: function (resultPath) {
    let i = 0;
    let parsingResult = this.validationResult === undefined;

    for (i in arguments) {
      if (arguments[i] === undefined) break;
      arguments[i].innerHTML = parsingResult ? this.resultArray[i] : "";
    }
  },

  setParsingResult: function (value) {
    for (i in arguments) {
      if (isNaN(arguments[i]) && arguments[i] !== undefined)
        this.validationResult = 1; // 1 - validation was unsuccessful
    }
  },

  firstTaskSubmitClick: function (
    valueA,
    valueB,
    valueC,
    valueD,
    inputPathA,
    inputPathB,
    inputPathC,
    inputPathD,
    resultPath1,
    resultPath2,
    resultPath3,
    resultPath4,
    resultPath5,
    resultPath6,
    resultPath7
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB, valueC, valueD);
    this.saveInputPath(inputPathA, inputPathB, inputPathC, inputPathD);
    this.saveResultPath(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5,
      resultPath6,
      resultPath7
    );
    this.setInputOutlineWidth(inputPathA, inputPathB, inputPathC, inputPathD);
    this.setParsingResult(
      this.inputValueA,
      this.inputValueB,
      this.inputValueC,
      this.inputValueD
    );
    sumArguments(this.userInputArray);
    differenceArguments(this.inputValueA, this.inputValueB);
    multiplicationArguments(this.userInputArray);
    this.showResalt(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5,
      resultPath6,
      resultPath7
    );
  },

  secondTaskSubmitClick: function (
    valueA,
    inputPathA,
    resultPath1,
    resultPath2
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA);
    this.saveInputPath(inputPathA);
    this.saveResultPath(resultPath1, resultPath2);
    this.setInputOutlineWidth(inputPathA);
    this.setParsingResult(this.inputValueA);
    cubeVolume(this.inputValueA);
    cubeSurfaceArea(this.inputValueA);
    this.showResalt(resultPath1, resultPath2);
  },

  fourthTaskSubmitClick: function (
    valueA,
    valueB,
    inputPathA,
    inputPathB,
    resultPath1,
    resultPath2
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB);
    this.saveInputPath(inputPathA, inputPathB);
    this.saveResultPath(resultPath1, resultPath2);
    this.setInputOutlineWidth(inputPathA, inputPathB);
    this.setParsingResult(this.inputValueA, this.inputValueB);
    arithmeticalMean(this.inputValueA, this.inputValueB);
    geometrMean(this.inputValueA, this.inputValueB);
    this.showResalt(resultPath1, resultPath2);
  },

  fifthTaskSubmitClick: function (
    valueA,
    valueB,
    inputPathA,
    inputPathB,
    resultPath1,
    resultPath2
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB);
    this.saveInputPath(inputPathA, inputPathB);
    this.saveResultPath(resultPath1, resultPath2);
    this.setInputOutlineWidth(inputPathA, inputPathB);
    this.setParsingResult(this.inputValueA, this.inputValueB);
    cubeArithmeticMean(this.inputValueA, this.inputValueB);
    geometricMeanModules(this.inputValueA, this.inputValueB);
    this.showResalt(resultPath1, resultPath2);
  },

  tenthTaskSubmitClick: function (valueA, inputPathA, resultPath1) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA);
    this.saveInputPath(inputPathA);
    this.saveResultPath(resultPath1);
    this.setInputOutlineWidth(inputPathA);
    this.setParsingResult(this.inputValueA);
    stoneFallTime(this.inputValueA);
    this.showResalt(resultPath1);
  },

  twelfthTaskSubmitClick: function (valueA, inputPathA, resultPath1) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA);
    this.saveInputPath(inputPathA);
    this.saveResultPath(resultPath1);
    this.setInputOutlineWidth(inputPathA);
    this.setParsingResult(this.inputValueA);
    equilateralTriangleArea(this.inputValueA);
    this.showResalt(resultPath1);
  },

  twentyThirdTaskSubmitClick: function (
    valueA,
    valueB,
    valueC,
    inputPathA,
    inputPathB,
    inputPathC,
    resultPath1,
    resultPath2,
    resultPath3,
    resultPath4,
    resultPath5
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB, valueC);
    this.saveInputPath(inputPathA, inputPathB, inputPathC);
    this.saveResultPath(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5
    );
    this.setInputOutlineWidth(inputPathA, inputPathB, inputPathC);
    this.setParsingResult(this.inputValueA, this.inputValueB, this.inputValueC);
    triangleLengths(this.inputValueA, this.inputValueB, this.inputValueC);
    medianLengths(this.inputValueA, this.inputValueB, this.inputValueC);
    bisectorLengths(this.inputValueA, this.inputValueB, this.inputValueC);
    excircleTriangleRadius(
      this.inputValueA,
      this.inputValueB,
      this.inputValueC
    );
    incircleTriangleRadius(
      this.inputValueA,
      this.inputValueB,
      this.inputValueC
    );
    this.showResalt(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5
    );
  },

  twentyFourthTaskSubmitClick: function (
    valueA,
    valueB,
    valueC,
    valueD,
    inputPathA,
    inputPathB,
    inputPathC,
    inputPathD,
    resultPath1
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB, valueC, valueD);
    this.saveInputPath(inputPathA, inputPathB, inputPathC, inputPathD);
    this.saveResultPath(resultPath1);
    this.setInputOutlineWidth(inputPathA, inputPathB, inputPathC, inputPathD);
    this.setParsingResult(
      this.inputValueA,
      this.inputValueB,
      this.inputValueC,
      this.inputValueD
    );
    calculatDistance(
      this.inputValueA,
      this.inputValueB,
      this.inputValueC,
      this.inputValueD
    );
    this.showResalt(resultPath1);
  },

  thirtyThirdTaskSubmitClick: function (
    valueA,
    valueB,
    valueC,
    inputPathA,
    inputPathB,
    inputPathC,
    resultPath1
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB, valueC);
    this.saveInputPath(inputPathA, inputPathB, inputPathC);
    this.saveResultPath(resultPath1);
    this.setInputOutlineWidth(inputPathA, inputPathB, inputPathC);
    this.setParsingResult(this.inputValueA, this.inputValueB, this.inputValueC);
    calculationMaxMin(this.userInputArray);
    this.showResalt(resultPath1);
  },

  thirtyFiveTaskSubmitClick: function (
    valueA,
    valueB,
    valueC,
    inputPathA,
    inputPathB,
    inputPathC,
    resultPath1,
    resultPath2
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB, valueC);
    this.saveInputPath(inputPathA, inputPathB, inputPathC);
    this.saveResultPath(resultPath1, resultPath2);
    this.setInputOutlineWidth(inputPathA, inputPathB, inputPathC);
    this.setParsingResult(this.inputValueA, this.inputValueB, this.inputValueC);
    maxThirtyFiveTask(this.userInputArray);
    minThirtyFiveTask(this.userInputArray);
    this.showResalt(resultPath1, resultPath2);
  },

  thirtySixthTaskSubmitClick: function (
    valueA,
    valueB,
    valueC,
    inputPathA,
    inputPathB,
    inputPathC,
    resultPath1
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB, valueC);
    this.saveInputPath(inputPathA, inputPathB, inputPathC);
    this.saveResultPath(resultPath1);
    this.setInputOutlineWidth(inputPathA, inputPathB, inputPathC);
    this.setParsingResult(this.inputValueA, this.inputValueB, this.inputValueC);
    checkInequality(this.inputValueA, this.inputValueB, this.inputValueC);
    this.showResalt(resultPath1);
  },

  thirtyseventhTaskSubmitClick: function (
    valueA,
    valueB,
    valueC,
    inputPathA,
    inputPathB,
    inputPathC,
    resultPath1
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB, valueC);
    this.saveInputPath(inputPathA, inputPathB, inputPathC);
    this.saveResultPath(resultPath1);
    this.setInputOutlineWidth(inputPathA, inputPathB, inputPathC);
    this.setParsingResult(this.inputValueA, this.inputValueB, this.inputValueC);
    checkInequalityTaskThirtySeven(
      this.inputValueA,
      this.inputValueB,
      this.inputValueC
    );
    this.showResalt(resultPath1);
  },

  seventySeventhTaskSubmitClick: function (
    valueA,
    inputPathA,
    resultPath1,
    resultPath2,
    resultPath3,
    resultPath4,
    resultPath5,
    resultPath6,
    resultPath7
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA);
    this.saveInputPath(inputPathA);
    this.saveResultPath(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5,
      resultPath6,
      resultPath7
    );
    this.setInputOutlineWidth(inputPathA);
    this.setParsingResult(this.inputValueA);
    MathPow(2, this.inputValueA);
    Nfactorial(this.inputValueA);
    taskSeventySevenBCalculation(this.inputValueA);
    taskSeventySevenGCalculation(this.inputValueA);
    taskSeventySevenDCalculation(this.inputValueA);
    taskSeventySevenECalculation(this.inputValueA);
    taskSeventySevenJCalculation(this.inputValueA);
    this.showResalt(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5,
      resultPath6,
      resultPath7
    );
  },

  seventyEighthTaskSubmitClick: function (
    valueA,
    valueB,
    inputPathA,
    inputPathB,
    resultPath1,
    resultPath2,
    resultPath3,
    resultPath4,
    resultPath5
  ) {
    this.setDefaultValuesForKeys();
    this.saveUserInput(valueA, valueB);
    this.saveInputPath(inputPathA, inputPathB);
    this.saveResultPath(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5
    );
    this.setInputOutlineWidth(inputPathA, inputPathB);
    this.setParsingResult(this.inputValueA, this.inputValueB);
    MathPow(this.inputValueA, this.inputValueB);
    taskSeventyEighthBCalculation(this.inputValueA, this.inputValueB);
    taskSeventyEighthVCalculation(this.inputValueA, this.inputValueB);
    taskSeventyEighthGCalculation(this.inputValueA, this.inputValueB);
    taskSeventyEighthDCalculation(this.inputValueA, this.inputValueB);
    this.showResalt(
      resultPath1,
      resultPath2,
      resultPath3,
      resultPath4,
      resultPath5
    );
  },
};

//Additional Functions
function parseNumber(value) {
  return value === undefined ? undefined : value === "" ? NaN : +value;
}

function sumArguments(array) {
  if (this.validationResult === undefined) {
    let sum = 0;
    let roundedNumber;

    for (i = 0; i < array.length; i++) {
      if (isNaN(array[i])) continue;
      sum += array[i];
    }
    roundedNumber = +sum.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function differenceArguments(valueA, valueB) {
  let roundedNumber;

  if (this.validationResult === undefined) {
    let dif = valueA - valueB;
    roundedNumber = +dif.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function multiplicationArguments(array) {
  let roundedNumber;

  if (this.validationResult === undefined) {
    let mult = 1;
    for (i = 0; i < array.length; i++) {
      if (isNaN(array[i])) continue;
      mult *= array[i];
    }
    roundedNumber = +mult.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function saveResult(result) {
  objectName.resultArray.push(result);
}

function cubeVolume(valueA) {
  let roundedNumber, cubeVolume;

  if (this.validationResult === undefined) {
    cubeVolume = Math.pow(valueA, 3);
    roundedNumber = +cubeVolume.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function cubeSurfaceArea(valueA) {
  let roundedNumber, cubeSurfaceArea;

  if (this.validationResult === undefined) {
    cubeSurfaceArea = 4 * Math.pow(valueA, 2);
    roundedNumber = +cubeSurfaceArea.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function arithmeticalMean(valueA, valueB) {
  let roundedNumber, arithmeticalMean;

  if (this.validationResult === undefined) {
    arithmeticalMean = (valueA + valueB) / 2;
    roundedNumber = +arithmeticalMean.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function geometrMean(valueA, valueB) {
  let roundedNumber, geometrMean;

  if (this.validationResult === undefined) {
    geometrMean = Math.sqrt(valueA * valueB);
    roundedNumber = +geometrMean.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function cubeArithmeticMean(valueA, valueB) {
  let roundedNumber, cubeArithmeticMean;

  if (this.validationResult === undefined) {
    cubeArithmeticMean = (Math.pow(valueA, 3) + Math.pow(valueB, 3)) / 2;
    roundedNumber = +cubeArithmeticMean.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function geometricMeanModules(valueA, valueB) {
  let roundedNumber, cubeArithmeticMean;

  if (this.validationResult === undefined) {
    cubeArithmeticMean = Math.sqrt(Math.abs(valueA * valueB));
    roundedNumber = +cubeArithmeticMean.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function stoneFallTime(valueA) {
  const g = 9.8075; //gravitational acceleration
  let roundedNumber, stoneFallTime;

  if (this.validationResult === undefined) {
    stoneFallTime = Math.sqrt((2 * valueA) / g);
    roundedNumber = +stoneFallTime.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function equilateralTriangleArea(valueA) {
  let roundedNumber, TriangleArea;

  if (this.validationResult === undefined) {
    TriangleArea = (Math.sqrt(3) * Math.pow(valueA, 2)) / 4;
    roundedNumber = +TriangleArea.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function triangleLengths(valueA, valueB, valueC) {
  let roundedNumber, triangleLengths, p;

  if (this.validationResult === undefined) {
    p = (valueA + valueB + valueC) / 2;
    triangleLengths =
      (2 * Math.sqrt(p * (p - valueA) * (p - valueB) * (p - valueC))) / valueA;
    roundedNumber = +triangleLengths.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function medianLengths(valueA, valueB, valueC) {
  let roundedNumber, medianLengths;

  if (this.validationResult === undefined) {
    medianLengths =
      Math.sqrt(
        2 * Math.pow(valueB, 2) + 2 * Math.pow(valueC, 2) - Math.pow(valueA, 2)
      ) / 2;
    roundedNumber = +medianLengths.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function bisectorLengths(valueA, valueB, valueC) {
  let roundedNumber, bisectorLengths;

  if (this.validationResult === undefined) {
    bisectorLengths =
      Math.sqrt(
        valueA *
          valueB *
          (valueA + valueB + valueC) *
          (valueA + valueB - valueC)
      ) /
      (valueA + valueB);
    roundedNumber = +bisectorLengths.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function excircleTriangleRadius(valueA, valueB, valueC) {
  let roundedNumber, excircleTriangleRadius, p;

  if (this.validationResult === undefined) {
    p = (valueA + valueB + valueC) / 2;
    excircleTriangleRadius =
      (valueA * valueB * valueC) /
      (4 * Math.sqrt(p * (p - valueA) * (p - valueB) * (p - valueC)));
    roundedNumber = +excircleTriangleRadius.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function incircleTriangleRadius(valueA, valueB, valueC) {
  let roundedNumber, incircleTriangleRadius, p;

  if (this.validationResult === undefined) {
    p = (valueA + valueB + valueC) / 2;
    incircleTriangleRadius = Math.sqrt(
      ((p - valueA) * (p - valueB) * (p - valueC)) / p
    );
    roundedNumber = +incircleTriangleRadius.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function calculatDistance(valueA, valueB, valueC, valueD) {
  let roundedNumber, distance;

  if (this.validationResult === undefined) {
    distance = Math.sqrt(
      Math.pow(valueC - valueA, 2) + Math.pow(valueD - valueB, 2)
    );
    roundedNumber = +distance.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function calculationMaxMin(array) {
  let max, min, result;

  if (this.validationResult === undefined) {
    max = Math.max.apply(null, array);
    min = Math.min.apply(null, array);
    result = "Max value - " + max + "<br>" + "Min value - " + min;
    this.saveResult(result);
  }
}

function maxThirtyFiveTask(array) {
  let max, multiplyInput, sumInput, mult, sum, result;
  mult = 1;
  sum = 0;

  if (this.validationResult === undefined) {
    for (i = 0; i < array.length; i++) {
      mult *= array[i];
      sum += array[i];
    }
    multiplyInput = +mult.toFixed(3);
    sumInput = +sum.toFixed(3);

    max = multiplyInput > sumInput ? multiplyInput : sumInput;
    result = " = (" + sumInput + ", " + multiplyInput + ") = " + max;
    this.saveResult(result);
  }
}

function minThirtyFiveTask(array) {
  let min, multiplyInput, sumInput, result, denominator, mult, sum;
  denominator = 1;

  mult = 1;
  sum = 0;

  if (this.validationResult === undefined) {
    for (i = 0; i < array.length; i++) {
      mult *= array[i];

      if (i === 2) denominator = 2;
      sum += array[i] / denominator;
    }
    multiplyInput = +mult.toFixed(3);
    sumInput = +sum.toFixed(3);

    min = multiplyInput > sumInput ? sumInput : multiplyInput;
    result =
      " = (" +
      sumInput +
      ", " +
      multiplyInput +
      ") = " +
      +(Math.sqrt(min) + 1).toFixed(3);
    this.saveResult(result);
  }
}

function checkInequality(valueA, valueB, valueC) {
  let result;

  if (this.validationResult === undefined) {
    result = valueA < valueB && valueB < valueC ? " true" : " false";
    this.saveResult(result);
  }
}

function checkInequalityTaskThirtySeven(valueA, valueB, valueC) {
  let inequalityResult,
    result = "a &ge; b &ge; c - ";

  if (this.validationResult === undefined) {
    inequalityResult = valueA >= valueB && valueB >= valueC;

    result = inequalityResult
      ? "true => a: " + valueA * 2 + "; b: " + valueB * 2 + "; c: " + valueC * 2
      : "false => |a| :" +
        Math.abs(valueA) +
        "; |b|: " +
        Math.abs(valueB) +
        "; |c|: " +
        Math.abs(valueC);

    this.saveResult(result);
  }
}

//functions for task 77

function MathPow(valueA, valueB) {
  let result, roundedNumber;

  if (this.validationResult === undefined) {
    result = Math.pow(valueA, valueB);
    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function Nfactorial(value) {
  let result = 1,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= value; i++) result *= i;

    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventySevenBCalculation(value) {
  let result = 1,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= value; i++) result *= 1 + 1 / i ** 2;

    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventySevenGCalculation(value) {
  let result = 0,
    sumSin = 0,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= value; i++) {
      sumSin += Math.sin(i);
      result += 1 / sumSin;
    }

    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventySevenDCalculation(value) {
  let result = 0,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = value; i >= 1; i--) result += Math.sqrt(2 + result);

    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventySevenECalculation(value) {
  let result = 1,
    sumSin = 0,
    sumCos = 0,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= value; i++) {
      sumSin += Math.sin(i);
      sumCos += Math.cos(i);
      result *= sumCos / sumSin;
    }

    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventySevenJCalculation(value) {
  let result = 0,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = value; i >= 1; i--) {
      result += Math.sqrt(3 * (i - 1) + Math.sqrt(3 * i) + result);
    }

    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

//functions for task 78

function taskSeventyEighthBCalculation(valueA, valueB) {
  let result = 1,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= valueB; i++) result *= valueA + (i - 1);

    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventyEighthVCalculation(valueA, valueB) {
  let result = 1 / valueA,
    sumvalueA = 1,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= valueB; i++) {
      sumvalueA *= valueA + i;
      result += 1 / (valueA * sumvalueA);
    }
    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventyEighthGCalculation(valueA, valueB) {
  let result = 0,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= valueB; i++) {
      result += 1 / valueA ** Math.pow(2, i);
    }
    roundedNumber = " = " + +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

function taskSeventyEighthDCalculation(valueA, valueB) {
  let result = 1,
    roundedNumber;

  if (this.validationResult === undefined) {
    for (let i = 1; i <= valueB; i++) {
      result *= valueA - Math.pow(i, 2);
    }
    roundedNumber = " = " + valueA * +result.toFixed(2);
    this.saveResult(roundedNumber);
  }
}

//task 1
function mainClick() {
  var input = document.querySelectorAll("#first-task  input");
  var span = document.querySelectorAll(".task1");

  var a = +input[1].value;
  var b = +input[2].value;

  input[1].style.outlineWidth =
    isNaN(a) || input[1].value.toString().length == 0 ? "1px" : "0px";

  input[2].style.outlineWidth =
    isNaN(b) || input[2].value.toString().length == 0 ? "1px" : "0px";

  if (
    isNaN(a) ||
    input[1].value.toString().length == 0 ||
    isNaN(b) ||
    input[2].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for first task");
  } else {
    //new check start
    var i = a.toString().includes(".")
      ? a.toString().split(".").pop().length
      : 0;

    var i1 = b.toString().includes(".")
      ? b.toString().split(".").pop().length
      : 0;
    var leng = i >= i1 ? i : i1;

    //cycle x10
    for (let index = 0; index < leng; index++) {
      a *= 10;
      b *= 10;
    }

    var sum, dif, mult;
    sum = a + b;
    dif = a - b;
    mult = a * b;

    //cycle /10
    for (let index = 0; index < leng; index++) {
      sum /= 10;
      dif /= 10;
      mult /= 100;
    }

    span[0].innerHTML = sum;
    span[1].innerHTML = dif;
    span[2].innerHTML = mult;
  }
}

//task 3
function cubeCalculation() {
  var input = document.querySelector(".cube-input");
  var span = document.querySelectorAll(".task2");
  var a = +input.value;
  input.style.outlineWidth =
    isNaN(a) || input.value.toString().length == 0 ? "1px" : "0px";
  if (isNaN(a) || input.value.toString().length == 0) {
    console.log("Incorect value in inputs for third task");
  } else {
    span[0].innerHTML = Math.pow(a, 3);
    span[1].innerHTML = 4 * Math.pow(a, 2);
  }
}

//task 4
function geometricMean() {
  var input = document.querySelectorAll(".third-task  input");
  var span = document.querySelectorAll(".task3");
  var a = +input[1].value;
  var b = +input[2].value;
  input[1].style.outlineWidth =
    isNaN(a) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(b) || input[2].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(a) ||
    input[1].value.toString().length == 0 ||
    isNaN(b) ||
    input[2].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    span[0].innerHTML = (a + b) / 2;
    span[1].innerHTML = Math.sqrt(a * b);
  }
}

//task 5
function abcMean() {
  var input = document.querySelectorAll(".fourth-task  input");
  var span = document.querySelectorAll(".task4");
  var a = Math.abs(+input[1].value);
  var b = Math.abs(+input[2].value);
  input[1].style.outlineWidth =
    isNaN(a) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(b) || input[2].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(a) ||
    input[1].value.toString().length == 0 ||
    isNaN(b) ||
    input[2].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    span[0].innerHTML = (Math.pow(a, 3) + Math.pow(b, 3)) / 2;
    span[1].innerHTML = Math.sqrt(a * b);
  }
}

//task 10
function heightFormula() {
  var input = document.querySelector(".height-input");
  var span = document.querySelector(".task5");
  var h = +input.value;
  var result = isNaN(h) || input.value.toString().length == 0;
  input.style.outlineWidth =
    isNaN(h) || input.value.toString().length == 0 ? "1px" : "0px";
  if (isNaN(h) || input.value.toString().length == 0) {
    console.log("Incorect value in inputs for third task");
  } else {
    span.innerHTML = Math.sqrt((2 * h) / 9.8075);
  }
}

//task 12
function triangleArea() {
  var input = document.querySelector(".sixth-input");
  var span = document.querySelector(".task6");
  var a = +input.value;
  input.style.outlineWidth =
    isNaN(a) || input.value.toString().length == 0 ? "1px" : "0px";
  if (isNaN(a) || input.value.toString().length == 0) {
    console.log("Incorect value in inputs for third task");
  } else {
    span.innerHTML = (Math.sqrt(3) * Math.pow(a, 2)) / 4;
  }
}

//task 23
function triangleCalculations() {
  var input = document.querySelectorAll(".seventh-task  input");
  var span = document.querySelectorAll(".task7");
  var a = Math.abs(+input[1].value);
  var b = Math.abs(+input[2].value);
  var c = Math.abs(+input[3].value);

  input[1].style.outlineWidth =
    isNaN(a) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(b) || input[2].value.toString().length == 0 ? "1px" : "0px";
  input[3].style.outlineWidth =
    isNaN(c) || input[3].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(a) ||
    input[1].value.toString().length == 0 ||
    isNaN(b) ||
    input[2].value.toString().length == 0 ||
    isNaN(c) ||
    input[3].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs");
  } else {
    var p = (a + b + c) / 2;
    span[0].innerHTML = (2 * Math.sqrt(p * (p - a) * (p - b) * (p - c))) / a;
    span[1].innerHTML =
      Math.sqrt(2 * Math.pow(b, 2) + 2 * Math.pow(c, 2) - Math.pow(a, 2)) / 2;
    span[2].innerHTML = Math.sqrt(a * b * (a + b + c) * (a + b - c)) / (a + b);
    span[3].innerHTML =
      (a * b * c) / (4 * Math.sqrt(p * (p - a) * (p - b) * (p - c)));
    span[4].innerHTML = Math.sqrt(((p - a) * (p - b) * (p - c)) / p);
  }
}

//task 24
function distanceCalculations() {
  var input = document.querySelectorAll(".coordinate-inputs > input");
  var span = document.querySelector(".task8");
  var x1 = +input[0].value;
  var y1 = +input[1].value;
  var x2 = +input[2].value;
  var y2 = +input[3].value;
  input[0].style.outlineWidth =
    isNaN(x1) || input[0].value.toString().length == 0 ? "1px" : "0px";
  input[1].style.outlineWidth =
    isNaN(y1) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(x2) || input[2].value.toString().length == 0 ? "1px" : "0px";
  input[3].style.outlineWidth =
    isNaN(y2) || input[3].value.toString().length == 0 ? "1px" : "0px";

  if (
    isNaN(x1) ||
    input[0].value.toString().length == 0 ||
    isNaN(y1) ||
    input[1].value.toString().length == 0 ||
    isNaN(x2) ||
    input[2].value.toString().length == 0 ||
    isNaN(y2) ||
    input[3].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    span.innerHTML = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    console.log("x1", x1);
    console.log("x2", x2);
    console.log("y1", y1);
    console.log("y2", y2);
  }
}

//task 33
function maxMinCalculation() {
  var input = document.querySelectorAll(".ninth-task  input");
  var span = document.querySelector(".task9");
  var x = +input[1].value;
  var y = +input[2].value;
  input[1].style.outlineWidth =
    isNaN(x) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(y) || input[2].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(x) ||
    input[1].value.toString().length == 0 ||
    isNaN(y) ||
    input[2].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    if (+input[1].value > +input[2].value) {
      span.innerHTML =
        "Max value - " +
        +input[1].value +
        "<br>" +
        "Min value - " +
        +input[2].value;
    } else if (+input[1].value === +input[2].value) {
      span.innerHTML = "x and y equal";
    } else {
      span.innerHTML =
        "Max value - " +
        +input[2].value +
        "<br>" +
        "Min value - " +
        +input[1].value;
    }
  }
}

//task 34
function maxMinCalc() {
  var input = document.querySelectorAll(".array");
  var span = document.querySelector(".task10");
  var x = +input[0].value;
  var y = +input[1].value;
  var z = +input[2].value;
  input[0].style.outlineWidth =
    isNaN(x) || input[0].value.toString().length == 0 ? "1px" : "0px";
  input[1].style.outlineWidth =
    isNaN(y) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(z) || input[2].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(x) ||
    input[0].value.toString().length == 0 ||
    isNaN(y) ||
    input[1].value.toString().length == 0 ||
    isNaN(z) ||
    input[2].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    var values = [];
    for (let index = 0; index < input.length; index++) {
      values.push(input[index].value);
    }
    span.innerHTML =
      "Max value - " +
      Math.max.apply(null, values) +
      "<br>" +
      "Min value - " +
      Math.min.apply(null, values);
  }
}

//task 35
function maxMin() {
  var input = document.querySelectorAll(".eleventh-task  input");
  var span = document.querySelectorAll(".task11");
  var x = +input[1].value;
  var y = +input[2].value;
  var z = +input[3].value;
  input[1].style.outlineWidth =
    isNaN(x) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(y) || input[2].value.toString().length == 0 ? "1px" : "0px";
  input[3].style.outlineWidth =
    isNaN(z) || input[3].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(x) ||
    input[1].value.toString().length == 0 ||
    isNaN(y) ||
    input[2].value.toString().length == 0 ||
    isNaN(z) ||
    input[3].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    if (
      +input[1].value + +input[2].value + +input[3].value >
      input[1].value * input[2].value * input[3].value
    ) {
      var max = +input[1].value + +input[2].value + +input[3].value;
    } else {
      var max = input[1].value * input[2].value * input[3].value;
    }
    span[0].innerHTML =
      " = (" +
      (+input[1].value + +input[2].value + +input[3].value) +
      ", " +
      input[1].value * input[2].value * input[3].value +
      ") = " +
      max;
    // second part
    if (
      +input[1].value + +input[2].value + input[3].value / 2 <
      input[1].value * input[2].value * input[3].value
    ) {
      var min = +input[1].value + +input[2].value + input[3].value / 2;
    } else {
      var min = input[1].value * input[2].value * input[3].value;
    }
    span[1].innerHTML =
      " = (" +
      (+input[1].value + +input[2].value + input[3].value / 2) +
      ", " +
      input[1].value * input[2].value * input[3].value +
      ") = " +
      (Math.sqrt(min) + 1);
  }
}

//task 36
function inequalityCheck() {
  var input = document.querySelectorAll(".twelfth-task  input");
  var span = document.querySelector(".task12");
  var a = +input[1].value;
  var b = +input[2].value;
  var c = +input[3].value;
  input[1].style.outlineWidth =
    isNaN(a) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(b) || input[2].value.toString().length == 0 ? "1px" : "0px";
  input[3].style.outlineWidth =
    isNaN(c) || input[3].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(a) ||
    input[1].value.toString().length == 0 ||
    isNaN(b) ||
    input[2].value.toString().length == 0 ||
    isNaN(c) ||
    input[3].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    if (
      +input[1].value < +input[2].value &&
      +input[2].value < +input[3].value
    ) {
      span.innerHTML = " true";
    } else {
      span.innerHTML = " false";
    }
  }
}

//task 37
function inequalityCheck2() {
  var input = document.querySelectorAll(".thirteenth-task  input");
  var span = document.querySelector(".task13");
  var a = +input[1].value;
  var b = +input[2].value;
  var c = +input[3].value;
  input[1].style.outlineWidth =
    isNaN(a) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(b) || input[2].value.toString().length == 0 ? "1px" : "0px";
  input[3].style.outlineWidth =
    isNaN(c) || input[3].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(a) ||
    input[1].value.toString().length == 0 ||
    isNaN(b) ||
    input[2].value.toString().length == 0 ||
    isNaN(c) ||
    input[3].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    span.innerHTML =
      +input[1].value >= +input[2].value && +input[2].value >= +input[3].value
        ? "a &ge; b &ge; c - true => a: " +
          input[1].value * 2 +
          "; b: " +
          input[2].value * 2 +
          "; c: " +
          input[3].value * 2
        : "a &ge; b &ge; c - false => |a| :" +
          Math.abs(input[1].value) +
          "; |b|: " +
          Math.abs(input[2].value) +
          "; |c|: " +
          Math.abs(input[3].value);
  }
}

//task 77
function task77() {
  var input = document.querySelector(".input-task77");
  var span = document.querySelectorAll(".task14");
  // Calculation of first task
  var n = +input.value;
  input.style.outlineWidth =
    isNaN(n) || input.value.toString().length == 0 ? "1px" : "0px";
  if (isNaN(n) || input.value.toString().length == 0) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    span[0].innerHTML = " = " + Math.pow(2, n);

    // Calculation of second,third, fourth tasks
    var task2 = 1,
      task3 = 1,
      sumSin = 0,
      sumCos = 0,
      task4 = 0,
      task6 = 1,
      squareRoot3n = 0;
    for (let index = 1; index <= n; index++) {
      task2 *= index;
      task3 *= 1 + 1 / index ** 2;
      sumSin += Math.sin(index);
      sumCos += Math.cos(index);
      task4 += 1 / sumSin;
      task6 *= sumCos / sumSin;
    }
    span[1].innerHTML = " = " + task2;
    span[2].innerHTML = " = " + task3;
    span[3].innerHTML = " = " + task4;
    span[5].innerHTML = " = " + task6;

    // Calculation of fifth task
    let i = n;
    var squareRoot = 0;
    for (; i >= 1; i--) {
      squareRoot = Math.sqrt(2 + squareRoot);
      squareRoot3n = Math.sqrt(3 * (i - 1) + Math.sqrt(3 * i) + squareRoot3n);
    }
    span[4].innerHTML = " = " + squareRoot;
    span[6].innerHTML = " = " + squareRoot3n;
  }
}

//task 78
function task78() {
  var input = document.querySelectorAll(".fifteenth-task  input");
  var span = document.querySelectorAll(".task15");
  var a = +input[1].value,
    n = +input[2].value;
  input[1].style.outlineWidth =
    isNaN(a) || input[1].value.toString().length == 0 ? "1px" : "0px";
  input[2].style.outlineWidth =
    isNaN(n) || input[2].value.toString().length == 0 ? "1px" : "0px";
  if (
    isNaN(a) ||
    input[1].value.toString().length == 0 ||
    isNaN(n) ||
    input[2].value.toString().length == 0
  ) {
    console.log("Incorect value in inputs for fourth task");
  } else {
    span[0].innerHTML = " = " + a ** n;
    var rezultB = 1;
    var rezultC = 1 / a;
    var sumA = 1;
    var rezultD = 1 / a;
    var rezultE = 1;
    for (let index = 1; index <= n; index++) {
      sumA *= a + index;
      rezultB *= a + (index - 1);
      rezultC += 1 / (a * sumA);
      rezultD += 1 / a ** Math.pow(2, index);
      rezultE *= a - Math.pow(index, 2);
    }
    span[1].innerHTML = " = " + rezultB;
    span[2].innerHTML = " = " + rezultC;
    span[3].innerHTML = " = " + rezultD;
    span[4].innerHTML = " = " + a * rezultE;
  }
}

//task 79
function task79() {
  var span = document.querySelector(".task16");
  var rezult = 1;
  let i = 0.1;

  for (let index = 0.1; index <= 10; ) {
    console.log("ind", index);

    //console.log("index", index.toFixed(1));

    rezult *= 1 + Math.sin(index);
    i += 0.1;
    index = +i.toFixed(1);
  }
  span.innerHTML = " " + rezult;
}

//Inputs Validations
//Only Integers
document
  .getElementById("wrapper")
  .addEventListener("keypress", function (event) {
    if (event.target.classList.contains("paste-validate")) {
      //remove 'paste-validate' check not use in HTML
      // First Task Validation
      var e = event;
      var value = event.target.value;
      if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 45) {
        var all = value + e.key;
        if (
          (all.lastIndexOf("-") == 0 && all.lastIndexOf("0") == 1) ||
          all.lastIndexOf("0") == 0
        ) {
          event.returnValue = false;
        } else if (all.lastIndexOf("-") == 0 || all.lastIndexOf("-") == -1) {
          return;
        } else {
          event.returnValue = false;
        }
      } else {
        event.returnValue = false;
      }
    } else if (event.target.classList.contains("any-number")) {
      //Second Task Validation
      var e = event;
      var value = event.target.value;
      var reg = /^(-?\d?)$/m;
      var reg1 = /^(-?(0\.)|(-?[1-9]+\d*\.?))(\d?\d?\d?)$/m;
      if (
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode > 44 && event.keyCode < 47)
      ) {
        var all = value + e.key;
        if (reg.test(all) || reg1.test(all)) {
          return;
        } else {
          event.returnValue = false;
        }
      } else {
        event.returnValue = false;
      }
    } else if (event.target.classList.contains("real-positive-number")) {
      var e = event;
      var value = event.target.value;
      var all = value + e.key;
      var reg2 = /^[1-9]\d*$/m;
      if (reg2.test(all)) {
        return;
      } else {
        event.returnValue = false;
      }
    } else if (event.target.classList.contains("positive-with-digit")) {
      var e = event;
      var value = event.target.value;
      var all = value + e.key;
      var reg3 = /^((0\.)|([1-9]+\d*\.?))(\d*)$/m;
      var reg4 = /^\d$/m;
      if (reg3.test(all) || reg4.test(all)) {
        return;
      } else {
        event.returnValue = false;
      }
    } else {
      return;
    }
  });

//Insertion Prevention
document.getElementById("wrapper").addEventListener("paste", function (event) {
  var tagName = event.target.tagName.toLowerCase();
  if (tagName === "input") {
    event.returnValue = false;
  }
});

//All digts except -
