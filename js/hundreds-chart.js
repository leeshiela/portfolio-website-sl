//Sticky mySidenav (Veritcal Navigation Bar)
// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Get the navbar
var mySidenav = document.getElementById("mySidenav");

// Get the offset position of the navbar
var sticky = mySidenav.offsetLeft;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    mySidenav.classList.add("sticky")
  } else {
    mySidenav.classList.remove("sticky");
  }
}


//Hundreds Carts JS 1-100 Chart//
console.log("Script Running");

const NUM_BULBS = 100;

const allOn = document.querySelector("#turnon");

const allEven = document.querySelector("#evenbutton");

const allOff = document.querySelector("#turnoff");

const allTens = document.querySelector("#landmarkbutton");

const allFives = document.querySelector("#skipcountfive");

const allTwos = document.querySelector("#skipcounttwo");

//Toggling
const turnOnOff = e => {
  console.log("Handling click for: " + e.target);
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active")) {
    console.log("Active");
    e.target.innerHTML = `💡${bulbs.indexOf(e.target) + 1} `;
  } else {
    e.target.innerHTML = `🔌${bulbs.indexOf(e.target) + 1}`;
  }
};

//Use an array
let bulbs = [];

//increment by 1
for (let i = 0; i < NUM_BULBS; i++) {
  bulbs.push(document.querySelector("#lightbulb" + (i + 1)));
  bulbs[i].addEventListener("click", turnOnOff);
}

//Turn on all lights
let turnOnAll = () => {
  console.log("All On Button clicked");
  for (let i = 0; i < NUM_BULBS; i++) {
    bulbs[i].innerHTML = `💡${i + 1}`;
    bulbs[i].classList.add("active");
    //add class "active"
  }
};
allOn.addEventListener("click", turnOnAll);

//Turn off all lights
let turnOffAll = () => {
  console.log("All Off Button clicked");
  for (let i = 0; i < NUM_BULBS; i++) {
    bulbs[i].innerHTML = `🔌${i + 1}`;
    bulbs[i].classList.remove("active");
    //add class "active"
  }
};
allOff.addEventListener("click", turnOffAll);

//Turn on all even numbers
let turnOnEvens = () => {
  console.log("Even Button clicked");
  turnOnAll();
  console.log();
  for (let i = 0; i < NUM_BULBS; i++) {
    //Because index is off by 1 from the numbering, there is a lot of i + 1
    if ((i + 1) % 2 == 1) {
      bulbs[i].innerHTML = `🔌${i + 1}`;
      bulbs[i].classList.remove("active");
    }
  }
};
allEven.addEventListener("click", turnOnEvens);
console.log("All Even");

//Turn on Skip Count by Twos Button = same as Turn On All Even Numbers
allTwos.addEventListener("click", turnOnEvens);


//Turn on all multiples of ten (landmark numbers)
let turnOnTens = () => {
  console.log("Tens Button clicked");
  turnOffAll();
  console.log();
  for (let i = 0; i < NUM_BULBS; i++) {
    //Because index is off by 1 from the numbering, there is a lot of i + 1
    if ((i+12)%10 == 1) {
      bulbs[i].innerHTML = `💡${i + 1}`;
      bulbs[i].classList.add("active");
    }
  }
};

allTens.addEventListener("click", turnOnTens);
console.log("All Tens");

//Turn on all multiples of five
let turnOnFives = () => {
  console.log("Fives Button clicked");
  turnOffAll();
  console.log();
  for (let i = 0; i < NUM_BULBS; i++) {
    if ((i+7)%10 == 1 || (i+12)%10 == 1) {
      bulbs[i].innerHTML = `💡${i + 1}`;
      bulbs[i].classList.add("active");
    }
    
  }};

allFives.addEventListener("click", turnOnFives);
console.log("All Fives");
