const input = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBox = document.querySelector(".weather");
const msg = document.querySelector(".msg")

const apiKey = "b828d98facc93d12edbdc82adc4be12c";

button.addEventListener("click", () => {
    check(input.value)
})

input.addEventListener("submit", () => {
    check(input.value)
})

function check (city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "images/clouds.png"
            } 
            else if(data.weather[0].main === "Clear"){
                weatherIcon.src = "images/clear.png"
            } 
            else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            } 
            else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "images/mist.png"
            } 
            else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "images/rain.png"
            } 
            else if(data.weather[0].main === "Snow"){
                weatherIcon.src = "images/snow.png"
            }

            weatherBox.style.display = "block";

            

        })
        .catch (() => {
            msg.style.display = "block";
        })
        input.value = ""
}


