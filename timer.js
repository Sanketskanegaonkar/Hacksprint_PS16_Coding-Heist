var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();
var myfunc = setInterval(function() {

    }, 1000)
var now = new Date().getTime();
var timeleft = countDownDate - now;
        
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);      
document.getElementById("days").innerHTML = days + "d "
document.getElementById("hours").innerHTML = hours + "h " 
document.getElementById("mins").innerHTML = minutes + "m " 
document.getElementById("secs").innerHTML = seconds + "s"      