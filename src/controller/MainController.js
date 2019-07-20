class MainController {

    constructor() {
        this.monsterController = new MonsterController();
        this.gridController = new GridController();
        this.weatherController = new WeatherController(this.gridController.regionList);
        this.initialize();
    }

    initialize() {
        this.monsterController.initialize();
        this.weatherController.initialize();
        this.gridController.initialize();
    }

}
