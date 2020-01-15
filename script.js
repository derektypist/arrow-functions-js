// Define Arrow Function

const sum = (num1, num2) => {
    return num1 + num2;
};

// Set Up Variable
let txt = "";
txt+= "Getting sums" + "<br>";
txt+= "The sum of 10 and 20 is " + sum(10, 20) + "<br>";
txt+= "The sum of 4.5 and 3.2 is " + sum(4.5, 3.2);

// Display txt in Browser
document.getElementById("demo").innerHTML = txt;