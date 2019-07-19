class GridController
{
    constructor(monsterController)
    {
        this.gridView = new GridView(this);
        this.regionList = ['Jungle', 'IcePole', 'Sjahari'];
        this.monsterController = monsterController;
    }

    initialize()
    {
        this.gridView.setUpGridView();
        this.setRegion("IcePole");
    }

    setRegion(regionName)
    {
        let region = this.selectRegion(regionName);
        this.selectedRegion = region.name;
        this.gridView.createRegion(region);
        this.placeMonsters();
    }

    selectRegion(region)
    {
        switch (region) {
            case "Jungle":
                return this.getRegionToJungle();
            case "IcePole":
                return this.getRegionToIcePole();
            case "Sjahari":
                return this.getRegionToSjahari();
            default:
                return this.getRegionToIcePole();
        }
    }

    placeMonsters()
    {

    }

    getRegionToJungle()
    {
        return {
            "name":"Jungle",
            "climate":"bear grylls approved temperature",
            "reference city": "Rio",
            "grid": [
                { "name":"Row1", "Columns":[ "1", "0", "0", "0", "1", "1", "0", "0", "0","1" ] },
                { "name":"Row2", "Columns":[ "1", "0", "0", "1", "0", "0", "1", "0", "0","1" ] },
                { "name":"Row3", "Columns":[ "1", "0", "1", "0", "0", "0", "0", "1", "0","1" ] },
                { "name":"Row4", "Columns":[ "1", "1", "0", "0", "0", "0", "0", "0", "1","1" ] },
                { "name":"Row5", "Columns":[ "1", "0", "0", "0", "0", "0", "0", "0", "0","1" ] },
                { "name":"Row6", "Columns":[ "1", "1", "0", "0", "0", "0", "0", "0", "0","1" ] },
                { "name":"Row7", "Columns":[ "1", "0", "1", "0", "0", "0", "0", "0", "0","1" ] },
                { "name":"Row8", "Columns":[ "1", "0", "0", "1", "0", "0", "0", "0", "0","1" ] },
                { "name":"Row9", "Columns":[ "1", "0", "0", "0", "1", "1", "0", "0", "0","1" ] },
                { "name":"Row10", "Columns":[ "1", "0", "0", "0", "1", "1", "0", "0", "0","1" ] }]
        };
    }

    getRegionToIcePole()
    {
        return {
            "name":"IcePole",
            "climate":"sub-zero cold",
            "reference city": "Amsterdam",
            "grid": [
                { "name":"Row1", "Columns":[ "0", "0", "0", "0", "1", "1", "0", "0", "0","1" ] },
                { "name":"Row2", "Columns":[ "0", "0", "0", "1", "0", "0", "1", "0", "0","1" ] },
                { "name":"Row3", "Columns":[ "0", "0", "1", "0", "0", "0", "0", "0", "0","1" ] },
                { "name":"Row4", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "1","1" ] },
                { "name":"Row5", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","1" ] },
                { "name":"Row6", "Columns":[ "1", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row7", "Columns":[ "1", "0", "0", "0", "0", "1", "0", "0", "0","0" ] },
                { "name":"Row8", "Columns":[ "1", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row9", "Columns":[ "1", "0", "0", "0", "1", "1", "0", "0", "0","0" ] },
                { "name":"Row10", "Columns":[ "1", "0", "0", "0", "1", "1", "0", "0", "0","0" ] }]
        };
    }

    getRegionToSjahari()
    {
        return {
            "name":"Sjahari",
            "climate":"burning hot",
            "reference city": "Marrakech",
            "grid": [
                { "name":"Row1", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row2", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row3", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "1", "0","0" ] },
                { "name":"Row4", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row5", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row6", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row7", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row8", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row9", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] },
                { "name":"Row10", "Columns":[ "0", "0", "0", "0", "0", "0", "0", "0", "0","0" ] }]
        };
    }

    adjustMonsterStrength()
    {

    }
}
