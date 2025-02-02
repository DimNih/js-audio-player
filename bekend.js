const audio = document.getElementById('audio');
const playBtn = document.querySelector('.play-btn');
const progressBar = document.querySelector('.progress-bar');
const cover = document.getElementById('cover');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');

// Format waktu ke menit:detik
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
        cover.classList.add('playing');
    } else {
        audio.pause();
        playBtn.textContent = '▶';
        cover.classList.remove('playing');
    }
}

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
    currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(audio.duration);
});

function seek(event) {
    const width = event.currentTarget.clientWidth;
    const clickX = event.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
}