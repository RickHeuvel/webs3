class WeatherView
{
    constructor(weatherController)
    {
        this.weatherController = weatherController;

    }

    setUpWeatherView()
    {
        this.createTitleBox();
        this.createWeatherBox();
    }

    createTitleBox()
    {
        let weatherTitle = document.querySelector(".weather-title");

        //set title (h1)
        let title = document.createElement("h1");
        let title_content = document.createTextNode("Weather");
        title.appendChild(title_content);
        weatherTitle.append(title);
    }

    createWeatherBox()
    {
        let weatherBox = document.querySelector(".weather-box");
        let searchBoxHolder = document.createElement("div");
        searchBoxHolder.classList.add("search-box-container");
        let weatherForm = document.createElement("div");
        let searchLabel = document.createElement("label");
        let searchLabelContent = document.createTextNode("Search location");
        let searchBox = document.createElement("input");
        searchBox.id = 'search-box';
        searchBox.type = 'text';
        searchBox.placeholder = 'Location..';
        searchBox.name = 'search-box';
        let searchButton = document.createElement("button");
        searchButton.id = 'search-button';
        searchButton.type = 'submit';
        searchButton.textContent = 'Search';
        let hr = document.createElement("hr");

        // callback
        let searchButtonCallback = this.checkWeather.bind(this);
        let searchBoxCallback = this.checkWeather.bind(this);

        searchButton.addEventListener("click", searchButtonCallback);
        searchBox.addEventListener("enter", searchBoxCallback);

        searchBoxHolder.appendChild(weatherForm);
        weatherForm.appendChild(searchBox);
        weatherForm.appendChild(searchButton);
        searchLabel.appendChild(searchLabelContent);
        weatherBox.appendChild(searchLabel);
        weatherBox.appendChild(searchBoxHolder);
        weatherBox.appendChild(hr);

        let weatherDataDiv = document.createElement("div");
        weatherDataDiv.id = "weather-data";
        weatherBox.appendChild(weatherDataDiv);

        // create box for weatherAttack
        specialAttackDiv.classList.add("gif_holder");
        weatherTitle.appendChild(specialAttackDiv);
    }

    EnterListener(event)
    {
        if(event.key === "Enter")
        {
            this.checkWeather();
        }
    }

    checkWeather()
    {
        let searchBox = document.querySelector("#search-box");

        if(searchBox.value !== "")
        {
            this.weatherController.setWeather(searchBox.value);
        }
    }

    setUpLocationHolder(locationData)
    {
        let locationHolder = document.createElement("div");
        locationHolder.classList.add("location-container");
        let locationLabel = document.createElement("p");
        let locationText = document.createTextNode(`Location: ${locationData}`);
        locationLabel.appendChild(locationText);
        locationHolder.appendChild(locationLabel);
        this.addWeatherData(locationHolder);
    }

    setUpTemperatureHolder(temperatureData){
        let temperatureHolder = document.createElement("div");
        temperatureHolder.classList.add("temperature-container");
        let temperatureLabel = document.createElement("p");
        let celciusTemp = this.weatherController.convertToCelsius(temperatureData);
        let temperatureText = document.createTextNode(`Temperature: ${celciusTemp}°`);
        temperatureLabel.appendChild(temperatureText);
        temperatureHolder.appendChild(temperatureLabel);
        this.addWeatherData(temperatureHolder);
    }

    setUpHumidityHolder(humidityData){
        let humidityHolder = document.createElement("div");
        humidityHolder.classList.add("humidity-container");
        let humidityLabel = document.createElement("p");
        let humidityText = document.createTextNode(`Humidity: ${humidityData}`);
        humidityLabel.appendChild(humidityText);
        humidityHolder.appendChild(humidityLabel);
        this.addWeatherData(humidityHolder);
    }

    setUpWindSpeed(windSpeedData){
        let windSpeedHolder = document.createElement("div");
        windSpeedHolder.classList.add("wind-speed-container");
        let windSpeedLabel = document.createElement("p");
        let windSpeedText = document.createTextNode(`wind speed: ${windSpeedData} km/h`);
        windSpeedLabel.appendChild(windSpeedText);
        windSpeedHolder.appendChild(windSpeedLabel);
        this.addWeatherData(windSpeedHolder);
    }

    addWeatherData(element){
        let weatherBox = document.querySelector("#weather-data");
        weatherBox.appendChild(element);
    }

    showWeather(weather)
    {
        // wipe old weather data
        let parentElement = document.querySelector("#weather-data");
        this.wipeWeatherData(parentElement);
        //get div that shows weather data
        this.setUpLocationHolder(weather.name);
        this.setUpTemperatureHolder(weather.main.temp);
        this.setUpHumidityHolder(weather.main.humidity);
        this.setUpWindSpeed(weather.wind.speed);
    }

    wipeWeatherData(weatherHolder){
        while(weatherHolder.firstChild){
            weatherHolder.firstChild.remove();
        }
    }

    notifyGrid(temperature, wind, humidity) {
        let grid = document.querySelector(".grid");
        grid.dispatchEvent(new CustomEvent("weather-changed", {
            detail: {
                temperature: temperature,
                wind: wind,
                humidity: humidity
            }
        }));
    }

    showError(error)
    {
        alert(error);
    }

}
