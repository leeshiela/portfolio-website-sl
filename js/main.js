//Sticky mySidenav (Veritcal Navigation Bar)
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

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
  function showOutput() {
    var rotation=1;    
    //Station 1 name & members
      document.getElementById("station-1-name-header").innerHTML = 
      document.getElementById("station-1-name").value
      document.getElementById("station-1-materials-output").innerHTML = 
      document.getElementById("station-1-materials").value
      document.getElementById("station-" + (rotation%3 + 1) + "-members-output").innerHTML = 
      document.getElementById("station-1-members").value
    //Station 2 name & members
      document.getElementById("station-2-name-header").innerHTML = 
      document.getElementById("station-2-name").value
      document.getElementById("station-2-materials-output").innerHTML = 
      document.getElementById("station-2-materials").value  
      document.getElementById("station-" + (rotation%3 + 2) + "-members-output").innerHTML = 
      document.getElementById("station-2-members").value
    //Station 3 name & members
      document.getElementById("station-3-name-header").innerHTML = 
      document.getElementById("station-3-name").value
      document.getElementById("station-3-materials-output").innerHTML = 
      document.getElementById("station-3-materials").value
      document.getElementById("station-" + (rotation%3) + "-members-output").innerHTML = 
      document.getElementById("station-3-members").value
      }