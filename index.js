
function currentTime(){
    const now = new Date();

    const dateTimeObject = {
        year: now.getUTCFullYear(),
        month: now.getUTCMonth() + 1,
        day: now.getUTCDate(),
        hours: now.getUTCHours(),
        minutes: now.getUTCMinutes(),
        seconds: now.getUTCSeconds(),
        milliseconds: now.getUTCMilliseconds()
    };
    
    let dateUpdate = document.getElementById("date");
    let newFormat = now.getDay();

if (newFormat == 1){
    dateUpdate.textContent = "Monday";
}else if(newFormat == 2){
    dateUpdate.textContent = "Tuesday";
}else if(newFormat == 3){
    dateUpdate.textContent = "Wednesday";
}else if(newFormat == 4){
    dateUpdate.textContent = "Thursday";
}else if(newFormat == 5){
    dateUpdate.textContent = "Friday";
}else if(newFormat == 6){
    dateUpdate.textContent = "Saturday";
}else if(newFormat == 7){
    dateUpdate.textContent = "Sunday";
}
let dateTime = document.getElementById("dateTime");
dateTime.textContent = `${dateTimeObject.milliseconds}`
}
currentTime();

setInterval(currentTime);
