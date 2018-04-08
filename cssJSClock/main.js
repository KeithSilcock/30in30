$(document).ready(startClock);

function startClock() {
    setInterval(updateClock, 1000);
    addTickMarks();
}
function updateClock() {
    var dateObj = new Date();
    var hours = dateObj.getHours();
    var mins = dateObj.getMinutes();
    var secs = dateObj.getSeconds();
    var hourHand = document.getElementsByClassName("hourHand")[0];
    var minHand = document.getElementsByClassName("minHand")[0];
    var secHand = document.getElementsByClassName("secHand")[0];

    console.log(`it is: ${hours}:${mins}:${secs}`)
    var timeNowArray = doRotateMath(hours, mins, secs);

    hourHand.style.transform = `rotate(${timeNowArray[0]}deg)`;
    minHand.style.transform = `rotate(${timeNowArray[1]}deg)`;
    secHand.style.transform = `rotate(${timeNowArray[2]}deg)`;


}

function doRotateMath(hour, min, sec) {
    var hourDir = 90 + (360/12 * hour);
    var minDir = 90 + (360/60 * min);
    var secDir = 90 + (360/60 * sec);

    return [hourDir, minDir, secDir];
}

function addTickMarks() {
    var clockRadius = 50;
    var clockCenter = 50;

    for(var tickIndex=0; tickIndex<12; tickIndex++) {
        var tickPlaceMathX = clockRadius * Math.cos(tickIndex * Math.PI * 60/360) +(clockCenter);
        var tickPlaceMathY = clockRadius * Math.sin(tickIndex * Math.PI * 60/360) +(clockCenter-2);

        var tickRot = tickIndex * (360/12);

        var minTickMark = $("<div>", {
            'class': "minTick tick",
            css: {
                left: `${tickPlaceMathX}%`,
                top: `${tickPlaceMathY}%`,
                transform: `rotateZ(${tickRot}deg)`,
            }
        });

        $('.clockBody').append(minTickMark)
    }

    for(var tickIndex=0; tickIndex<60; tickIndex++) {
        var tickPlaceMathX = clockRadius * Math.cos(tickIndex * Math.PI * 12/360) +clockCenter;
        var tickPlaceMathY = clockRadius * Math.sin(tickIndex * Math.PI * 12/360) +(clockCenter-1);

        var tickRot = tickIndex * (360/60);

        var secTickMark = $("<div>", {
            'class': "secTick tick",
            css: {
                left: `${tickPlaceMathX}%`,
                top: `${tickPlaceMathY}%`,
                transform: `rotateZ(${tickRot}deg)`,
            }
        });

        $('.clockBody').append(secTickMark)
    }

}