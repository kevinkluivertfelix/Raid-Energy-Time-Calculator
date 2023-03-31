function calculateTime() {
  const currentNumber = parseFloat(document.getElementById("currentNumberInput").value);
  const maxNumber = parseFloat(document.getElementById("maxNumberInput").value);
  if (isNaN(currentNumber) || isNaN(maxNumber)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
    return;
  }

  const timeDifference = (maxNumber * 3 - currentNumber * 3) / 60;

  const now = new Date();
  const newTime = new Date(now.getTime() + timeDifference * 60 * 60 * 1000);

  const formattedTime = newTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  document.getElementById("result").innerHTML = `Your energy will be full at <strong>${formattedTime}</strong>.`;
}