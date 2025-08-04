// Object to store calculator state
const Calculator = {
  Display_Value: '0',
  First_Operand: null,
  Wait_Second_Operand: false,
  operator: null
};

// Updates the calculator screen
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

Update_Display();

// Handles digit input
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;

  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// Handles decimal input
function Input_Decimal(dot) {
  if (Calculator.Wait_Second_Operand) return;
  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}

// Handles operators
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator;
  const inputValue = parseFloat(Display_Value);

  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }

  if (First_Operand == null) {
    Calculator.First_Operand = inputValue;
  } else if (operator) {
    const currentValue = First_Operand || 0;
    const result = Perform_Calculation[operator](currentValue, inputValue);

    Calculator.Display_Value = String(parseFloat(result.toFixed(9)));
    Calculator.First_Operand = result;
  }

  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator;
}

// Performs the calculations
const Perform_Calculation = {
  '/': (first, second) => first / second,
  '*': (first, second) => first * second,
  '+': (first, second) => first + second,
  '-': (first, second) => first - second,
  '=': (first, second) => second
};

// Resets calculator
function Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}

// Listen for button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) return;

  if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }

  Input_Digit(target.value);
  Update_Display();
});
