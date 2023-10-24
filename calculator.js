/**var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
function calculateSum(num1,num2) {
return num1 + num2
};
add.addEventListener("click", (calculateSum));
result.addEventListener("click", function () {
    var result = calculateSum.value
})
document.getElementById("addition").addEventListener("click", calculateSum);

function calculateSum() {
  document.getElementById("result").innerHTML = add();
}**/
/**var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var addition = document.getElementById("addition");
function calculateSum() {
let addition = num1 + num2;
};
document.getElementById("add").addEventListener("click", function(calculateSum) {
  // Get the input values
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  // Perform the addition
  let result = num1 + num2;

  // Display the result
  document.getElementById("result").innerText = "Result: " + result;
});**/
//addition.addEventListener("click", calculateSum);
//addition.addEventListener("click", function(){
//});

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addition");
const minus = document.getElementById("subtract");
const times = document.getElementById("multiply");
const division = document.getElementById("divide");
const total = document.getElementById("result");

addButton.addEventListener("click", function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const results = num1 + num2;
  total.textContent = `Result: ${results}`;

});

minus.addEventListener("click", function() {
const num1 = parseFloat(num1Input.value);
const num2 = parseFloat(num2Input.value);
const results = num1 - num2;
total.textContent = `Result: ${results}`;
});

times.addEventListener("click", function() {
  const num1 = parseFloat(num1Input.value);
const num2 = parseFloat(num2Input.value);
const results = num1 * num2;
total.textContent = `Result: ${results}`;
});

division.addEventListener("click", function() {
  const num1 = parseFloat(num1Input.value);
const num2 = parseFloat(num2Input.value);
const results = num1 / num2;
total.textContent = `Result: ${results}`;
});




































