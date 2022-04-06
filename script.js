// Hajime!

// API KEY -----------------------------------
var APIKey = "c033c7c10efdd914b13fe192a963baac";
// API KEY -----------------------------------
var city = document.getElementById("city_name");
var searchCity = document.getElementById("text_input")
city.textContent = searchCity.value;
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var uvEl = document.getElementById("uv_index");
var current = moment().format("L");
// log to the console to check it moment().format("MMMM Do YYYY");works
console.log(current);

// ----------------------------------------------------------------------------------------------------------------------------------------

// city becomes a parameter in order to display which city in the API to use
function fetchCurrentWeather() { 
    // Current Weather URL Variable --- units=imperial turns the units of the temperature to Farenheit
    var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity.value + "&units=imperial&appid=" + APIKey;

    fetch(currentWeatherURL)
        // 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // ^^ WORKS^^

            // City Name
            var cityName = data.name;
            //  Icon
            var icon = data.weather[0].icon;
            document.querySelector('#icon').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            // Temperature
            var temperature = data.main.temp;
            // Wind
            var wind = data.wind.speed;
            // Humidity
            var humidity = data.main.humidity;
            // var uvIndex = data
            console.log("City name: " + cityName);
            console.log("Icon: " + icon);
            console.log("Temperature: " + temperature);
            console.log("Wind: " + wind);
            console.log("Humudity: " + humidity);
            // console.log("UX: " + UV);

            // ^^ WORKS^^

            // Latitude
            var lat = data.coord.lat;
            // Longitude
            var lon = data.coord.lon;
            console.log("Latitude: " + lat);
            console.log("Longitude: " + lon);

            // Must pass Latitude and Longitude parameters (as per the Object data... it will point to where a specified city is)
            var oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + APIKey;
            // Fetching the variable above, containing the URL we need
            fetch(oneCallURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

            // ^^ WORKS^^

                tempEl.textContent = "Temp: " + temperature + " \u2109";
                windEl.textContent = "Wind: " + wind + " MPH";
                humidityEl.textContent = "Humidity: " + humidity + " %";
                city.textContent = cityName + " (" + current + ")";
            })
        })



      
}
// use .split() for after the ,

$('#button').on('click', fetchCurrentWeather);

// ----------------------------------------------------------------------------------------------------------------------------------------

// function fetchOneCall() {
//     var latLon = currentWeatherURL.json();
//     var lat = latLon.coord.lat;
//     var lon = latLon.coord.lon;
//     console.log(lat)

        
   




// EXTRA info ---------------------------------------------------------------------------------------------------------------------------

// https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=c033c7c10efdd914b13fe192a963baac (change the city name and API key; remove brackets)
// ^^^ You can also add link into search engine to see the Object and its data