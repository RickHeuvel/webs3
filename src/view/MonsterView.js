class MonsterView
{
    constructor(monsterController)
    {
        this.monsterController = monsterController;
    }

    setUpMonsterView()
    {
        this.setUpMonsterConfig();
    }

    setUpMonsterConfig()
    {
        let monsterConfiguratorWrapper = document.querySelector(".monster-configurator-wrapper");
        let monsterConfiguratorTitle = document.querySelector(".monster-configurator-title");
        let monsterConfigurator = document.querySelector(".monster-configurator");
        // set title (h1)
        let title = document.createElement("h1");
        let title_content = document.createTextNode("Monster Configurator");
        title.appendChild(title_content);
        monsterConfiguratorTitle.append(title);

        // create form
        let config_form = document.createElement("form");
        config_form.id = "config-form";

        // create id holder
        //?

        // create name holder
        let name_holder = new document.createElement("div");
        name_holder.id = "name_holder";
        config_form.append(name_holder);

        // create type holder
        let type_holder = new document.createElement("div");
        type_holder.id = "strength_holder";
        config_form.append(type_holder);

        // create strength holder
        let strength_holder = new document.createElement("div");
        strength_holder.id = "strength_holder";
        config_form.append(strength_holder);

        // create amountOfArms holder
        let armAmount_holder = new document.createElement("div");
        armAmount_holder.id = "armAmount_holder";
        config_form.append(armAmount_holder);

        // create typeOfArms holder
        let armType_holder = new document.createElement("div");
        armType_holder.id = "armType_holder";
        config_form.append(armType_holder);

        // create amountOfLegs holder
        let legAmout_holder = new document.createElement("div");
        legAmout_holder.id = "legAmout_holder";
        config_form.append(legAmout_holder);

        // create amountOfEyes holder
        let eyesAmount_holder = new document.createElement("div");
        eyesAmount_holder.id = "eyesAmount_holder";
        config_form.append(eyesAmount_holder);

        // create furType holder
        let furType_holder = new document.createElement("div");
        furType_holder.id = "furType_holder";
        config_form.append(furType_holder);

        // create colour holder
        let colour_holder = new document.createElement("div");
        colour_holder.id = "colour_holder";
        config_form.append(colour_holder);

        // create canFly holder
        let canFly_holder = new document.createElement("div");
        canFly_holder.id = "canFly_holder";
        config_form.append(canFly_holder);

        // create canSwim holder
        let canSwim_holder = new document.createElement("div");
        canSwim_holder.id = "canSwim_holder";
        config_form.append(canSwim_holder);

        // create specialPower holder
        let specialPower_holder = new document.createElement("div");
        specialPower_holder.id = "specialPower_holder";
        config_form.append(specialPower_holder);

        // create generate-button
        let generateButton_holder = new document.createElement("div");
        generateButton_holder.id = "generateButton_holder";
        config_form.append(generateButton_holder);

    }
}
