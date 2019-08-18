class WeatherController
{
    constructor()
    {
        this.weatherView = new WeatherView(this);
        this.monsterController = new MonsterController();
    }

    initialize()
    {
        this.weatherView.setUpWeatherView();
        this.setWeather(this.setLocations('Eindhoven'));
    }

    changeLocation(region){
        this.setWeather(this.setLocations(region))
    }
    setLocations(region){
        let location;
        switch (region) {
            case "Jungle":
                location = "Groningen";
                break;
            case "IcePole":
                location = "Amsterdam";
                break;
            case "Sjahari":
                location = "Weert";
                break;
            default:
                return;
        }
        return location;
    }

    setWeather(location)
    {
        const API_KEY = 'd6a207bba10f6e36888b5bf90ba68cb7';
        const LOCATION = location;
        const COUNTRY = 'nl';
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${LOCATION},${COUNTRY}&APPID=${API_KEY}`;
        var self = this;

        fetch(URL)
            .then(function (response)
            {
                if(response.ok){
                    return response.json();
                }
                else
                {
                    throw new Error("Network response bad")
                }
            })
            .then(function(myJSON){
                self.monsterController.setWeatherStrength(myJSON);
                self.weatherView.showWeather(myJSON);
                let temp = self.convertToCelsius(myJSON.main.temp);
                self.weatherView.notifyGrid(temp, myJSON.wind.speed, myJSON.wind.speed);
            })
            .catch(function(error){
                self.weatherView.showError("Could not find location");
                return;
            })
    }

    //convert the Kelvin value to Celsius
    convertToCelsius(temperature) {
        temperature = parseFloat(temperature) - 273.15;
        temperature = Math.round(temperature * 10) / 10;
        return temperature;
    }
}
