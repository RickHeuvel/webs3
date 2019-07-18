class MonsterController
{
    constructor()
    {
        this.monsterView = new MonsterView(this);
    }

    initialize()
    {
        this.monsterView.setUpMonsterView();
    }
}
