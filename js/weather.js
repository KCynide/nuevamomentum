const API_KEY = '0b9541132be1e1a1d73c6436f31f02b4';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You Live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        console.log(data.name, data.weather[0].main);
    });
}
function onGeoError() {
    alert("Where are you??");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);