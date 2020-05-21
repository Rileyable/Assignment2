//get references to interactive elements
const imgDice = document.getElementById("dice");
const txtOutput = document.getElementById("output");
const txtThrows = document.getElementById("throws");
const btnRoll = document.getElementById("spin");
const btnReset = document.getElementById("reset");

//add event listeners
btnRoll.addEventListener("click", spin);
btnReset.addEventListener("click", initialise);

//when page loaded
let count;
let total;

initialise();

//when spin button clicked
function spin() {
   
    let dice = Math.floor(Math.random() * 6) + 1;
    imgDice.setAttribute("src", "images/fruit1.png" + dice + ".png");
    count++;
    total += dice; 

    txtThrows.innerText += `Spin: ${dice}\n`;
    txtOutput.innerText = `Number of spins: ${count}\nTotal spun: ${total}`;  
}





function initialise() {
    count = 0;
    total = 0;
    credit = 0;
    imgDice.setAttribute("src", "images/fruit1.png");
    txtThrows.innerText = "";
    txtOutput.innerText = "";  
}

