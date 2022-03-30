var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var wind = document.querySelector('.wind');
var visibility = document.querySelector('.visibility');
var button = document.querySelector('.submit');


button.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=29d045b6f4e8f10d2c24deceec3a2785&units=metric')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      var visibilityValue = data['visibility'];
      var windValue = data['wind']['speed'];

      main.innerHTML = nameValue;
      desc.innerHTML = "weather : " + descValue;
      temp.innerHTML = "temperature(°C) : " + tempValue;
      visibility.innerHTML = "visibility(metres) :" + visibilityValue;
      wind.innerHTML = "wind speed(m/s) :" + windValue;
    })
})