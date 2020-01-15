// Define Arrow Function

const getSum = (num1, num2) => {
    num1 + num2;
};

// Set Up Variable
let txt = "";
txt+= "Getting sums";
txt+= "The sum of 10 and 20 is " + getSum(10, 20);

// Display txt in Browser
document.getElementById("demo").innerHTML = txt;