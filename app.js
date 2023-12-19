const apiKey = "85f85ac21437e83e315d180d7034c316";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function chechWeather() {
    const city = document.querySelector(".search input").value;

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(city)
    console.log(data.name)

    if (city == "") {
        document.querySelector(".city").innerHTML = "Not Found!!";
    } else {
        if (data.name == undefined) {
            document.querySelector(".city").innerHTML = "Not Found!!";
        } else {
            document.querySelector(".city").innerHTML = data.name;
        }
    }

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    document.querySelector(".search input").value = "";

    const weather = document.querySelector(".weather-icon");

    if (data.weather[0].main === "Clouds") {
        weather.src = "img/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weather.src = "img/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weather.src = "img/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weather.src = "img/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weather.src = "img/mist.png";
    }

}