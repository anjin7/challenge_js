const clock = document.querySelector("#clock");
const timeGreeting = document.querySelector("#time-greeting")

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;

  if(hours>=5 && hours<12){
    timeGreeting.innerText= "Good Morning!";
  }else if(hours>=12 && hours<18){
    timeGreeting.innerText= "Good Afternoon!";
  }else{
    timeGreeting.innerText= "Good Evening!";
  }
}
getClock();
setInterval(getClock, 1000);
