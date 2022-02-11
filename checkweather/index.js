// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 11f76e6f8a32776a235e1e6bf8ba0393
console.log("Weather forecast");

var date = new Date();
// var day= date.toLocaleString("default", { day: "short" })
// var today = 
// console.log(day.toString);
// console.log(today);
document.getElementById("date").innerHTML = date.toUTCString().slice(5, 16);

var cityName = "Jammu";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}+&appid=11f76e6f8a32776a235e1e6bf8ba0393`;

async function getdata(url) {
  const response = await fetch(url);

  var data = await response.json();
  // console.log(data);
  console.log('country- ',data.sys.country);
  console.log('city- ',data.name);
  console.log('data- ',data.main);
  console.log('temperature- ',data.main.temp);
  console.log('pressure- ',data.main.pressure);
  console.log('humidity- ',data.main.humidity);

  document.getElementById("city").innerHTML =
    data.sys.country + ", " + data.name;
  document.getElementById("degree").innerHTML =
    data.main.temp + "<br>" + data.weather[0].main;
  document.getElementById("pressure").innerHTML =
    "Pressure : " + data.main.pressure;
  document.getElementById("humidity").innerHTML =
    "Humidity : " + data.main.humidity;
  document.getElementById("visibility").innerHTML =
    "Visibility : " + data.visibility;
}

//method - 1
function submitBtn() {
  const cityBox = document
    .getElementById("addlocation")
    .getElementsByTagName("input");
  const cityName = cityBox[0].value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}+&appid=11f76e6f8a32776a235e1e6bf8ba0393`;
  getdata(url);
}

function changeLocation() {
  document.getElementById("addlocation").innerHTML =
    `<input type="text" placeholder="Enter city name">
    <button onclick=submitBtn()>submit</button>`;

//method - 2

//   const city2 = document
//     .getElementById("addlocation")
//     .getElementsByTagName("input")[0];
//   console.log(document.getElementById("addlocation").getElementsByTagName("input"));
//   console.log(city2);

//   city2.addEventListener("change", (e) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}+&appid=11f76e6f8a32776a235e1e6bf8ba0393`;
//     console.log('properties of new city- ',document.getElementById("addlocation").getElementsByTagName("input"));
//     getdata(url);
//   });
}

getdata(url);
