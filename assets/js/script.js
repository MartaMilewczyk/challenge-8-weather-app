const dateTodayEl = $('#date-today');
const cityDisplayEl = $('#city-display');
const temperatureEl= $('#temperature-today');
const windEl = $('#wind-speed-today');
const humidityEl = $('#humidity-today');
const forecastEl = $('#forecast');

const todayDate = dayjs().format('dddd D MMM YYYY');
const kelvinTmp = 273;

dateTodayEl.append(todayDate);

$('#search-button').on('click', function (event) {
    event.preventDefault();
    
    const APIkey = "5855cfc92433887fd60ef500d9af8040";
    const cityName = $('#search-input').val().trim();
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // display city from input and related weather parameters
        cityDisplayEl.append(cityName);
        temperatureEl.append(`${Math.floor(response.main.temp - kelvinTmp)} °C`);
        windEl.append(`${response.wind.speed}  m/s`);
        humidityEl.append(`${response.main.humidity} %`);
        console.log(response);

    })
    
    
    })