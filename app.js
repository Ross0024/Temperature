const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertButton = document.getElementById('convert-btn');
const result = document.getElementById('result');

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function handleConvertButtonClick() {
  const celsius = celsiusInput.value;
  const fahrenheit = fahrenheitInput.value;

  if (celsius) {
    const convertedTemperature = convertToFahrenheit(celsius);
    result.innerHTML = `${celsius}&deg;C = ${convertedTemperature}&deg;F`;
  } else if (fahrenheit) {
    const convertedTemperature = convertToCelsius(fahrenheit);
    result.innerHTML = `${fahrenheit}&deg;F = ${convertedTemperature}&deg;C`;
  } else {
    result.innerHTML = 'Please enter a temperature.';
  }
}

convertButton.addEventListener('click', handleConvertButtonClick);

celsiusInput.addEventListener('input', function() {
  if (celsiusInput.value === '') {
    result.innerHTML = 'Please enter a temperature.';
  } else {
    const convertedTemperature = convertToFahrenheit(celsiusInput.value);
    result.innerHTML = `${celsiusInput.value}&deg;C = ${convertedTemperature}&deg;F`;
  }
});

fahrenheitInput.addEventListener('input', function() {
  if (fahrenheitInput.value === '') {
    result.innerHTML = 'Please enter a temperature.';
  } else {
    const convertedTemperature = convertToCelsius(fahrenheitInput.value);
    result.innerHTML = `${fahrenheitInput.value}&deg;F = ${convertedTemperature}&deg;C`;
  }
});

// Bonus: Clear the result text when the user clicks into either input field
celsiusInput.addEventListener('click', function() {
  result.innerHTML = '';
});

fahrenheitInput.addEventListener('click', function() {
  result.innerHTML = '';
});
