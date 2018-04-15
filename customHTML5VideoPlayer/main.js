$(window).on('load',initializeApp);

var video=null;

function initializeApp() {
    video=document.getElementById("videoPlayed");
    attachVideoHandlers(video);
}

function attachVideoHandlers(video) {
    var videoPlayer = document.getElementById("videoPlayer");
    var playButton=$('#playPause');
    var skipButtons = videoPlayer.querySelectorAll('[data-skip]');

    $(video).on({
        'click':function () {
            //togglePlay(video)
        },
        'canplay':function () {
            console.log('here')
        },
        'play':function () {
            updatePlayPauseButton(video);
        },
        'pause':function () {
            updatePlayPauseButton(video);
        }
    });

    playButton.on({
        'click':function () {
            togglePlay(video)
        },
    })

    skipButtons.forEach(button => button.addEventListener('click',skipInVideo));


}

function togglePlay(video) {
    // if(domVideo.paused) {
    //     domVideo.play();
    // }else{
    //     domVideo.pause();
    // }
    var method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updatePlayPauseButton(video) {
    if(video.paused) {
        $('.fa-pause').addClass('fa-play').removeClass('fa-pause')
    }else{
        $('.fa-play').addClass('fa-pause').removeClass('fa-play')
    }
}

function skipInVideo(event) {
    console.log(this.dataset.skip)
    video.currentTime = 5 //parseFloat(this.dataset.skip);
}