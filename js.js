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
    // span[0].innerHTML = a + b;
    // span[1].innerHTML = a - b;
    // span[2].innerHTML = a * b;
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
      rezultE *= a - index;
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
  for (let index = 0.1; index <= 10; index += 0.1) {
    rezult *= 1 + Math.sin(index);
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
      var reg1 = /^(-?(0\.)|(-?[1-9]+\d*\.?))(\d*)$/m;
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
  if (event.target.classList.contains("any-number")) {
    event.returnValue = false;
  }
});

//All digts except -
