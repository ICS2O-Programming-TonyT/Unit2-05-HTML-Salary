const calculateBtn = document.getElementById("calculate-btn");
const hoursInput = document.getElementById("hours");
const rateInput = document.getElementById("rate");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const hours = parseFloat(hoursInput.value);
  const rate = parseFloat(rateInput.value);
  const pay = hours * rate;
  const tax = pay * 0.18;
  const payAfterTax = pay - tax;
  resultDiv.innerHTML = `Your pay is $${pay.toFixed(2)}.<br>The government will take $${tax.toFixed(2)}.<br>You will receive $${payAfterTax.toFixed(2)} after tax.`;
});
