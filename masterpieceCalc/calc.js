console.log('is this thing on?')

const calculate = document.getElementById('calculate');
let results = document.getElementById('results');

// button to jump to top
let toTop = document.getElementById("toTop");

// sticky scoring navbar
let navbar = document.getElementById("title");
let sticky = navbar.offsetTop;


function calculateScore() {
    let score = 0;
    score += missions1thru4();
    score += missions5thru10();
    score += missions11thruPT();
    
    // console.log("Score:" + score);
    results.innerHTML = "Score: " + score;
}

// Splitting up into smaller pieces because Lily said so
function missions1thru4(){
    let eib = Number(document.querySelector('input[name = eib]:checked').value);
    let m01 = Number(document.querySelector('input[name = m01]:checked').value);
    let m02 = Number(document.querySelector('input[name = m02]:checked').value);
    let as = document.querySelector('input[name = as]:checked').value;
    
    // Determine scoring for active scene matching
    if (as == "Yes") {
        if(m02==10) {
            // Blue add 20
            m02 += 20;
        } else if (m02==20) {
            // Pink add 30
            m02 += 30;
        } else if (m02==30) {
            // Orange add 10
            m02 += 10;
        }
    }
    
    let m03 = Number(document.querySelector('input[name = m03]:checked').value);
    let m04a = Number(document.querySelector('input[name = m04a]:checked').value);
    let m04b = Number(document.querySelector('input[name = m04b]:checked').value);
    
    console.log('Equipment Bonus: ' + eib)
    console.log('M01 3D Cinema: ' + m01);
    console.log('M02 Theatre Scene: ' + m02);
    console.log('M03 Immersive Experience: ' + m03);
    console.log('M04 Masterpiece: ' + (m04a + m04b));
    
    
    return eib + m01 + m02 + m03 + m04a + m04b;
}

function missions5thru10(){
    let m05 = Number(document.querySelector('input[name = m05]:checked').value);
    let m06a = Number(document.querySelector('input[name = m06a]:checked').value);
    let m06b = Number(document.querySelector('input[name = m06b]:checked').value);
    let m07 = Number(document.querySelector('input[name = m07]:checked').value);
    let m08 = Number(document.querySelector('input[name = m08]:checked').value);
    let m09a = Number(document.querySelector('input[name = m09a]:checked').value);
    let m09b = Number(document.querySelector('input[name = m09b]:checked').value);
    let m10 = Number(document.querySelector('input[name = m10]:checked').value);
    
    console.log('M05 AR Statue: ' + m05);
    console.log('M06 Concert Lights & Sound: ' + (m06a + m06b));
    console.log('M07 Hologram Performer: ' + m07);
    console.log('M08 Rolling Camera: ' + m08);
    console.log('M09 Movie Set: ' + (m09a+m09b));
    console.log('M10 Sound Mixer: ' + m10);
    
    return m05 + m06a + m06b + m07 + m08 + m09a + m09b + m10;
}

function missions11thruPT() {
    let m11 = Number(document.querySelector('input[name = m11]:checked').value);
    let m12a = Number(document.querySelector('input[name = m12a]:checked').value);
    let m12b = Number(document.querySelector('input[name = m12b]:checked').value);
    let m13a = Number(document.querySelector('input[name = m13a]:checked').value);
    let m13b = Number(document.querySelector('input[name = m13b]:checked').value);
    let m14a = Number(document.querySelector('input[name = m14a]:checked').value);
    let m14b = Number(document.querySelector('input[name = m14b]:checked').value);
    let m15 = Number(document.querySelector('input[name = m15]:checked').value);
    let pt = Number(document.querySelector('input[name = pt]:checked').value);
    
    console.log('M11 Light Show: ' + m11);
    console.log('M12 VR Artist: ' + (m12a+m12b));
    console.log('M13 Craft Creator: ' + (m13a+m13b));
    console.log('M14 Audience Delivery: ' + (m14a + m14b));
    console.log('M15 Expert Delivery: ' + m15);
    console.log('Precision Tokens Remaining: ' + pt);
    console.log('========================')
    
    return m11 + m12a + m12b + m13a + m13b + m14a + m14b + m15 + pt;
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

// function makeItSticky() {
//     if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// TO TOP BUTTON (from W3Schools)
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
//   // sticky scorer
//   makeItSticky();
};


// Event listeners for buttons
toTop.addEventListener("click", topFunction);
calculate.addEventListener("click", calculateScore);