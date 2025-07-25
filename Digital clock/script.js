let date;
let timeArea = document.querySelector('#time')
let dayArea = document.querySelector('#days')
let hours,minutes,seconds,day;

setInterval(function(){
    date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    day = date.getDay()
    console.log('day = ',day)

    if(hours < 10){
        hours = '0' + hours
    }
    if(minutes < 10){
        minutes = '0' + minutes
    }
    if(seconds < 10){
        seconds = '0' + seconds
    }
    let time = `${hours}:${minutes}:${seconds}`
    console.log(time)
    timeArea.innerHTML = time

    dayArea.children[date.getDay()].style.color = "white"
},1000)