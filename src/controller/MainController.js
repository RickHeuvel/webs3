class MainController {

    constructor() {
        this.monsterController = new MonsterController();
        this.weatherController = new WeatherController();
        this.gridController = new GridController(this.monsterController, this.weatherController);
        this.initialize();
    }

    initialize() {
        this.monsterController.initialize();
        this.gridController.initialize();
        this.weatherController.initialize();
    }

}
