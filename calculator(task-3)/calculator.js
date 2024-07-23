const display = document.querySelector('input[name="display"]');
function updateDisplay(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = '';
}
function deleteLastChar() {
  display.value = display.value.toString().slice(0, -1);
}
function evaluateExpression() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
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
