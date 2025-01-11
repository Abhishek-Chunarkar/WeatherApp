const apikey = "21dba33d71a5cf29222481e687facd02";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let bkg = document.querySelector(".card");

const now = new Date();
let currentTime = now.toLocaleTimeString();
const currentDate = now.toLocaleDateString();

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "Pictures/clouds.png";
        bkg.style.backgroundImage = "url(https://i.pinimg.com/736x/42/c0/47/42c0472298635166d7ca9ba2cd88e6a4.jpg)";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "Pictures/snow.png"
        bkg.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2023/04/12/17/19/17-19-40-187_512.gif')";
    }
    else if (data.weather[0].main == "Dizzle") {
        weatherIcon.src = "Pictures/dizzle.png"
        bkg.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2023/06/25/21/55/21-55-38-961_512.gif')";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "Pictures/rain.png"
        bkg.style.backgroundImage = "url('https://preview.redd.it/75j1a8zurfpd1.gif?width=500&auto=webp&s=db1a7f906fb47c2d40f1433569a80cd4a9206d77')";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "Pictures/mist.png"
        bkg.style.backgroundImg = "url('https://i.pinimg.com/originals/1d/1b/33/1d1b336e40de7fd0689afc6561f4e92f.gif')";
    }
    else if (data.weather[0].main == "Smoke") {
        weatherIcon.src = "Pictures/smoke.png"
        bkg.style.backgroundImg = "url(https://c0.wallpaperflare.com/preview/184/36/42/fog-city-cityscape-malaysium.jpg)";
    }

    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "Pictures/clear.png"
        bkg.style.backgroungImage = "url('https://i.pinimg.com/236x/25/5b/ca/255bca7b14df5c8c03ccd2d971d33c0f.jpg')";
    }
    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "Pictures/haze.png"
        bkg.style.backgroungImage = "url('https://media.wired.com/photos/65e860922a01e579ac0d29f2/master/w_1920,c_limit/london-heatwave.jpg')";
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".Date").innerHTML = currentDate;
    document.querySelector(".Time").innerHTML = currentTime;


}

searchBtn.addEventListener('click', () => {

    checkWeather(searchBox.value);
});
searchBox.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

