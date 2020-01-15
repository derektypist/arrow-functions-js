// Define Arrow Functions

const sum = (num1, num2) => {
    return num1 + num2;
};


const treble = (x) => {
    return x * 3;
};

// Set Up Variable
let txt = "";
txt+= "Getting sums" + "<br>";
txt+= "The sum of 10 and 20 is " + sum(10, 20) + "<br>";
txt+= "The sum of 4.5 and 3.2 is " + sum(4.5, 3.2) + "<br>";
txt+= "<br>";
txt+= "Trebling" + "<br>";
txt+= "4 times 3 is " + treble(4) + "<br>";
txt+= "5.5 times 3 is " + treble(5.5) + "<br>";

// Display txt in Browser
document.getElementById("demo").innerHTML = txt;