class GridController
{
    constructor()
    {
        this.gridView = new GridView(this);
        this.regionList = ['Jungle', 'IcePole', 'Sjahari'];
    }

    initialize()
    {
        this.gridView.setUpGridView();
    }

    selectRegion(region)
    {
        switch (region) {
            case "Jungle":
                return this.setRegionToJungle();
            case "IcePole":
                return this.setRegionToIcePole();
            case "Sjahari":
                return this.setRegionToSjahari();
            default:
                return this.setRegionToIcePole();
        }
    }

    setRegionToJungle()
    {
        let jungle_region = {
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
        return jungle_region
    }

    setRegionToIcePole()
    {
        let icePoleRegion = {
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
        }
        return icePoleRegion;
    }

    setRegionToSjahari()
    {
        let sjahariRegion = {
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
        }
        return sjahariRegion;
    }
}
