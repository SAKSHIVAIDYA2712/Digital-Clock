let a;
let h;
let m;
let s;
let date;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  m = a.getMinutes();
  h = a.getHours();
  s = a.getSeconds();
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;
  document.getElementById("Tdate").innerHTML = date;
}, 1000);
