const dayName = document.getElementById("date-dayname");
const dayDate = document.getElementById("date-day");
const locate= document.getElementById("locate");
const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const day4 = document.getElementById("day4");



 var d = new Date();
 var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 var monthNames= ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decmber'];
 
 const body= document.querySelector("body");
//  body.style.background= "white"; 


dayName.innerHTML= dayNames[d.getDay()];
day1.innerHTML= dayNames[d.getDay()+1];
day2.innerHTML= dayNames[d.getDay()+2];
day3.innerHTML= dayNames[d.getDay()-4];
day4.innerHTML= dayNames[d.getDay()-3];

dayDate.innerHTML= d.getDate()+" "+monthNames[d.getMonth()]+" "+d.getUTCFullYear();

var time = d.getHours();

if( time>6 && time<17){
  body.style.background= "white";
}else if(time>17 && time<19){
  body.style.background= "gray";
}else{
  body.style.background= "black";
}

const button = document.getElementById("btn");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");
const windValue = document.getElementById("windValue");
const city = document.getElementById("locate");
const humy = document.getElementById("humy");
const visy = document.getElementById("visy");

let lat, long;
fetch("http://ipwhois.app/json/").then(response=> response.json())
  .then(data =>{ 
     lat = data.latitude;
      long = data.longitude;

      console.log(lat, long);
    })

button.addEventListener('click', function(){
fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&exclude={part}&appid=a21b44f10caded6f1933142df5da47be")
    .then(response1=>response1.json())
    .then(data1=> {
      temp.innerHTML=(((data1.main.temp)-273.25).toFixed(1))+"°C";
      city.innerHTML= data1.name;
      windValue.innerHTML=data1.wind.speed+" m/s";
      desc.innerHTML= data1.weather[0].description;
      humy.innerHTML= data1.main.humidity+" %";
      visy.innerHTML= data1.visibility+" m";
      console.log(data1.visibility);
    })
  
})