//VARIABLES
var counter = 0;

const sC = document.getElementById("count-me"); //select counter
const announcement = document.getElementById("count-announcement"); //edit announcement
sC.innerText = counter; //print counter

//EVENT LISTENERS

document.getElementById("c-add-1").addEventListener("click", function() {mathCounter(1);});
document.getElementById("c-add-5").addEventListener("click", function() {mathCounter(5);});
document.getElementById("c-take-5").addEventListener("click", function() {mathCounter(-5);});
document.getElementById("c-take-1").addEventListener("click", function() {mathCounter(-1);});
document.getElementById("c-reset").addEventListener("click", resetCount);

//CONDITIONS



//FUNCTIONS

function mathCounter(x) {

    counter = counter + x; //add increment to counter

    if(counter <= 0) { //Don't allow the counter to become less than 0.

        counter = 0;

    }

    if(counter > 0 && counter <= 19) {

        announcement.innerText = "";
    
    }

    if(counter >= 20 && counter <= 40) {

        announcement.innerText = "DOMINATION";
        announcement.style.position = "relative";
        announcement.style.fontSize = "25";
        announcement.style.top = 0;
        announcement.style.left = 0;
        announcement.style.zIndex = -1;
    
    }

    if(counter >= 41 && counter <= 60) {

        announcement.innerText = "COUNTING SPREE";

        announcement.style.position = "absolute";
        announcement.style.top = randomNumber() + "%";
        announcement.style.left = randomNumber() + "%";
        announcement.style.fontSize = "50";
    
    }

    if(counter >= 61 && counter <= 80) {

        announcement.innerText = "OVERKILL";
        announcement.style.top = randomNumber() + "%";
        announcement.style.left = randomNumber() + "%";
        announcement.style.fontSize = "100";

    }

    if(counter >= 100) {

        announcement.innerText = "UNSTOPPABLE";
        announcement.style.top = randomNumber() + "%";
        announcement.style.left = randomNumber() + "%";
        announcement.style.fontSize = "200";
    
    }

    sC.innerText = counter; //update the counter

}

function resetCount() {

    counter = 0;
    sC.innerText = counter;

}

function randomNumber() {

    return Math.floor(Math.random() * 100);

}
