// Define Arrow Function

const sum = (num1, num2) => {
    num1 + num2;
};

// Set Up Variable
let txt = "";
txt+= "Getting sums";
txt+= "The sum of 10 and 20 is " + sum(10, 20);

// Display txt in Browser
document.getElementById("demo").innerHTML = txt;