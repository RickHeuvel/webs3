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

    createMonster(name, type, strength, amountOfArms, typeOfArms, amountOfLegs, amountOfEyes, furType, colour){
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
                if(furType === "Veren"){
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
                if(furType === "Haar" || furType === "Schubben"){
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

        let monster = new Monster(id, name, type, strength, amountOfArms, typeOfArms, amountOfLegs, amountOfEyes, furType, colour);
        this.monsterList.push(monster);

        return monster
    }

    generateId(){
        if (this.monsterList.length === 0){
            return 0;
        } else {
            return this.monsterList.length +1;
        }
    }

    getArmAmountRange(type){
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

    getLegAmountRange(type, armAmount){
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


}
