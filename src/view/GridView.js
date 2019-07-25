class GridView
{
    constructor(gridController)
    {
        this.gridController = gridController;
    }

    setUpGridView()
    {
        this.createTitleBox();
        this.setUpWeatherListener();
    }

    setUpWeatherListener()
    {
        let grid = document.querySelector(".grid");
        grid.addEventListener("weather-changed", (event) => {
            this.gridController.adjustMonsterStrength(this.gridController.selectedRegion, event.detail.temperature, event.detail.wind, event.detail.humidity);
        });
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
            let regionOptionBtn = this.createRegionButtons(regionOption);

            // append the button to the wrapper
            regionBtnWrapper.append(regionOptionBtn);
        });

        // append title and regionBtnWrapper to grid title
        gridRegions.append(title);
        gridRegions.append(regionBtnWrapper);
    }

    createRegion(region)
    {
        // wipe old region
        this.wipeGrid();

        // generate new region
        let rowIndex = 1;
        region.grid.forEach(row => {
            let tileRowElement = this.createRows(row, region.name, `row${rowIndex}`);
            this.drawRows(tileRowElement);
            rowIndex++;
        });

        // let field = document.querySelector(".region");
        // field.addEventListener("new-monster", (event) => {
        //     let monsterId = event.detail.monsterId;
        //     let tiles = document.querySelectorAll(".tile");
        //     for (let i = 0; i < tiles.length; i++) {
        //         let monsterImage = tiles[i].querySelector(".monsterImageHolder");
        //         if (monsterImage && monsterImage.id !== monsterId) {
        //             this.animateTile(tiles[i]);
        //         }
        //     }
        // });
    }


    wipeGrid()
    {
        // create container for the new region
        let newRegion = document.createElement('div');
        newRegion.classList.add('region');

        // get the container for the old region
        let oldRegion = document.querySelector('.region');

        // get the parent element of the old region
        let parentElement = document.querySelector('.grid');

        // replace the old region container for the new region container
        parentElement.replaceChild(newRegion, oldRegion)
    }

    // generate each row
    createRows(row, type, rowIndex)
    {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("tileRow");
        rowDiv.id = rowIndex;
        let tileIndex = 1;
        // draw each tile
        row.Columns.forEach(tile => {
            let available = tile == 0 ? true : false;
            let tileElement = this.createTile(type, available, `tile${tileIndex}`, rowDiv.id);
            rowDiv.appendChild(tileElement);
            tileIndex++;
        });
        return rowDiv
    }

    //creates each tile for the board
    createTile(type, available, tileId, tileRowId) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("climateType", type);
        tile.setAttribute("available", available);
        tile.id = tileId;

        // enable drop
        if (available) {
            tile.classList.add("droppable");
            this.dropMonster(tile, tileRowId)
        }
        return tile;
    }

    drawRows(rowDiv)
    {
        let monsterGrid = document.querySelector('.region');
        monsterGrid.appendChild(rowDiv);
    }

    // create the region option buttons
    createRegionButtons(regionName) {
        let regionButton = document.createElement("button");
        regionButton.id = regionName;
        let regionButtonText = document.createTextNode(regionName);
        regionButton.append(regionButtonText);

        // assign click event listener
        let gridController = this.gridController;
        regionButton.addEventListener("click", function () {
            let chosenRegions = this.id;               // get name of selected chosenRegions
            gridController.setRegion(chosenRegions);  // handle selection
        });
        return regionButton;
    }

    dropMonster(tile, row)
    {
        tile.addEventListener("dragover", (event) => {
            // allow drop
            event.preventDefault();
        });

        tile.addEventListener("drop", (event) => {
            event.preventDefault();
            // get monster data
            var monsterData = event.dataTransfer.getData("text");
            // get monster image
            let monsterImgHolder = document.getElementById(monsterData);
            // check if new tile is not equal to current tile and is free
            if (monsterImgHolder.parentElement != tile && !tile.hasChildNodes()){
                let monsterImg = monsterImgHolder.querySelector(".image");
                monsterImg.setAttribute(("location"), "grid");
                event.target.appendChild(monsterImgHolder);

                // let imgHolder (MonsterView) know that it is placed successfully
                monsterImgHolder.dispatchEvent(new CustomEvent("placedSuccesfully", {
                    detail: {
                        monsterId: monsterData,
                        region: this.gridController.selectedRegion,
                        x: tile.id,
                        y: row
                    }
                }));

                this.notifyGrid(monsterData);
            }
        })
    }

    notifyGrid(monsterId) {
        let region = document.querySelector(".region");
        region.dispatchEvent(new CustomEvent("new-monster", {
            detail: {
                monsterId: monsterId
            }
        }));
    }
}
