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
        config_form.id = "config_form";

        // create id holder
        //?

        // create name holder
        let name_holder = document.createElement("div");
        name_holder.id = "name_holder";
        config_form.append(name_holder);

        // create type holder
        let type_holder = document.createElement("div");
        type_holder.id = "type_holder";
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

        //div with class monster-image
        let monster_image_holder = document.createElement("div");
        monster_image_holder.id = "image_holder";
        config_form.append(monster_image_holder);


        monsterConfigurator.append(config_form);
        monsterConfiguratorWrapper.append(monsterConfigurator);


        // set callbacks
        let createCallback = this.createMonster.bind(this);

        config_form.addEventListener("submit", function (event) {
            event.preventDefault();
            let action = this.dataset.action; // get action createMonster/editMonster
            if (action == 'createMonster') {
                createCallback(this.elements);
            } else {
              //  editCallback(this.elements);
            }
        });
        this.setupCreationForm();
    }

    setupCreationForm(){
        this.setupName();
        this.setupType();
        this.setupStrength()
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
        nameInput.placeholder = "Name....";
        nameInput.required = true;

        if (selectedValue) {
            nameInput.value = selectedValue;
        }

        parentElement.append(nameLabel);
        parentElement.append(nameInput);

    }

    setupType(selectedValue){
        let parentElement = document.querySelector("#type_holder");

        // clean old property
        this.clearProperty(parentElement);

        // get types
        let typeList = this.monsterController.types;
        let selectedType = selectedValue ? selectedValue : typeList[0];

        //callbacks
        let setupArmAmount = this.setupArmAmount.bind(this);
        let setupArmType = this.setupArmType.bind(this);
        let setupLegAmount = this.setupLegAmount.bind(this);
        let setupEyes = this.setupEyes.bind(this);
        let setupFurType = this.setupFurType.bind(this);
        let setupColour = this.setupColour.bind(this);
        let setupGenerateBtn = this.createGenerateButton.bind(this);


        let callback = function (type) {
            setupArmAmount(type);
            setupArmType(type);
            setupLegAmount(type);
            setupEyes(type);
            setupFurType(type);
            setupColour(type);
            setupGenerateBtn("createMonster");
        };
        this.createOptionBox("Type monster", typeList, "monster_type", parentElement, callback, selectedType);
    }

    setupArmAmount(type,selectedValue){
        //set parentElement
        let parentElement = document.querySelector('#armAmount_holder');

        this.clearProperty(parentElement);

        //callback
        let setupLegAmount = this.setupLegAmount.bind(this);

        let callback = function (value) {
            let arms = value;
            setupLegAmount(type,arms);

        };

        // set maxAmount
        let range = this.monsterController.getArmAmount(type);

        this.createOptionBox("Aantal armen", range, "arm_amount", parentElement, callback, selectedValue);
    }

    setupArmType(type, selectedValue){
        //set parentElement
        let parentElement = document.querySelector("#armType_holder");

        this.clearProperty(parentElement);

        let types = this.monsterController.getArmType(type);

        this.createOptionBox("Type of arms", types, "arm_type", parentElement, null, selectedValue);
    }

    setupFurType(type, selectedValue){
        //set parentElement
        let parentElement = document.querySelector("#furType_holder");

        this.clearProperty(parentElement);

        let types = this.monsterController.getFurType(type);

        this.createOptionBox("Type of fur", types, "fur_type", parentElement, null, selectedValue);
    }

    setupEyes(type, selectedValue){
        //set parentElement
        let parentElement = document.querySelector("#eyesAmount_holder");

        this.clearProperty(parentElement);

        let amount = this.monsterController.getEyeAmount(type);

        this.createOptionBox("Eye amount", amount, "eyes", parentElement, null, selectedValue);
    }

    setupColour(type, selectedValue){
        //set parentElement
        let parentElement = document.querySelector("#colour_holder");

        this.clearProperty(parentElement);

        let types = this.monsterController.getColour(type);

        this.createOptionBox("Colour", types, "colour", parentElement, null, selectedValue);
    }

    setupLegAmount(type, armAmount = 0, selectedValue) {
        //set parentElement
        let parentElement = document.querySelector("#legAmount_holder");

        // clean property
        this.clearProperty(parentElement);

        let range = this.monsterController.getLegAmount(type, armAmount);

        this.createOptionBox("Aantal benen", range, "leg_amount", parentElement, null, selectedValue);
    }

    setupStrength(selectedValue){
        let parentElement = document.querySelector("#strength_holder");

        this.clearProperty(parentElement);

        let strengthLabel = document.createElement("label");
        let labelText = document.createTextNode("strength");
        let input = document.createElement("input");
        strengthLabel.for = "strength";
        strengthLabel.appendChild(labelText);
        input.type = "number";
        input.id = "strength";
        input.name = "strength";
        input.placeholder = 0;
        input.required = true;

        if (selectedValue){
            input.value = selectedValue;
        }

        parentElement.append(strengthLabel);
        parentElement.append(input);
    }

    setupImage(monster, location){
        let parentElement = document.querySelector("#image_holder");

        let image = document.createElement("img");
        image.src = this.monsterController.getImage(monster.type);
        image.draggable = true;
        image.width = 50;
        image.height = 50;

        if(location)
        {
            console.log(location);
            image.setAttribute("location", location);
        }
        else
        {
            image.setAttribute("location", "monster-configurator");
        }

        image.classList.add("image");

        // create extra div for the monster properties
        let ImageProperties = document.createElement("div");
        ImageProperties.classList.add("image_properties");
        ImageProperties.id = 'image_properties';

        // for loop where each property comes within in a <p> element
        for (let prop in monster) {
            let properties = document.createElement("p");
            let property = document.createTextNode(`${prop} = ${monster[prop]}`);
            properties.appendChild(property);
            ImageProperties.appendChild(properties);

        }

        //create holder
        let imgHolder = document.createElement("div");
        imgHolder.classList.add("imgHolder");
        imgHolder.id = monster.id;

        // make image draggable
        imgHolder.setAttribute("draggable", true);
        // set event listener for dragging
        imgHolder.addEventListener("dragstart", function(event){
            let monsterImg = event.target.parentElement;
            event.dataTransfer.setData("text", imgHolder.id);
        });

        // when image is placed on grid
        imgHolder.addEventListener("placedSuccesfully", (event) => {
            monster = this.monsterController.moveMonster(monster.id, event.detail.x, event.detail.y, event.detail.region);
            this.monsterController.saveMonster(monster);
            this.setupCreationForm();
        });

        // this.wipeProperty(parentElement);

        this.showSpecialAttack(image, monster.type);

        imgHolder.appendChild(image);
        imgHolder.appendChild(ImageProperties);
        parentElement.appendChild(imgHolder);

    }

    //shows the special attack of the clicked monster
    showSpecialAttack(monsterImage, type) {
        monsterImage.addEventListener('click', (event) => {
            this.createSpecialAttackHolder(type);
        });
    }

    //enable special attack of each type
    createSpecialAttackHolder(type) {
        let parentElement = document.querySelector(".gif-holder");
        // this.wipeProperty(parentElement);
        let gif = document.createElement("img");
        gif.classList.add("specialAttack");

        switch (type) {
            case "Water":
                gif.src = "./images/water.gif";
                break;
            case "Fire":
                gif.src = "./images/fire.gif";
                break;
            case "Earth":
                gif.src = "./images/earth.gif";
                break;
            case "Air":
                gif.src = "./images/wind.gif";
                break;
            default:
                return;
        }

        parentElement.appendChild(gif);

        setTimeout(() => {
            // this.wipeProperty(parentElement);
        }, 5000);
    }

    // cleans the element when the monster property changes
    wipeProperty(propertyHolder) {
        while (propertyHolder.firstChild) {
            propertyHolder.firstChild.remove();
        }
    }
    createOptionBox(text, options, optionType, parentElement, callback, selectedValue){
        let propertyLabel = document.createElement(("label"));
        let ArmsLabel = document.createTextNode(text);
        let propertySelector = document.createElement("select");
        propertyLabel.for = optionType;
        propertyLabel.appendChild(ArmsLabel);
        propertySelector.id = optionType;
        propertySelector.name = optionType;

        // create empty option
        if (!selectedValue){
            let emptyOption = document.createElement("option");
            let selectText = document.createTextNode("select...");
            emptyOption.append(selectText);
            propertySelector.append(emptyOption);
        }

        // create empty options
            options.forEach( option => {
                let selectOption = document.createElement("option");
                selectOption.value = option;
                let selectText = document.createTextNode(option);
                selectOption.append(selectText);

                //append option to box
                propertySelector.append(selectOption);
            });


        if (callback) {
            propertySelector.addEventListener("change", function () {
                let selectedValue = this.value;
                callback(selectedValue)
            });
        }
        parentElement.append(propertyLabel);
        parentElement.append(propertySelector);

        if (selectedValue) {
            propertySelector.value = selectedValue;

            //trigger onchange
            let event = new Event("change");
            propertySelector.dispatchEvent(event);
        }
    }

    createGenerateButton(action){
        let parentElement = document.querySelector("#generateButton_holder")

        let form = document.querySelector("#config_form");

        this.clearProperty(parentElement);

        let btn = document.createElement("input");
        btn.type = "submit";

        if(action === "createMonster"){
            btn.value = "createMonster";
        }else{
            btn.value = "edit"
        }

        form.setAttribute("data-action", action);

        parentElement.append(btn);


    }

    createMonster(properties){

        // check if all properties are filled 
        for(let i = 0; i < properties.length; i++){
            if (properties[i].value === "select...") {
                this.showError("Please check the form");
                return
            }
        }

        let name = properties["name"].value;
        let type = properties["monster_type"].value;
        let strength = properties["strength"].value;
        let armType = properties["arm_type"].value;
        let armAmount = properties["arm_amount"].value;
        let legs = properties["leg_amount"].value;
        let eyes = properties["eyes"].value;
        let furType = properties["fur_type"].value;
        let colour = properties["colour"].value;

        let monster = this.monsterController.createMonster(name,type,strength,armType,armAmount,legs,eyes,furType,colour);

        this.setupImage(monster);

    }

    placeMonster(monster){
        // get parent element
        let parentElement = document.querySelector(`#${monster.yPosition} > #${monster.xPosition}`);
        this.setupImage(monster, parentElement, "grid");
    }
    clearProperty(holder){
        while (holder.firstChild){
            holder.firstChild.remove();
        }
    }

    showError(errorMessage) {
        alert(errorMessage);
    }
}
