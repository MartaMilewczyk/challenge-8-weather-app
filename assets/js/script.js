
$('#search-button').on('click', function (event) {
    event.preventDefault();
    
    const APIkey = "5855cfc92433887fd60ef500d9af8040";
    const cityName = $('#search-input').val().trim();
    
    let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
    
    
    })