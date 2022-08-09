food = Number(prompt("How much was the food?"))
tipPercentage = Number(prompt('Tip %?')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('Tip Amount', tipAmount)
console.log('Total', total)