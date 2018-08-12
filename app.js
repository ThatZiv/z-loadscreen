/* Need Help? Join my discord @ discord.gg/yWddFpQ */

// And yes... I know this is __very__ messy. 

/* Uncomment for PLAIN TEXT (also uncomment title in index)  document.getElementById('title').innerHTML = config.text.title;  */
document.getElementById('link').innerHTML = config.text.link;
var audio = `<div data-video=${config.videoID} data-autoplay="1" data-loop="1" id="youtube-audio"> </div>`;
if (config.music === true) { 
 $("body").append(audio);
} 

$(function () {

    var llllll = config.images.forEach(appen)
    function appen(i) {
        document.getElementById("bg").innerHTML= document.getElementById("bg").innerHTML + `<img width="100%"height="100%" src=imgs/${i}>`;
}
    function random(pp) {
        return Math.floor(Math.random() * pp);
    }
    var img = $('div#bg img');
    var len = img.length;
    var current = random(len);
    img.hide();
    img.eq(current).show();

    var x = setInterval(function () {
        img.eq(current).fadeOut(config.transitionInterval, function () {
            current = random(len);
            img.eq(current).fadeIn(config.transitionInterval);
        });
    }, 2 * config.transitionInterval + config.imgInterval);
})

/* forked from https://cdn.rawgit.com/labnol/files/master/yt.js */
function onYouTubeIframeAPIReady() {
var e = document.getElementById("youtube-audio"), 
t = document.createElement(null); 
e.appendChild(t); var a = document.createElement("div"); 
a.setAttribute("id", "youtube-player"), e.appendChild(a); 
var o = function (e) { 
    t.setAttribute("src", "https://i.imgur.com/" + a) }; 
    e.onclick = function () { r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0)) }; var r = new YT.Player("youtube-player", { height: "0", width: "0", videoId: e.dataset.video, playerVars: { autoplay: e.dataset.autoplay, loop: e.dataset.loop }, events: { onReady: function (e) { r.setPlaybackQuality("small"), r.setVolume(config.musicVolume) 
    o(r.getPlayerState() !== YT.PlayerState.CUED) }, 
    onStateChange: function (e) { e.data === YT.PlayerState.ENDED && o(!1) } } }) 
}

// From cfx-keks
var count = 0;
var thisCount = 0;


const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;

        document.querySelector('.letni h3').innerHTML += [data.type][data.order - 1] || '';
    },

    initFunctionInvoking(data) {
        document.querySelector('.yeet').style.left = '0%';
        document.querySelector('.yeet').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;

        document.querySelector('.letni h3').innerHTML += "\u{1f358}";
    },

    performMapLoadFunction(data) {
        ++thisCount;

        document.querySelector('.yeet').style.left = '0%';
        document.querySelector('.yeet').style.width = ((thisCount / count) * 100) + '%';
    },

    onLogLine(data) {
        document.querySelector('.letni p').innerHTML = data.message + "..!";
    }
};

window.addEventListener('message', function (e) {
    (handlers[e.data.eventName] || function () { })(e.data);
});

/////////////////////////////////////////////
