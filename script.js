const starting=60;
let time=starting * 60;
const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown , 1000);
function updateCountdown() 
{
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds= seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML= minutes +":"+seconds;     
    time--;
}