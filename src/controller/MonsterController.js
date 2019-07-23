class MonsterController
{
    constructor()
    {
        this.monsterView = new MonsterView(this);
        this.types = ["Water", "Fire", "Earth", "Air"];
        this.monsterList = [];
    }

    initialize()
    {
        this.monsterView.setUpMonsterView();
    }

    createMonster(name, type, strength, typeOfArms, amountOfArms, amountOfLegs, amountOfEyes, furType, colour){
        let canFly;
        let canSwim;
        let specialPower;
        let id = this.generateId();

        switch (type){
            case "Water":
                canSwim = true;
                canFly = false;
                specialPower = "???";
                break;
            case "Fire":
                canSwim = false;
                if(furType === "feathers"){
                    canFly = true;
                }else {
                    canFly = false;
                }
                specialPower = "???";
                break;
            case "Earth":
                canSwim = false;
                canFly = false;
                specialPower = "???";
                break;
            case "Air":
                if(furType === "hair" || furType === "scales"){
                    canSwim = true;
                }else {
                    canSwim = false;
                }
                canFly = true;
                specialPower = "???";
                break;
            default:
                return;
        }

        let monster = new Monster(id, name, type, strength, amountOfArms, typeOfArms, amountOfLegs, amountOfEyes, furType, colour, canFly, canSwim);
        this.monsterList.push(monster);

        return monster;
    }

    generateId(){
            return this.monsterList.length +1;
    }

    getArmAmount(type){
        let max;
        let range = [];


        switch (type) {
            case "Water":
                max = 8;
                for (let i = 1; i <= max; i++ ){
                    range.push(i);
                }
                break;
            case "Fire":
                max = 6;
                for (let i = 1; i <= max; i++ ){
                    range.push(i);
                }
                break;
            case "Earth":
                range.push(2);
                break;
            case "Air":
                range.push(2);
                break;
            default:
                return;
        }

        return range;
    }

    getArmType(type){
        let types = [];
        switch (type) {
            case "Water":
                types = ["tentacles", "fins"];
                break;
            case "Fire":
                types = ["tentacles", "claws", "claw wings"];
                break;
            case "Earth":
                types = ["claws"];
                break;
            case "Air":
                types = ["claws", "claw wings"];
                break;
            default:
                return;
        }

        return types;
    }

    getFurType(type){
        let types = [];

        switch (type) {
            case "Water":
                types = ["scales", "slime"];
                break;
            case "Fire":
                types = ["scales", "feathers"];
                break;
            case "Earth":
                types = ["hair" , "scales", "slime"];
                break;
            case "Air":
                types = ["feathers", "hair", "scales"];
                break;
            default:
                return;
        }

        return types;
    }

    getColour(type) {
        let colours = [];
        switch (type) {
            case "Water":
                colours = ["blue", "red", "green"];
                break;
            case "Fire":
                colours = ["red", "orange", "brown"];
                break;
            case "Earth":
                colours = ["purple" , "orange", "white"];
                break;
            case "Air":
                colours = ["white", "blue", "purple"];
                break;
            default:
                return;
        }

        return colours;
    }

    getEyeAmount(type){
        let max = 0;
        let range = [];

        switch (type) {
            case "Water":
                max = 8;
                for (let i = 1; i <= max; i++ ){
                    range.push(i);
                }
                break;
            case "Fire":
                max = 4;
                for (let i = 1; i <= max; i++ ){
                    range.push(i);
                }
                break;
            case "Earth":
                range.push(2);
                break;
            case "Air":
                range.push(2);
                break;
            default:
                return;
        }
        return range;
    }

    getLegAmount(type, armAmount){
        let max = 0;
        let range = [];

        switch (type) {
            case "Water":
                if (armAmount <= 4){
                    max = 4;

                    for (let i = 1; i <= max; i++ ){
                        range.push(i);
                    }
                }else {
                    range.push(0);
                }

                break;
            case "Fire":
               if (armAmount <= 2){
                   range.push(2);
               } else {
                   range.push(0);
               }
                break;
            case "Earth":
                range.push(2,4,6);
                break;
            case "Air":
                range.push(0,2);
                break;
            default:
                return;
        }

        return range;
    }

    getImage(type){
        let img;

        switch (type) {
            case "Water":
                img = "images/water.jpg";
                break;
            case "Fire":
                img = "images/fire.jpg";
                break;
            case "Earth":
                img = "images/earth.jpg";
                break;
            case "Air":
                img = "images/air.jpg";
                break;
            default:
                return;
        }
        return img;
    }

}
