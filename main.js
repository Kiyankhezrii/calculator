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

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      switch (e.target.textContent) {
        case "+":
          if (input.value) {
            input.value = temp + "+";
          }
          break;
        case "-":
          if (input.value) {
            input.value = temp + "-";
          }
          break;
        case "*":
          if (input.value) {
            input.value = temp + "*";
          }
          break;
        case "÷":
          if (input.value) {
            input.value = temp + "/";
          }
          break;
        case "=":
          calcResult(input.value);
          temp = "";
          setTimeout(()=>input.value="",7000)
          break;
      }
    });
  });
  
  const calcResult = function (res) {
    input.value = "";
    input.value = eval(res);
  };
  