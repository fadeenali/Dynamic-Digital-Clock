let section = document.querySelector("section")
let icon = document.querySelector(".icon")

icon.onclick = () => {
    section.classList.toggle("dark");
}
setInterval(() => {
    let date = new Date(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds()
    let d;
    d = hour < 12 ? "AM" : "PM"; // if hour is samller then 12  so its value  will be AM  else its value will be PM
    hour = hour > 12 ? hour - 12 : hour; //if hour value is greter than 12 than 12 will be substract    (by doing this we will get value till 12)
    hour = hour == 0 ? hour = 0 : hour; //  if houre is  0 than value be 12 
    // adding 0 to all the value if they will less then 10
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // console.log(seconds)
    document.querySelector(".hour_num").innerHTML = hour;
    document.querySelector(".min_num").innerHTML = minutes;
    document.querySelector(".sec_num").innerHTML = seconds;
    document.querySelector(".am_pm").innerHTML = d;
}, 1000);