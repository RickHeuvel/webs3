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
}
