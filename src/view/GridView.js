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
        let titleContent = document.createTextNode("Regions: ");
        title.appendChild(titleContent);
        gridRegions.append(title);

        // create wrapper for all the region buttons
        let regionBtnWrapper = document.createElement("div");
        regionBtnWrapper.classList.add("select-region");

        // create all region options and add to the wrapper for all the region buttons (regionBtnWrapper)
        this.gridController.regionList.forEach(regionOption => {
            // create button for each region
            let regionOptionBtn = this.createRegionOption(regionOption);

            // append the button to the wrapper
            regionBtnWrapper.append(regionOptionBtn);
        });

        // append title and regionBtnWrapper to grid title
        gridRegions.append(title);
        gridRegions.append(regionBtnWrapper);
    }

    createGrid()
    {

    }

    // create the region option buttons
    createRegionOption(regionName) {
        let regionOption = document.createElement("button");
        regionOption.id = regionName;
        let btnText = document.createTextNode(regionName);
        regionOption.append(btnText);

        // assign eventListener
        let gridController = this.gridController;
        regionOption.addEventListener("click", function () {
            let region = this.id;               // extract region name of the button
            gridController.selectRegion(region);  // set new region
        });
        return regionOption;
    }
}
