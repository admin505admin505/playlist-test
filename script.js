// JavaScript for controlling the music player
const audio = document.getElementById('music');
const playlist = document.getElementById('playlist');

// Event listener for playing songs from the playlist
playlist.addEventListener('click', function (e) {
  if (e.target && e.target.matches('li.song')) {
    const song = e.target.getAttribute('data-src');
    audio.src = song;
    audio.play();
  }
});
