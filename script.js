const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultDisplayed = false;

// Loop through all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      // Clear everything
      currentInput = "";
      display.textContent = "0";
    } else if (value === "DEL") {
      // Delete last character
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (value === "=") {
      // Evaluate the expression safely
      try {
        if (currentInput) {
          let result = eval(currentInput); // Basic calculator logic
          display.textContent = result;
          currentInput = result.toString();
          resultDisplayed = true;
        }
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      // Append number or operator
      if (resultDisplayed && !isNaN(value)) {
        currentInput = value; // Start new expression after result
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
      resultDisplayed = false;
    }
  });
});
