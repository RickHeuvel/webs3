class WeatherController
{
    constructor()
    {
        this.weatherView = new WeatherView(this);
    }

    initialize()
    {
        this.weatherView.setUpWeatherView();
    }

    setWeather(location)
    {
        const API_KEY = 'd6a207bba10f6e36888b5bf90ba68cb7';
        const LOCATION = location;
        const COUNTRY = 'nl';
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION},${COUNTRY}&APPID=${API_KEY}`;
        var self = this;


    }
}
