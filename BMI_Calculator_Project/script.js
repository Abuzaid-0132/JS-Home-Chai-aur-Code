const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}.`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is ${bmi}, & {Under Weight}.`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `Your BMI is ${bmi}, & {Normal Range}.`;
    } else {
      result.innerHTML = `Your BMI is ${bmi}, & {Over Weight}.`;
    }
  }
});
