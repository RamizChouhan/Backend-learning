
// ================= IMPORT =================

// require() ka use hota hai dusri file ka module lene ke liye

const math = require("./Math");

// require() kya karta hai:
// 1. file load karta hai
// 2. code execute karta hai
// 3. module.exports return karta hai


console.log("Addition :",math.Add(7,3));

console.log("Substract :",math.Sub(10,4));

console.log("Divison :",math.Div(10,2));

console.log("Multiple :",math.Mul(2,4));

