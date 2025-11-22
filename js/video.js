var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("#player1");

	video.autoplay = false;
	video.loop = false;
	video.load();

	console.log("Autoplay is set to", video.autoplay);
	console.log("Loop is set to", video.loop);

	var slider = document.querySelector("#slider");
	var volumeSpan = document.querySelector("#volume");

	video.volume = slider.value / 100;
    volumeSpan.innerHTML = slider.value + "%";

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	volumeSpan.innerHTML = Math.round(video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate = video.playbackRate * 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate = video.playbackRate / 0.9;
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
    console.log("Original location " + video.currentTime);

    if (video.currentTime + 10 >= video.duration) {
      video.currentTime = 0;
      console.log("Going back to beginning");
    } else {
      video.currentTime = video.currentTime + 10;
    }

    console.log("New location " + video.currentTime);
    video.play();
});

document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted === false) {
      video.muted = true;
      this.innerHTML = "Unmute";
      console.log("Muted");
    } else {
      video.muted = false;
      this.innerHTML = "Mute";
      console.log("Unmuted");
    }
});

slider.addEventListener("input", function () {
    video.volume = this.value / 100;
    volumeSpan.innerHTML = this.value + "%";
    console.log("Volume is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function () {
    console.log("Old School");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    console.log("Original");
    video.classList.remove("oldSchool");
  });
});
