
const timeDawn = ()=>{
const future =Date.parse("2022-06-31T00:00:00.000Z");
const   now = Date.now();
const  timeLeftForGraduation=future-now;

const days =Math.floor(timeLeftForGraduation/(1000*60*60*24));
const hours =Math.floor(timeLeftForGraduation/(1000*60*60));
const Minutes =Math.floor( timeLeftForGraduation/(1000*60));
const seconds =Math.floor(timeLeftForGraduation/1000)

const d =days;
const h=hours-days*24;
const m=Minutes-hours*60;
const s=seconds -Minutes*60;

document.getElementById("Days").innerText=d;
document.getElementById("Hours").innerText=h;
document.getElementById("Minutes").innerText=m;
document.getElementById("Seconds").innerText=s;
  
}
setInterval(timeDawn, 1000);
function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : ":montassarthemri20@gmail.com",
        Password : "MT26236286@@@",
        To : 'montassarthemri@gmail.com',
        From : document.getElementById("email").value,
        Subject : "notify me",
        Body : document.getElementById("email").value
    }).then(
      message => alert(message)
    );
    
}