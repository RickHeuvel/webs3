class Monster {

    constructor(id, name, type, strength, amountOfArms, typeOfArms, amountOfLegs, amountOfEyes, furType, colour, canFly, canSwim, specialPower){
        this.id = id;
        this.name = name;
        this.type = type;
        this.currentStrength = strength;
        this.originalStength = strength;
        this.amountOfArms = amountOfArms;
        this.typeOfArms = typeOfArms;
        this.amountOfLegs = amountOfLegs;
        this.amountOfEyes = amountOfEyes;
        this.furType = furType;
        this.colour = colour;
        this.canFly = canFly;
        this.canSwim = canSwim;
        this.specialPower = specialPower;
        this.xPosition;
        this.yPosition;
        this.region;
    }



}
