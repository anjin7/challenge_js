const API_KEY ="6c51ea3b0ea18401c0958d75334a0a54"


https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  console.log(url);
}
function onGeoError(){
  alert("Sorry. Can't find you. No weather for you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);