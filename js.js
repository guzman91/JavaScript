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
