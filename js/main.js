const TOTAL_BILL = document.querySelector('.total-bill');
const TIP_PERCENT = document.querySelector('.percent-tip');
const TIP_SPLIT = document.querySelector('.tip-split');
const SUBMIT = document.querySelector('.submitButton');

let billAmount;
let tipAmount;
let splitPeople;

function calcTip() {
  tipAmount = TIP_PERCENT.value;
  let tipLine = document.querySelector('.total-tip');
  let totalTip = billTotal() * tipAmount / billSplit();
  let totalTipFixed = totalTip.toFixed(2);
  tipLine.innerHTML = "$" + totalTipFixed; + " Each"
}



function billTotal() {
  let message = document.querySelector('.question-one');
  billAmount = TOTAL_BILL.value;
  
  if (billAmount === "" || billAmount <= "0") {
    message.innerHTML = "Please enter in a correct amount.";
    message.setAttribute('style', 'color:red');
  } else {
    message.innerHTML = "How much was your bill?";
    message.setAttribute('style', 'color:');
    return billAmount;
  }
};

function billSplit() {
  splitPeople = TIP_SPLIT.value;
  let parseSplit;
  let fixedSplit;
  
  if (splitPeople === "" || splitPeople <= "0") {
    splitPeople = "1";
    TIP_SPLIT.value = "1";
  }
  parseSplit = parseFloat(splitPeople);
  fixedSplit = parseSplit.toFixed(0);
  TIP_SPLIT.value = fixedSplit;
  return fixedSplit;
};



SUBMIT.addEventListener("click", calcTip, false);