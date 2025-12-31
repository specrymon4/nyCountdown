
function toggleDisplay(id, prevDisplay) {
    const element = document.getElementById(id)
    if (element.style.display == "none") {
        element.style.display=prevDisplay
    } else {
        document.getElementById(id).style.display='none'
    };
    
 
}

window.onbeforeunload = function() {
  alert("hello")
};

window.addEventListener('beforeunload', (e) => {
  // Prevent the default browser action (closing the tab without a warning)
  e.preventDefault(); 
  
  // Set the returnValue property to trigger the confirmation dialog
  // Note: Modern browsers often display a generic message, not your custom text
  alert('hello')
});

/* View in fullscreen */
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // If not in fullscreen, request fullscreen for the whole page
    document.documentElement.requestFullscreen()
      .catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
  } else {
    // If in fullscreen, exit fullscreen
    document.exitFullscreen();
  }
}



function playAudio(audioid) {
    let clickSound = new Audio();
    clickSound.src = audioid;
    clickSound.currentTime = 0;
    clickSound.play();
}

// function setLabel() {
//     let now = Date()
//     let localTime = now.toLocaleTimeString()
//     let label = document.getElementById("label")
//     label.innerHTML = localTime

// }

// let loop = setInterval(() => {

//     let now = Date()
//     const targetTime = new Date("Jan 1, 2026 00:00:00").getTime();
//     const formattedTime = new Date()
//     let label = document.getElementById("label")
//     label.innerHTML = targetTime - formattedTime
// }, 1000);

var countDownDate = new Date("Jan 1, 2027, 00:00:00").getTime();

let nystate = false
let btnstate = "noJumpscare"

function btnClick() {

    if (nystate == false) {
        btnstate = "Jumpscare";
    } if (nystate == true) {
        if (btnstate != "Jumpscare") {
            btnstate = "noJumpscare";
        }
        playAudio("audios/confettisound.mp3");
        playAudio("audios/yaysound.mp3");
    }
}


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("label").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    nystate = true
    document.getElementById("label").innerHTML = "NEW YEARS!!!";
    if (btnstate == "noJumpscare") {
        playAudio("audios/confettisound.mp3")
        playAudio("audios/yaysound.mp3")
    } else {
        playAudio("audios/celebration.mp3")
        toggleDisplay('label', 'none')
        toggleDisplay('nybtn', 'none')
        toggleDisplay('mainframe', 'block')
        toggleFullScreen()
    }
    
    

  }
}, 1000);











