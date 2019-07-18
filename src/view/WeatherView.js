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

    }
}
