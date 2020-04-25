function mainClick() {
  var input = document.querySelectorAll("#first-task > input");
  var span = document.querySelectorAll(".task1");

  var a = +input[0].value;
  var b = +input[1].value;

  span[0].innerHTML = a + b;
  span[1].innerHTML = a - b;
  span[2].innerHTML = a * b;
}

function cubeCalculation() {
  var a = document.querySelector(".second-task > input").value;
  var span = document.querySelectorAll(".task2");
  span[0].innerHTML = Math.pow(a, 3);
  span[1].innerHTML = 4 * Math.pow(a, 2);
}

function geometricMean() {
  var input = document.querySelectorAll(".third-task > input");
  var span = document.querySelectorAll(".task3");
  var a = +input[0].value;
  var b = +input[1].value;
  span[0].innerHTML = (a + b) / 2;
  span[1].innerHTML = Math.sqrt(a * b);
}

function abcMean() {
  var input = document.querySelectorAll(".fourth-task > input");
  var span = document.querySelectorAll(".task4");
  var a = Math.abs(+input[0].value);
  var b = Math.abs(+input[1].value);
  span[0].innerHTML = (a + b) / 2;
  span[1].innerHTML = Math.sqrt(a * b);
}

function heightFormula() {
  var input = document.querySelector(".fifth-task > input");
  var span = document.querySelector(".task5");
  var h = +input.value;
  span.innerHTML = Math.sqrt((2 * h) / 9.8075);
}

function triangleArea() {
  var input = document.querySelector(".sixth-task > input");
  var span = document.querySelector(".task6");
  var a = +input.value;
  span.innerHTML = (Math.sqrt(3) * Math.pow(a, 2)) / 4;
}

function triangleCalculations() {
  var input = document.querySelectorAll(".seventh-task > input");
  var span = document.querySelectorAll(".task7");
  var a = Math.abs(+input[0].value);
  var b = Math.abs(+input[1].value);
  var c = Math.abs(+input[2].value);
  var p = (a + b + c) / 2;
  span[0].innerHTML = (2 * Math.sqrt(p * (p - a) * (p - b) * (p - c))) / a;
  span[1].innerHTML =
    Math.sqrt(2 * Math.pow(b, 2) + 2 * Math.pow(c, 2) - Math.pow(a, 2)) / 2;
  span[2].innerHTML = Math.sqrt(a * b * (a + b + c) * (a + b - c)) / (a + b);
  span[3].innerHTML =
    (a * b * c) / (4 * Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  span[4].innerHTML = Math.sqrt(((p - a) * (p - b) * (p - c)) / p);
}

function distanceCalculations() {
  var input = document.querySelectorAll(".coordinate-inputs > input");
  var span = document.querySelector(".task8");
  var x1 = +input[0].value;
  var y1 = +input[1].value;
  var x2 = +input[2].value;
  var y2 = +input[3].value;
  span.innerHTML = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  console.log("x1", x1);
  console.log("x2", x2);
  console.log("y1", y1);
  console.log("y2", y2);
}

function maxMinCalculation() {
  var input = document.querySelectorAll(".ninth-task > input");
  var span = document.querySelector(".task9");
  if (+input[0].value > +input[1].value) {
    span.innerHTML =
      "Max value - " +
      +input[0].value +
      "<br>" +
      "Min value - " +
      +input[1].value;
  } else if (+input[0].value === +input[1].value) {
    span.innerHTML = "x and y equal";
  } else {
    span.innerHTML =
      "Max value - " +
      +input[1].value +
      "<br>" +
      "Min value - " +
      +input[0].value;
  }
}

function maxMinCalc() {
  var input = document.querySelectorAll(".array");
  var span = document.querySelector(".task10");
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

function maxMin() {
  var input = document.querySelectorAll(".eleventh-task > input");
  var span = document.querySelectorAll(".task11");
  if (
    +input[0].value + +input[1].value + +input[2].value >
    input[0].value * input[1].value * input[2].value
  ) {
    var max = +input[0].value + +input[1].value + +input[2].value;
  } else {
    var max = input[0].value * input[1].value * input[2].value;
  }
  span[0].innerHTML =
    " = (" +
    (+input[0].value + +input[1].value + +input[2].value) +
    ", " +
    input[0].value * input[1].value * input[2].value +
    ") = " +
    max;
  // second part
  if (
    +input[0].value + +input[1].value + input[2].value / 2 <
    input[0].value * input[1].value * input[2].value
  ) {
    var min = +input[0].value + +input[1].value + input[2].value / 2;
  } else {
    var min = input[0].value * input[1].value * input[2].value;
  }
  span[1].innerHTML =
    " = (" +
    (+input[0].value + +input[1].value + input[2].value / 2) +
    ", " +
    input[0].value * input[1].value * input[2].value +
    ") = " +
    (Math.sqrt(min) + 1);
}

function inequalityCheck() {
  var input = document.querySelectorAll(".twelfth-task > input");
  var span = document.querySelector(".task12");
  if (+input[0].value < +input[1].value && +input[1].value < +input[2].value) {
    span.innerHTML = " true";
  } else {
    span.innerHTML = " false";
  }
}

function inequalityCheck2() {
  var input = document.querySelectorAll(".thirteenth-task > input");
  var span = document.querySelector(".task13");
  span.innerHTML =
    +input[0].value >= +input[1].value && +input[1].value >= +input[2].value
      ? "a &ge; b &ge; c - true => a: " +
        input[0].value * input[0].value +
        "; b: " +
        input[1].value * input[1].value +
        "; c: " +
        input[2].value * input[2].value
      : "a &ge; b &ge; c - false => |a| :" +
        Math.abs(input[0].value) +
        "; |b|: " +
        Math.abs(input[1].value) +
        "; |c|: " +
        Math.abs(input[2].value);
}

// var string = "Hello my dear friend";
// var number = 28;
// var isTrue = true;
// var isNull = null;
// var isUndefined = undefined;
// var isObject = { a: 2 };

// console.log(typeof isNull);

// var int = 5;
// console.log("5%2 = ", 5 % 2);
// console.log(int);
// console.log("5*=2 = ", (int *= 2));
// int = 5;
// console.log("5/=2 = ", (int /= 2));
// int = 5;
// console.log("5/=2 = ", ++int);
// int = 5;
// console.log("5/=2 = ", int--);
// function myFunction() {
//   var x = document.getElementById("form");
// let i = 1;
// let a = x.elements[0].value;
// let b = x.elements[1].value;
// console.log("a ", a);
// console.log("b ", x);
// document.getElementById("id1").innerHTML = x;
// }

// var btn = document.querySelector("#check");
// console.log(btn);
// var a = document.querySelector("#a_value");

// function mainClick() {
//   console.log("10");
// }
// btn.addEventListener("click", myFunk);

// function myFunk() {
//   var a = document.querySelector("#a_value");
//   console.log(a);
// }
// btn.addEventListener("click", mainClick);
