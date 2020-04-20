function mainClick() {
  var inputA = document.querySelector("#a_value");
  var inputB = document.querySelector("#b_value");
  var spanPlus = document.querySelector("#id1");
  var spanMinus = document.querySelector("#id2");
  var spanMulty = document.querySelector("#id3");

  var a = +inputA.value;
  var b = +inputB.value;

  spanPlus.innerHTML = a + b;

  console.log("a ", a);
  console.log("b ", b);
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
