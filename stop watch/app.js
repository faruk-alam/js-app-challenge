const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
function start() {
    if(!isRunning){
        startTime = Date.now()- elapsedTime;
        timer = setInterval(update,10)
        isRunning = true;  
    }
}
 start();
function stop() {
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}  

function reset() {
    if(isRunning){
        clearInterval(timer);
        isRunning = false;
    }
    elapsedTime = 0;
    display.textContent = "00:00:00:00";

}
function update() {
    let currentTime = Date.now();
     elapsedTime = currentTime - startTime;
     let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
     let minute = Math.floor(elapsedTime / (1000 * 60) % 60);
     let second = Math.floor(elapsedTime / 1000 % 60);
     let miliSecond = Math.floor(elapsedTime % 1000 / 10);
     hour = String(hour).padStart(2,"0");
     minute = String(minute).padStart(2,"0");
     second = String(second).padStart(2,"0");
     miliSecond = String(miliSecond).padStart(2,"0");
     display.textContent = `${hour}:${minute}:${second}:${miliSecond}`;
    }
