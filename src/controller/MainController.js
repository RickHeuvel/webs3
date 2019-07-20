class MainController {

    constructor() {
        this.monsterController = new MonsterController();
        this.weatherController = new WeatherController(this.gridController.regionList);
        this.gridController = new GridController();
        this.initialize();
    }

    initialize() {
        this.monsterController.initialize();
        this.weatherController.initialize();
        this.gridController.initialize();
    }

}
