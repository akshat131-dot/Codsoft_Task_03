function clearDisplay() {
  document.getElementById('display').innerText = '0';
}

function deleteLast() {
  const display = document.getElementById('display');
  const text = display.innerText;
  if (text.length > 1) {
      display.innerText = text.slice(0, -1);
  } else {
      display.innerText = '0';
  }
}

function appendToDisplay(value) {
  const display = document.getElementById('display');
  if (display.innerText === '0') {
      display.innerText = value;
  } else {
      display.innerText += value;
  }
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      display.innerText = eval(display.innerText);
  } catch (e) {
      display.innerText = 'Error';
  }
}
