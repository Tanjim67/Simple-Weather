// My api code b86fdca1fc1feb8069e11f8e2923a08b

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 
// https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=b86fdca1fc1feb8069e11f8e2923a08b 



const weatherSearch = () => {
    const city = document.getElementById('search')
    const cityName = city.value;
    city.value = '';
    // const apikey = '';
    if (cityName != '') {
        city.setAttribute("placeholder", 'Search City');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b86fdca1fc1feb8069e11f8e2923a08b`;
        fetch(url)
            .then(res => res.json())
            .then(data => showWeather(data))
    } else {
        city.setAttribute("placeholder", 'Please Enter a City');

    }

}


const showWeather = (weather) => {
    console.log(weather.name)
    const weatherContainer = document.getElementById('showWeather');
    weatherContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('showWeather')
    const weatherKind = weather.weather[0].main;
    const weatherIcon = weather.weather[0].icon;

    div.innerHTML = `            
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="" >
        <h1 class="text">${weather.name}</h1>
        <h3 class="text"><span>${(weather.main.temp - 273.15).toFixed(0)}</span>&deg;C</h3>
        <h1 class="lead text">${weatherKind}</h1>
        `;

    weatherContainer.appendChild(div);



}
