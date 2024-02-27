console.log('We love seating charts!')

// Header
let title = document.getElementById('title');
let infoText = document.getElementById('infoText');

// Buttons
const shuffleB = document.getElementById('shuffleB');
const shuffleF = document.getElementById('shuffleF');
const clearBtn = document.getElementById('clear');

let groupDropdown = document.getElementById('groupDropdown')

// Ids for seats
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');
let box10 = document.getElementById('box10');
let box11 = document.getElementById('box11');
let box12 = document.getElementById('box12');
let box13 = document.getElementById('box13');
let box14 = document.getElementById('box14');
let box15 = document.getElementById('box15');
let box16 = document.getElementById('box16');
let box17 = document.getElementById('box17');
let box18 = document.getElementById('box18');
let box19 = document.getElementById('box19');
let box20 = document.getElementById('box20');
let box21 = document.getElementById('box21');
let box22 = document.getElementById('box22');
let box23 = document.getElementById('box23');
let box24 = document.getElementById('box24');
let box25 = document.getElementById('box25');
let box26 = document.getElementById('box26');
let box27 = document.getElementById('box27');
let box28 = document.getElementById('box28');
let box29 = document.getElementById('box29');
let box30 = document.getElementById('box30');
let box31 = document.getElementById('box31');
let box32 = document.getElementById('box32');
let box33 = document.getElementById('box33');
let box34 = document.getElementById('box34');
let box35 = document.getElementById('box35');
let box36 = document.getElementById('box36');
let box37 = document.getElementById('box37');
let box38 = document.getElementById('box38');
let box39 = document.getElementById('box39');
let box40 = document.getElementById('box40');
let box41 = document.getElementById('box41');
let box42 = document.getElementById('box42');
let box43 = document.getElementById('box43');
let box44 = document.getElementById('box44');
let box45 = document.getElementById('box45');


// Click to select your own seating chart
let clickedSeats = [];
let numSeats = 0;
const boxes = document.querySelectorAll('.box');
boxes.forEach(function(box) {
    box.addEventListener("click", function(){
        // console.log("Seat clicked: " + this.id);
        this.classList.toggle("seat");
        clickedSeats.push(this);
        // console.log(clickedSeats);
        if(this.classList.contains("seat")){
            numSeats++;
        } else {
            numSeats--;
            clickedSeats.pop();
            this.innerHTML = "";
        }
        infoText.innerHTML = `Number of seats selected: ${numSeats}`;
    });
});

function getRoster(block) {
    // B PERIOD Q3
    let rosterB = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']

    // F PERIOD - Q3
    let rosterF = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']    

    
    // call generateSeatingChart with correct roster
    if(block == 'b'){
        generateSeatingChart(block, rosterB, clickedSeats);
    } else if (block == 'f') {
        generateSeatingChart(block, rosterF, clickedSeats);
    } else {
        return 'Error?';
    }
}

function generateSeatingChart(block, roster, seats) {
//   console.log(block);
//   console.log(roster);
//   console.log(seats);
    if(roster.length == numSeats){
        infoText.innerHTML = 'Front';
        // Loop through all seats passed in to function 
        for(let i=0; i< seats.length; i++){
            // get a random index from roster
            let randomIndex = Math.floor(Math.random()*roster.length);
            
            // set the current seat to be the student at the random index
            seats[i].innerHTML = roster[randomIndex];
             
            // // remove student at randomIndex from roster array
            roster.splice(randomIndex, 1);
        } 
    } else if (roster.length < numSeats){
        infoText.innerHTML = 'Too many seats selected for this class!';
    } else if (roster.length > numSeats) {
        infoText.innerHTML = 'Not enough seats selected for this class!';
    }


}



// Event listeners for buttons
shuffleB.addEventListener('click', function(){
    getRoster('b');
});
shuffleF.addEventListener('click', function(){
    getRoster('f');
});
clearBtn.addEventListener('click', function(){
    clickedSeats = [];
    numSeats = 0;
    boxes.forEach(function(box) {
        if(box.classList.contains("seat")){
            box.classList.remove("seat");
        }
        box.innerHTML = "";
    });
    infoText.innerHTML = `Front`;
    
})