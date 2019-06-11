var hidden = document.getElementsByClassName('hidden');
var fadeIn;

// transitions function on website and elements load
window.onload = start;

function start() {
  checkPos();
  addEvent();
}

// opacity transition for nav links helper function
// for type: specify class or id
function opacityTransition() {
  //refreshing array of fadeIn after they are changed
  fadeIn = document.getElementsByClassName('fadeIn');
  for(var i = 0; i < fadeIn.length; i++) {
    //fading in all elements with fadeIn class
    //which are updated by checkPos on scroll (addEvent)
    fadeIn[i].style.opacity = 1;
  }
}

//everytime you scroll, run checkPos
function addEvent() {
    window.addEventListener('scroll', checkPos);
    window.addEventListener('resize', start);
}

//checks if an element with the class hidden
//is in view or if it is off the screen
function checkPos() {
  for(var i = hidden.length - 1; i >= 0; i--) {
    var info = hidden[i].getBoundingClientRect();
    if(info.top - window.innerHeight <= 0) {
      //replacing classname to fadeIn which
      //opacityTransition uses to fade in
      hidden[i].className = hidden[i].className.replace('hidden', 'fadeIn');
    }
  }

  var titleinfo = document.getElementById('titleh1').getBoundingClientRect();
  if(titleinfo.top - window.innerHeight <= 0) {
    // slide up effect for title: "Name", fade added in with methods
    document.getElementById('titleh1').style.transform = "translateY(-5%)"; //replaced  top: -20px because smoother
  }

  //run opacityTransition if element is in view
  opacityTransition();
}
