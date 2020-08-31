function howzit() { alert('3'); }
let x = document.getElementById('myAudio')
// function howzit() { x.play(); }


function playAudio() {
	// var playPromise = x.play();
 
 //  if (playPromise !== undefined) {
 //    playPromise.then(_ => {
 //      // Automatic playback started!
 //      // Show playing UI.
 //      // We can now safely pause video...
 //      x.pause();
 //    })
 //    .catch(error => {
 //      // Auto-play was prevented
 //      // Show paused UI.
 //      alert("error")
 //    });
 //  }
x.play();
}

function pauseAudio() {
x.pause();
}

// let x = document.getElementById("myAudio"); 
// let mPlay = document.getElementById('Play');
// let mPause = document.getElementById('Pause');


// mPlay.onclick = function playAudio() { 
//   x.play(); 
// } 

// mPause.onclick = function pauseAudio() { 
//   x.pause(); 
// } 