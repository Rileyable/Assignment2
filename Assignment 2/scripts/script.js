//get references to interactive elements
const imgDice = document.getElementById("dice");
const txtOutput = document.getElementById("output");
const txtThrows = document.getElementById("throws");
const btnRoll = document.getElementById("roll");
const btnReset = document.getElementById("reset");

//add event listeners
btnRoll.addEventListener("click", roll);
btnReset.addEventListener("click", initialise);

//when page loaded
let count;
let total;

initialise();

//when roll button clicked
function roll() {
   
    let dice = Math.floor(Math.random() * 6) + 1;
    imgDice.setAttribute("src", "images/fruit1.png" + dice + ".png");
    count++;
    total += dice; 

    txtThrows.innerText += `Throw: ${dice}\n`;
    txtOutput.innerText = `Number of throws: ${count}\nTotal thrown: ${total}`;  
}





function initialise() {
    count = 0;
    total = 0;
    credit = 0;
    imgDice.setAttribute("src", "images/fruit1.png");
    txtThrows.innerText = "";
    txtOutput.innerText = "";  
}
