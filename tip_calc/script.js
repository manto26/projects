// let calc = function () {
//     let bill = Number(document.getElementById('bill').value);
//     let split = Number(document.getElementById('split').value)
//     let tip = bill * .15;
//     let totalBill = bill + tip;
//     let splitPerPerson = totalBill / split
//     let btn = getElementById("b1");
//     // btn.addEventListener("click", calc);

//     document.getElementById("tip").innerHTML = "$" + Number(tip).toFixed(2);
//     document.getElementById("total").innerHTML = "$" + Number(totalBill).toFixed(2);
//     document.getElementById("splitTotal").innerHTML = "$" + Number(splitPerPerson).toFixed(2);
// }

// function calculateTip() {
//     var billAmt = document.getElementById("amount").value;
//     var serviceQual = document.getElementById("servQual").value;
//     var numOfPeople = document.getElementById("ppl").value;


//     if (billAmt === "" || serviceQual == 0) {
//       alert("Please enter values");
//       return;
//     }

//     if (numOfPeople === "" || numOfPeople <= 1) {
//       numOfPeople = 1;
//       document.getElementById("each").style.display = "none";
//     } else {
//       document.getElementById("each").style.display = "block";
//     }


//     var total = (billAmt * serviceQual) / numOfPeople;

//     total = Math.round(total * 100) / 100;

//     total = total.toFixed(2);

//     document.getElementById("totalTip").style.display = "block";
//     document.getElementById("tip")= total;

//   }


//   document.getElementById("totalTip").style.display = "none";
//   document.getElementById("each").style.display = "none";


// document.getElementById("b1").onclick = function () {
//     calculateTip();

// };
let billAmount = document.getElementById('bill');
let percentTip = document.getElementById('percentage-tip');
let tipAmount = document.getElementById('tip-amount');
let total = document.getElementById('total');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function(){
    billAmount = Number(billAmount.value);
    percentTip = Number(percentTip.value);

    if (isNaN(billAmount) || billAmount <= 0 || billAmount === null){
        alert('Please enter a valid Bill Amount')
    }
    else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null){
        alert('Please enter a valid Tip Percentage')
    }
    else {
        let calculatedTip =  percentTip/100*billAmount;
        tipAmount.value = '$' + calculatedTip;

        let calculatedTotal = billAmount + calculatedTip;
        total.value = '$' + calculatedTotal;
    }
    

});