class GridView
{
    constructor(gridController)
    {
        this.gridController = gridController;
    }

    setUpGridView()
    {
        this.createTitleBox();
        this.createGrid();
    }

    createTitleBox()
    {
        let gridRegions = document.querySelector(".grid-regions");
        let gridChosenRegion = document.querySelector(".grid");

        //set title (h1)
        let title = document.createElement("h1");
        let title_content = document.createTextNode("Regions: ");
        title.appendChild(title_content);
        gridRegions.append(title);
    }

    createGrid()
    {

    }
}
