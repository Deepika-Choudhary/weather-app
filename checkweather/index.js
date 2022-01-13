// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 11f76e6f8a32776a235e1e6bf8ba0393
console.log("Weather forecast")
const url="api.openweathermap.org/data/2.5/weather?q=Delhi&appid=11f76e6f8a32776a235e1e6bf8ba0393";

async function getdata(url){
    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
}

getdata(url);