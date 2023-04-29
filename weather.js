
function autolocateInfo() {

    successCallback = (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
    
        fetch(`http://api.weatherapi.com/v1/current.json?key=30c84767d0894264b4a191136232704&q=${lat},${lon}&aqi=no`)
        .then(data=>data.json())
        .then(data=>weatherData(data))

    
    };
    
    navigator.geolocation.getCurrentPosition(successCallback);

}


function locationInfo() {
    loctn=loc.value
    fetch(`http://api.weatherapi.com/v1/current.json?key=30c84767d0894264b4a191136232704&q=${loctn}&aqi=no`).then(data=>data.json()).then(data=>weatherData(data))
}



function weatherData(wdata) {
    loc=wdata.location.name
    con=wdata.location.country
    reg=wdata.location.region
    tz=wdata.location.tz_id
    dt=wdata.location.localtime
    icn=wdata.current.condition.icon
    temp=wdata.current.temp_c
    feelslike=wdata.current.feelslike_c
    condition=wdata.current.condition.text
    humidity=wdata.current.humidity
    wind=wdata.current.wind_kph
    winddir=wdata.current.wind_dir
    precip=wdata.current.precip_mm
    
locresult.innerHTML=`
<section class="p-3 m-3">
    <h1><i class="fa-solid fa-map-location-dot" style="color: #d8d8d8;"></i></h1>
    <p><span style="padding-right: 10px; letter-spacing: 1px;">Location - ${loc} |</span>
    <span style="padding-right: 10px; letter-spacing: 1px;">Country - ${con} |</span>
    <span style="padding-right: 10px; letter-spacing: 1px;">Region - ${reg} |</span>
    <span style="padding-right: 10px; letter-spacing: 1px;">Date & Time - ${dt}</span></p>
</section>

`

result.innerHTML=`

<div class="text-center wdata">
    <h1><img src="${icn}" alt=""></h1>
    <p style="margin-bottom: 5px;">Temprature</p>
    <h1>${temp}°C</h1>
</div>

<div class="text-center wdata">
    <img src="./images/icons8-temperature.gif" alt="" style="border-radius: 10px; margin: 10px;">
    <p style="margin-bottom: 5px; margin-top: 10px;">Feelslike</p>
    <h4>${feelslike}°C</h4>
</div>

<div class="text-center wdata">
    <img style="width: 35px; margin: 20px;" src="./images/humid.png" alt="">
    <p style="margin-bottom: 5px;">Humidity</p>
    <h4>${humidity}%rh</h4>
</div>

<div class="text-center wdata">
    <h1><img src="./images/animated/weather.svg" alt=""></h1>
    <p style="margin-bottom: 5px;">Condition</p>
    <h4>${condition}</h4>
</div>

<div class="text-center wdata">
    <img src="./images/icons8-windy-weather.gif" alt="" style="border-radius: 10px; margin: 10px;">
    <p style="margin-bottom: 5px; margin-top: 10px;">Wind Speed</p>
    <h4>${wind} kph</h4>
</div>

<div class="text-center wdata">
    <img src="./images/winddir.gif" alt="" style="border-radius: 10px; margin: 10px;">
    <p style="margin-bottom: 5px; margin-top: 10px;">Wind Direction</p>
    <h4>${winddir}</h4>
</div>

<div class="text-center wdata">
    <img style="width: 45px; margin: 20px;" src="./images/precipitation.png" alt="">
    <p style="margin-bottom: 5px;">Precipitation</p>
    <h4>${precip} mm</h4>
</div>

`
}



  
