function ShoeCatalogManager(data) {
    var loadData = data;
    var colourList = ["Select colour"];
    var brandList = ["Select brand"];
    var sizeList = ["Select shoe size"];

    function filterItems(colour, brand, size) {
        var filteredItem;
        if (colour && brand && size) {
            for (var k = 0; k < loadData.length; k++) {
                if ((colour === loadData[k].colour) && (brand === loadData[k].brand)) {
                    filteredItem = loadData[k].item_stock;
                }
            }
            for(var l=0;l<filteredItem.length;l++){
                if(size === filteredItem[l].size){
                    filteredItem = filteredItem[l].stock;
                }
            }
            return filteredItem
        }
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
        filter: filterItems
    }
}