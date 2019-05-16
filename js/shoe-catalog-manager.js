function ShoeCatalogManager(data) {
    var loadData = data;
    var colourList = ["Select colour"];
    var brandList = ["Select brand"];
    var sizeList = ["Select shoe size"];

    function filterColourDropDown(colour) {
        var filteredColour = [];
        for (var k = 0; k < loadData.length; k++) {
            if (colour === loadData[k].colour) {
                filteredColour.push(loadData[k]);
            }
        }
        return filteredColour;
    }
    function filterBrandDropDown(brand) {
        var filteredBrand = [];
        for (var k = 0; k < loadData.length; k++) {
            if (brand === loadData[k].brand) {
                filteredBrand.push(loadData[k]);
            }
        }
        return filteredBrand;
    }
    function filterSizeChoice(size) {
        var filteredSize = [];
        for (var k = 0; k < loadData.length; k++) {
            for (var l = 0; l < loadData[k].item_stock.length; l++) {
                if (size === loadData[k].item_stock[l].size) {
                    filteredSize.push(loadData[k].item_stock[l].stock);
                }
            }
        }
        return filteredSize;
    }

    function buildColourList() {
        var dataMap = {};
        for (var x = 0; x < loadData.length; x++) {
            if (dataMap[loadData[x].colour] === undefined) {
                dataMap[loadData[x].colour] = 0;
                colourList.push(loadData[x].colour);
            }
        }
        return colourList;
    }

    function buildBrandList() {
        var dataMap = {};
        for (var x = 0; x < loadData.length; x++) {
            if (dataMap[loadData[x].brand] === undefined) {
                dataMap[loadData[x].brand] = 0;
                brandList.push(loadData[x].brand);
            }
        }
        return brandList;
    }

    function buildSizeList() {
        var dataMap = {};
        for (var x = 0; x < loadData.length; x++) {
            for (var i = 0; i < loadData[x].item_stock.length; i++)
                if (dataMap[loadData[x].item_stock[i].size] === undefined) {
                    dataMap[loadData[x].item_stock[i].size] = 0;
                    sizeList.push(loadData[x].item_stock[i].size);
                }
        }
        return sizeList;
    }

    return {
        colours: buildColourList,
        brand: buildBrandList,
        size: buildSizeList,
        filterColour: filterColourDropDown,
        filterBrand: filterBrandDropDown,
        filterSize: filterSizeChoice
    }
}