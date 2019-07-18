class MonsterView
{
    constructor(monsterController)
    {
        this.monsterController = monsterController;
    }

    setUpMonsterView()
    {
        this.createTitleBox();
        this.setUpMonsterConfig();
    }

    createTitleBox()
    {
        let monsterConfiguratorTitle = document.querySelector(".monster-configurator-title");
        // set title (h1)
        let title = document.createElement("h1");
        let title_content = document.createTextNode("Monster Configurator");
        title.appendChild(title_content);
        monsterConfiguratorTitle.append(title);
    }

    setUpMonsterConfig()
    {
        let monsterConfiguratorWrapper = document.querySelector(".monster-configurator-wrapper");
        let monsterConfigurator = document.querySelector(".monster-configurator");

        // create form
        let config_form = document.createElement("form");
        config_form.id = "config-form";

        // create id holder
        //?

        // create name holder
        let name_holder = document.createElement("div");
        name_holder.id = "name_holder";
        config_form.append(name_holder);

        // create type holder
        let type_holder = document.createElement("div");
        type_holder.id = "strength_holder";
        config_form.append(type_holder);

        // create strength holder
        let strength_holder = document.createElement("div");
        strength_holder.id = "strength_holder";
        config_form.append(strength_holder);

        // create amountOfArms holder
        let armAmount_holder = document.createElement("div");
        armAmount_holder.id = "armAmount_holder";
        config_form.append(armAmount_holder);

        // create typeOfArms holder
        let armType_holder = document.createElement("div");
        armType_holder.id = "armType_holder";
        config_form.append(armType_holder);

        // create amountOfLegs holder
        let legAmount_holder = document.createElement("div");
        legAmount_holder.id = "legAmount_holder";
        config_form.append(legAmount_holder);

        // create amountOfEyes holder
        let eyesAmount_holder = document.createElement("div");
        eyesAmount_holder.id = "eyesAmount_holder";
        config_form.append(eyesAmount_holder);

        // create furType holder
        let furType_holder = document.createElement("div");
        furType_holder.id = "furType_holder";
        config_form.append(furType_holder);

        // create colour holder
        let colour_holder = document.createElement("div");
        colour_holder.id = "colour_holder";
        config_form.append(colour_holder);

        // create canFly holder
        let canFly_holder = document.createElement("div");
        canFly_holder.id = "canFly_holder";
        config_form.append(canFly_holder);

        // create canSwim holder
        let canSwim_holder = document.createElement("div");
        canSwim_holder.id = "canSwim_holder";
        config_form.append(canSwim_holder);

        // create specialPower holder
        let specialPower_holder = document.createElement("div");
        specialPower_holder.id = "specialPower_holder";
        config_form.append(specialPower_holder);

        // create generate-button
        let generateButton_holder = document.createElement("div");
        generateButton_holder.id = "generateButton_holder";
        config_form.append(generateButton_holder);


        monsterConfigurator.append(config_form);
        monsterConfiguratorWrapper.append(monsterConfigurator);

        this.setupCreationForm();
    }

    setupCreationForm(){
        this.setupName();
    }

    setupName(selectedValue){
        let parentElement = document.querySelector("#name_holder");

        // clean old property
        this.clearProperty(parentElement);

        // fill div with class name holder
        let nameLabel = document.createElement("label");
        let nameLabelContent = document.createTextNode("Name");
        let nameInput = document.createElement("input");

        nameLabel.for = "name";
        nameLabel.appendChild(nameLabelContent);
        nameInput.type = "text";
        nameInput.id = "name";
        nameInput.name = "name";
        nameInput.placeholder = "Naam....";
        nameInput.required = true;

        if (selectedValue) {
            nameInput.value = selectedValue;
        }

        parentElement.append(nameLabel);
        parentElement.append(nameInput);

    }

    clearProperty(holder){
        while (holder.firstChild){
            holder.firstChild.remove();
        }
    }
}
