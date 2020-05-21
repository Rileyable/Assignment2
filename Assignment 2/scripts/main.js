const price = document.getElementById("price");
const order = document.getElementById("order");
const film = document.getElementsByName("film");
const delivery = document.getElementsByName("delivery");

// Film Stuff //
const filmOutput = document.getElementById("output");
const allFilms = document.querySelectorAll("input[name='film']");
const selectedFilm = document.querySelector("input[name='film']:checked");
// Film Stuff Finished //

// Delivery Stuff //
const deliveryOutput = document.getElementById("deloutput");
const allDelivery = document.querySelectorAll("input[name='delivery']");
const selectedDelivery = document.querySelector("input[name='delivery']:checked");
// Delivery Stuff Finished //

// Tickets Stuff //

// Tickets Stuff Finished //

// let Statements star here
let filmCost = 79;
let deliveryCost = 0;
// let statements end here //

// This makes the price appear on screen //
price.innerText = 
     `£${(filmCost + deliveryCost).toFixed(2)}`;

// Show Price above //
order.addEventListener("click", placeOrder);

// Place Order code above //

for (let i = 0; i < film.length; i++) {
    film[i].addEventListener("change",
           calculateFilmCost);
   }
   
   for (let i = 0; i < delivery.length; i++) {
       delivery[i].addEventListener("change",
            calculateDeliveryCost);
   }

   for (let i = 0; i < allFilms.length; i++) {
    allFilms[i].addEventListener("change", checkPreference);
   }

   for (let i = 0; i < allDelivery.length; i++) {
    allDelivery[i].addEventListener("change", checkPreferenceDelivery);
   }
// Decides value for Film and Delivery //

function calculateFilmCost() {
    if (this.value == "Phantom of the Opera") {
        filmCost = 79;
    }
    else if (this.value == "Hamilton") {
        filmCost = 85;
    }

    else if (this.value == "Lion King") {
        filmCost = 67;
    }
    else {
        filmCost = 83;
    }
    price.innerText = 
        `£${(filmCost + deliveryCost).toFixed(2)}`;
}

// Calculate Film Cost above //

// Start of Adding Process for Delivery //

function calculateDeliveryCost() {
    if (this.value == "E-Ticket") {
        deliveryCost = 0;
    }
    else if (this.value == "Box Office"){
        deliveryCost = 1.5;
    }

    else {
        deliveryCost = 3.99;
    }
    price.innerText = 
    `£${(filmCost + deliveryCost).toFixed(2)}`;
}

//Allows for preference + Name to be seen //
filmOutput.innerText = "Film Chosen: " + selectedFilm.value;
deliveryOutput.innerText = "Delivery Chosen: " + selectedDelivery.value;



function checkPreference() {
    filmOutput.innerText = "Film Chosen: " + this.value;

}

function checkPreferenceDelivery() {
    deliveryOutput.innerText = "Delivery Chosen: " + this.value;

}



// End of Adding Process for Delivery//

function placeOrder() {
    event.preventDefault();
    console.log("Thank you for your patronage!");
}

// Prints "Thank you for your patronage!" in the console"

