const audio = document.querySelector('#audio')
const track = document.querySelector('#track');
const elapsed = document.querySelector('#elapsed');
const trackTime = document.querySelector('#track-time');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const volume = document.querySelector('#volume');
const volumeValue = document.querySelector('#volume-value');


// Durée de l'audio
let duration = audio.duration;
console.log(duration)

trackTime.textContent = buildDuration(duration);

function buildDuration(duration) {
    let minute = Math.floor(duration / 60);
    let reste = duration % 60;
    let secondes = Math.floor(reste);
    secondes = String(secondes).padStart(2, "0")
    return minute + ":" + secondes;
}

audio.addEventListener("timeupdate", function(){
    track.value = this.currentTime;
    elapsed.textContent = buildDuration(this.currentTime);
})

track.addEventListener("input", function(){
    elapsed.textContent = buildDuration(this.valu)
    audio.currentTime = this.value;
})

// Button play et pause
playBtn.addEventListener("click", function(){
    audio.play();
    pauseBtn.style.display= "initial";
    this.style.display = "none"
})

pauseBtn.addEventListener("click", function(){
    audio.pause();
    playBtn.style.display = "initial";
    this.style.display = "none";
})

// volume
volume.addEventListener("input", function(){
    audio.volume = this.value;
    volumeValue.textContent = this.value *100 + "%";
})