// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 11f76e6f8a32776a235e1e6bf8ba0393
console.log("Weather forecast")
var cityName = 'Jammu';
const url="https://api.openweathermap.org/data/2.5/weather?q={cityName}+&appid=11f76e6f8a32776a235e1e6bf8ba0393";

async function getdata(url){
    const response = await fetch(url);

    var data = await response.json();
    // console.log(data);
    console.log(data.sys.country);
    console.log(data.name);
    console.log(data.main);
    console.log(data.main.temp);
    console.log(data.main.pressure);
    console.log(data.main.humidity);

    document.getElementById('city').innerHTML = data.sys.country + ", " + data.name;
    document.getElementById('degree').innerHTML = data.main.temp + "<br>" + data.weather[0].main;
    document.getElementById('pressure').innerHTML = "Pressure : " + data.main.pressure;
    document.getElementById('humidity').innerHTML = "Humidity : " + data.main.humidity;
    document.getElementById('visibility').innerHTML = "Visibility : " + data.visibility;

}


var date=new Date();
// var day= date.toLocaleString("default", { day: "short" })
var today=date.toUTCString().slice(5, 16);
// console.log(day.toString);
console.log(today);
// document.getElementById('date').innerHTML = day;
document.getElementById('date').innerHTML = today;


function changeLocation(){
    document.getElementById('addlocation').innerHTML =  '<input type="text" placeholder="Enter city name">';
    // cityName = text;
    cityName = document.getElementById('addlocation').innerHTML;
   
}
getdata(url);
