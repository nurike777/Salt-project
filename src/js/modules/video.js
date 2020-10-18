const videoPlay = document.querySelector('.review-video__play');
const modal = document.querySelector('.review__overlay');
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let player;
const ua = navigator.userAgent,
      event = (ua.match(/iPadconst/i) || ua.match(/iPhone/)) ? "touchstart" : "click";


videoPlay.addEventListener('click', event => {
  event.preventDefault();
  modal.classList.add('is-open');
  document.body.classList.add('is-locked-modal');
  player = new YT.Player('myPlayer', {
    height: '100%',
    width: '100%',
    videoId: 'G1IbRujko-A',
    events: {
      'onReady': onPlayerReady,
    }
  });
})

const onPlayerReady = (event) => {
  event.target.playVideo();
}

function pauseVideo() {
  player.pauseVideo()
}

window.addEventListener('mouseup', event => {
  if (event.target == modal) {
    modal.classList.remove('is-open');
    document.body.classList.remove('is-locked-modal');
    pauseVideo()
  }
})

