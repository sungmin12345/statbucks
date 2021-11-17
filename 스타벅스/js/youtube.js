
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'twLc_bxqnBY', //영상 아이디
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'twLc_bxqnBY'
    },
    everts: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
    }
  });
}