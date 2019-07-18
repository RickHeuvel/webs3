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
}
