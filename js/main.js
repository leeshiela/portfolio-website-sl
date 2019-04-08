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


//---------------------------------------------
//Tools Section One Page Tab
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//-------------------------------------------------------------
//Station Tool page
function showInput() {
  //Station 1 name & members
  document.getElementById("station-1-name-header").innerHTML =
    document.getElementById("station-1-name").value
  document.getElementById("station-1-materials-output").innerHTML =
    document.getElementById("station-1-materials").value
  document.getElementById("station-1-members-output").innerHTML =
    document.getElementById("station-1-members").value
  //Station 2 name & members
  document.getElementById("station-2-name-header").innerHTML =
    document.getElementById("station-2-name").value
  document.getElementById("station-2-materials-output").innerHTML =
    document.getElementById("station-2-materials").value
  document.getElementById("station-2-members-output").innerHTML =
    document.getElementById("station-2-members").value
  //Station 3 name & members
  document.getElementById("station-3-name-header").innerHTML =
    document.getElementById("station-3-name").value
  document.getElementById("station-3-materials-output").innerHTML =
    document.getElementById("station-3-materials").value
  document.getElementById("station-3-members-output").innerHTML =
    document.getElementById("station-3-members").value
}


//Iterating by number of clicks by adding one to the ID to switch places
/*function showOutputOne() {
  var rotation = 1;
  //Station 1 name & members
  document.getElementById("station-1-name-header").innerHTML =
    document.getElementById("station-1-name").value
  document.getElementById("station-1-materials-output").innerHTML =
    document.getElementById("station-1-materials").value
  document.getElementById("station-" + (rotation % 3 + 1) + "-members-output").innerHTML =
    document.getElementById("station-1-members").value
  //Station 2 name & members
  document.getElementById("station-2-name-header").innerHTML =
    document.getElementById("station-2-name").value
  document.getElementById("station-2-materials-output").innerHTML =
    document.getElementById("station-2-materials").value
  document.getElementById("station-" + (rotation % 3 + 2) + "-members-output").innerHTML =
    document.getElementById("station-2-members").value
  //Station 3 name & members
  document.getElementById("station-3-name-header").innerHTML =
    document.getElementById("station-3-name").value
  document.getElementById("station-3-materials-output").innerHTML =
    document.getElementById("station-3-materials").value
  document.getElementById("station-" + (rotation % 3) + "-members-output").innerHTML =
    document.getElementById("station-3-members").value
}
*/

function showOutput() {
//give variables names to call out the containers that hold our students' names
  var station1 = document.getElementById("station-1-members-output");
  var station2 = document.getElementById("station-2-members-output");
  var station3 = document.getElementById("station-3-members-output");


//get the students' name as a string. These strings change as they are the strings as they are before or after the rotate button is clicked.

var station1members = station1.innerHTML;
var station2members = station2.innerHTML;
var station3members = station3.innerHTML;

//Switch around the student names. Here we take a look at our containers. In it we replace the strings with new strings, thus, "rotating the members".

//station 1 container will now have members previously from station 3.
station1.innerHTML = station3members;
//station 2 container will now have members previously from station 1.
station2.innerHTML = station1members;
//station 3 container will now have members previously from station 2.
station3.innerHTML = station2members;
}