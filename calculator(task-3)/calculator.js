const display = document.querySelector('input[name="display"]');

// Function to update the display value
function updateDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character from the display
function deleteLastChar() {
  display.value = display.value.toString().slice(0, -1);
}

// Function to evaluate the expression and display the result
function evaluateExpression() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

// Add event listeners to the buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    switch (value) {
      case 'AC':
        clearDisplay();
        break;
      case 'DE':
        deleteLastChar();
        break;
      case '=':
        evaluateExpression();
        break;
      default:
        updateDisplay(value);
    }
  });
});