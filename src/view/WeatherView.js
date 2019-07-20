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
        let searchLabel = document.createElement("div");
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

        // special attack gif box
        let weatherTitle = document.querySelector(".weather-title");
        let specialAttackDiv = document.createElement("div");
        specialAttackDiv.classList.add("gif-holder");
        weatherTitle.appendChild(specialAttackDiv);

    }

    EnterListener(event)
    {
        if(event.key === "Enter")
        {
            console.log("waaa");
            this.checkWeather();
        }
    }

    checkWeather()
    {
        console.log("checkeee");
        let searchBox = document.querySelector("#search-box");

        if(searchBox.value !== "")
        {
            this.weatherController.setWeather(searchBox.value);
        }
    }

    // setUpLocation(locationText)
    // {
    //     let locationHolder = document.createElement("div");
    //     locationHolder.classList.add("location-container");
    // }

    showWeather(weather)
    {

    }

}
