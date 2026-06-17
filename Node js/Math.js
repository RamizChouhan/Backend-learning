function Add(a,b){
    return a+b;
}

function Sub(a,b){
    return a-b;
}

function Div(a,b){
    return a / b;
}

function Mul(a,b){
    return a * b;
}

module.exports = {
    Add,
    Sub,
    Div,
    Mul
}


// ================= MODULES IN NODE.JS =================

// Module = ek file jisme reusable code hota hai
// Node.js mein har .js file by default ek module hoti hai

// Modules ka main purpose:
// 1. Code ko small parts mein divide karna
// 2. Reusable banana
// 3. Clean aur manageable code structure dena


// ================= EXPORT =================

// module.exports ka use hota hai data/function ko dusri file mein bhejne ke liye

// function add(a, b) {
//   return a + b;
// }

// // single export
// module.exports = add;


// // multiple export (best practice)
// module.exports = {
//   add,
//   sub: (a, b) => a - b
// };


// ================= EXPORTS SHORTCUT =================

// exports ek shortcut hai module.exports ka

// exports.mul = (a, b) => a * b;

// IMPORTANT:
// exports aur module.exports same object ko point karte hain
// lekin agar module.exports ko replace kar diya,
// to exports ka connection toot jata hai



// ================= USING MODULE =================

// agar object export kiya hai:
// console.log(math.add(2, 3));

// destructuring bhi use kar sakte hain:
// const { add } = require("./math");
// add(2, 3);


// ================= TYPES OF MODULES =================

// 1. Custom Modules (khud banaye)
// require("./math")

// 2. Built-in Modules (Node ke andar hote hain)
// require("fs"), require("path")

// 3. Third-party Modules (npm se install hote hain)
// require("express")


// ================= FILE PATH RULES =================

// ./  → current folder
// ../ → parent folder
// no ./ → built-in ya installed package


// ================= INTERNAL WORKING =================

// Node har file ko internally wrap karta hai:

// (function(exports, require, module, __filename, __dirname) {
//    // code
// });

// isliye ye variables directly use kar sakte hain


// ================= IMPORTANT RULES =================

// ✔️ module.exports = {} safest method hai
// ✔️ require() hamesha module.exports return karta hai

// ❌ exports = {} directly use nahi karna
// ❌ exports aur module.exports ko mix mat karo galat tarike se


// ================= SUMMARY =================

// Module = file
// Export = module.exports
// Import = require()
// require() → module.exports return karta hai