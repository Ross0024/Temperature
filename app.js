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
    const convertedTemperature = convertToFahrenheit(c
