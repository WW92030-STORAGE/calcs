function invalidInput(element_id) {
  document.getElementById(element_id).textContent = "INVALID INPUT :(";
}

function setText(element_id, text) {
  document.getElementById(element_id).textContent = text;
}

function setInnerHTML(element_id, text) {
  document.getElementById(element_id).innerHTML = text;
}

function getValue(element_id) {
  return document.getElementById(element_id).value;
}

function getElement(element_id) {
  return document.getElementById(element_id);
}

function bincoeff(n, k) {
  if (n < k) return 0;
  if (n == k || k == 0) return 1;
  if (isNaN(n) || isNaN(k)) return NaN;

  if (k > n - k) k = n - k;

  let res = 1;
  for (let i = 0; i < k; i++) res *= ((n - i) / (i + 1));
  return res;
}

function button1() {
  // BEGIN INPUT
  
  const input1 = getValue("input1");
  const input2 = getValue("input2");
  
  // PROCESSING
  
  // || 0 is a thing for exception handling
  const you = parseFloat(input1) || 0;
  const all = parseFloat(input2) || 0;
  
  if (isNaN(you) || isNaN(all)) {
    invalidInput("result1");
    return;
  }
  
  // COMPUTE
  const draws = Math.max(1, Math.floor(all / 100));

  // The probability you don't get picked is C(all - you, draws) / C(all, draws)

  const denominator = bincoeff(all, draws);
  const numerator = denominator - bincoeff(all - you, draws);
  const result1 = numerator / denominator;

  // RETURN
  setInnerHTML("result1", "RESULT = " + result1 + "<br>" + numerator + "/" + denominator);
}