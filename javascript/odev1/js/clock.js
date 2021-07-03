let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");
let time;
let days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

let name = prompt("Isim Giriniz: ");
myName.textContent = name;

setInterval(() => {
  time = new Date();
  myClock.textContent =
    (time.getHours() > 9 ? time.getHours() : "0" + time.getHours()) +
    ":" +
    (time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes()) +
    ":" +
    (time.getSeconds() > 9 ? time.getSeconds() : "0" + time.getSeconds()) +
    " " +
    days[time.getDay() - 1];
}, 1000);
