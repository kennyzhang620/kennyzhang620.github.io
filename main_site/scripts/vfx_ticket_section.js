var enableHover = true;

function updateImage(src) {
  if (enableHover) {
    var seatingImage = document.getElementById("seatingImage");
    seatingImage.src = src;
    seatingImage.style.opacity = 1;
  }
}

function resetImage() {
  if (enableHover) {
    var seatingImage = document.getElementById("seatingImage");
    seatingImage.style.opacity = 0;
  }
}

// ---------------------------------------Mouse over--------------------------------
document.getElementById("backBalcony").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Back_Balcony.png");
});

document.getElementById("frontBalcony").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Front_Balcony.png");
});

document.getElementById("backOrchestra").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Back_Orchestra.png");
});

document.getElementById("frontOrchestra").addEventListener("mouseover", function(event){
  event.preventDefault();
  updateImage("images/ticket/new/Front_Orchestra.png");
});

// ---------------------------------------Mouse out-------------------------------------
document.getElementById("backBalcony").addEventListener("mouseout", function(event){
  event.preventDefault();
  resetImage();
});

document.getElementById("frontBalcony").addEventListener("mouseout", function(event){
  event.preventDefault();
  resetImage();
});

document.getElementById("backOrchestra").addEventListener("mouseout", function(event){
  event.preventDefault();
  resetImage();
});

document.getElementById("frontOrchestra").addEventListener("mouseout", function(event){
  event.preventDefault();
  resetImage();
});




// -------------------------------------Click---------------------------------------

// document.getElementById("backBalcony").addEventListener("click", function(event){
//   event.preventDefault();
//   document.getElementById("seatingImage").src = "images/ticket/Hall_seating_backBalcony_1698x1312.png";
//   enableHover = false;
// });

// document.getElementById("frontBalcony").addEventListener("click", function(event){
//   event.preventDefault();
//   document.getElementById("seatingImage").src = "images/ticket/Hall_seating_frontBalcony_1698x1158.png";
//   enableHover = false;
// });

// document.getElementById("backOrchestra").addEventListener("click", function(event){
//   event.preventDefault();
//   document.getElementById("seatingImage").src = "images/ticket/Hall_seating_backOrchestra_1698x965.png";
//   enableHover = false;
// });

// document.getElementById("frontOrchestra").addEventListener("click", function(event){
//   event.preventDefault();
//   document.getElementById("seatingImage").src = "images/ticket/Hall_seating_frontOrchestra_1698x1099.png";
//   enableHover = false;
// });


//--------------------------------------Background parallox effect------------------------- 

// reference: https://css-tricks.com/moving-backgrounds-with-mouse-position/

var minWidth = 60 * 16; // Convert rem to px

document.body.addEventListener('mousemove', function(event) {
  if (window.innerWidth > minWidth) {
    var x = event.clientX / window.innerWidth * 5 - 2.5;  // to get values from -5% to +5%
    var y = event.clientY / window.innerHeight * 5 - 2.5; // to get values from -5% to +5%
    document.getElementById('baseImage').style.transform = "translate(" + x + "%, " + y + "%)";
    document.getElementById('seatingImage').style.transform = "translate(" + x + "%, " + y + "%)";
  }
});

document.addEventListener('mousemove', function(event) {
  if (window.innerWidth > minWidth) {
    var seatSections = document.querySelector('.seat_sections');
    var x = event.clientX / window.innerWidth * 5 - 2.5;
    var y = event.clientY / window.innerHeight * 5 - 2.5;
    seatSections.style.transform = 'translate(' + (-50 + x) + '%,' + (-50 + y) + '%)';
  }
});



