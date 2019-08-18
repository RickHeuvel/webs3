class Monster {

    constructor(id, name, type, strength, amountOfArms, typeOfArms, amountOfLegs, amountOfEyes, furType, colour, canFly, canSwim){
        this.id = id;
        this.name = name;
        this.type = type;
        this.originalStrength = strength;
        this.currentStrength = this.originalStrength;
        this.amountOfArms = amountOfArms;
        this.typeOfArms = typeOfArms;
        this.amountOfLegs = amountOfLegs;
        this.amountOfEyes = amountOfEyes;
        this.furType = furType;
        this.colour = colour;
        this.canFly = canFly;
        this.canSwim = canSwim;
        this.xPosition;
        this.yPosition;
        this.region;
    }



}
