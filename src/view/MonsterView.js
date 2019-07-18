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

        // create id holder

        // create name holder

        // create type holder

        // create strength holder

        // create amountOfArms holder

        // create typeOfArms holder

        // create amountOfLegs holder

        // create amountOfEyes holder

        // create furType holder

        // create colour holder

        // create canFly holder

        // create canSwim holder

        // create specialPower holder

        // create generate-button

    }
}
