console.log('We love seating charts!')



let currentClass;

// Class Periods from classes.html
const blockC = document.getElementById('c');
const blockD = document.getElementById('d');
const blockE = document.getElementById('e');
const blockF = document.getElementById('f');
const blockH = document.getElementById('h');

// Header
let title = document.getElementById('title');

// Buttons
const shuffleC = document.getElementById('shuffleC');
const shuffleD = document.getElementById('shuffleD');
const shuffleE = document.getElementById('shuffleE');
const shuffleF = document.getElementById('shuffleF');
const shuffleH = document.getElementById('shuffleH');

// let resetButton = document.getElementById('reset');

// Ids for seats
let seat1 = document.getElementById('seat1');
let seat2 = document.getElementById('seat2');
let seat3 = document.getElementById('seat3');
let seat4 = document.getElementById('seat4');
let seat5 = document.getElementById('seat5');
let seat6 = document.getElementById('seat6');
let seat7 = document.getElementById('seat7');
let seat8 = document.getElementById('seat8');
let seat9 = document.getElementById('seat9');
let seat10 = document.getElementById('seat10');
let seat11 = document.getElementById('seat11');
let seat12 = document.getElementById('seat12');
let seat13 = document.getElementById('seat13');
let seat14 = document.getElementById('seat14');
let seat15 = document.getElementById('seat15');
let seat16 = document.getElementById('seat16');
let seat17 = document.getElementById('seat17');
let seat18 = document.getElementById('seat18');
let seat19 = document.getElementById('seat19');
let seat20 = document.getElementById('seat20');



function getRoster(block) {
    // B PERIOD Q3
    // let rosterB = ['Ro', 'Elise', 'Taisei', 'Margaret', 'Avi', 'Lillie', 'JJ', 'Teddy', 'Chase', 'David', 'Rowan', 'Kaya', 'Alex', 'Sudiksha', 'Vivienne', 'Lucy']
    
    // C PERIOD
    let rosterC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', '\n', '\n', '\n', '\n', '\n']

    
    
    // D PERIOD - Q3
    let rosterD = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', '\n', '\n']
  
 
    
    // E PERIOD - Q3
    let rosterE = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', '\n', '\n']
    

    // F PERIOD - Q3
    let rosterF = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', '\n', '\n', '\n', '\n', '\n']


    // H PERIOD - Q3
    let rosterH = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', '\n']
    
    // call generateSeatingChart with correct roster
    if(block == 'c'){
        generateSeatingChart(block, rosterC);
    } else if (block == 'd') {
        generateSeatingChart(block, rosterD);
    } else if (block == 'e') {
        generateSeatingChart(block, rosterE);
    } else if (block == 'f') {
        generateSeatingChart(block, rosterF);
    } else if (block == 'h') {
        generateSeatingChart(block, rosterH);
    } else {
        return 'Error?';
    }
}


function generateSeatingChart(block, roster) {
  // Update title to reflect date
  const date = new Date();
  // console.log(date);
  
  // Update H1 on page and tab name  
  title.innerHTML = 'Block ' + block.toUpperCase() + ' Seats for ' + (date.getMonth()+1) + '/' + date.getDate();
  
  document.title = 'Block ' + block.toUpperCase() + ' ' + (date.getMonth()+1) + '/' + date.getDate();
  
  // array of all seats   
  let seats = [seat1, seat2, seat3, seat4, seat5, seat6, seat7, seat8, seat9, seat10, seat11, seat12, seat13, seat14, seat15, seat16, seat17, seat18, seat19, seat20];
  
  // Loop through all seats   
  for(let i=0; i< seats.length; i++){
    // get a random index from roster
    let randomIndex = Math.floor(Math.random()*roster.length);
    
    // set the current seat to be the student at the random index
    seats[i].innerHTML = roster[randomIndex];
     
    // log student name
    // console.log(seats[i].innerHTML);
    
    // // remove student at randomIndex from roster array
    roster.splice(randomIndex, 1);

    // log shrinking student roster
    // console.log(roster);
  }
}

// Event listeners for buttons
shuffleC.addEventListener('click', function(){
    getRoster('c');
});
shuffleD.addEventListener('click', function(){
    getRoster('d');
});
shuffleE.addEventListener('click', function(){
    getRoster('e');
});
// shuffleF.addEventListener('click', function(){
//     getRoster('f');
// });
shuffleH.addEventListener('click', function(){
    getRoster('h');
});