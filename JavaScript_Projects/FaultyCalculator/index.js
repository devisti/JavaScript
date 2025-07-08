let num1 = Number(prompt("Enter Your First Number : "))
let num2 = Number(prompt("Enter Your Second Number : "))

console.log("For addition ---> +")
console.log("For substraction ---> -")
console.log("For multiplication ---> *")
console.log("For division ---> /")

function correctFN(value1, value2) {
    let decision = prompt("Enter operation : ")

    if (decision == "+") {
        console.log("Solution : ", value1 + value2)
    }
    else if (decision == "-") {
        console.log("Solution : ", value1 - value2)
    }
    else if (decision == "*") {
        console.log("Solution : ", value1 * value2)
    }
    else if (decision == "/") {
        console.log("Solution : ", value1 / value2)
    }
    else {
        console.log("Invalid input !")
    }
}

function falseFN(value1, value2) {
    let decision = prompt("Enter operation : ")

    if (decision == "+") {
        console.log("Solution : ", value1 - value2)
    }
    else if (decision == "-") {
        console.log("Solution : ", value1 / value2)
    }
    else if (decision == "*") {
        console.log("Solution : ", value1 + value2)
    }
    else if (decision == "/") {
        console.log("Solution : ", value1 ** value2)
    }
    else {
        console.log("Invalid input !")
    }
}



if (Math.random() < 0.1) {
    console.log("🤖 Running: falseFN (buggy mode)");
    falseFN(num1, num2)
}
else {
    console.log("✅ Running: correctFN");
    correctFN(num1, num2)
}
