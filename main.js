const apiKey = '140ee96edad255f225c92fec2c89ce86';

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=dhaka';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = 'images/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = 'images/mist.png'
    }
    
}



searchBtn.addEventListener('click', () =>{

    checkWeather(searchBox.value)
    console.log(checkWeather())
})
