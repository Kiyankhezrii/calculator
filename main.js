// get element from DOM
const input = document.querySelector(".form-input");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");

let temp;
clearBtn.addEventListener("click", () => {
  input.value = "";
  temp = "";
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.textContent == "C") return;
    input.value = input.value + e.target.textContent;
    temp = input.value;
  });
});
