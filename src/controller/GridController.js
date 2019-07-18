class GridController
{
    constructor()
    {
        this.gridView = new GridView(this);
    }

    initialize()
    {
        this.gridView.setUpGridView();
    }
}
