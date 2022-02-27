let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'o86p0cKwjUw', 
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'o86p0cKwjUw'
    },
    events: {
      onReady: function(event){
        event.target.mute()
      }
    }
  });
}

