function ShoeCatalogManager(data) {
    var loadData = data;
    var basketList = [];
    var colourList = ["Select colour"];
    var brandList = ["Select brand"];
    var sizeList = ["Select shoe size"];
    var count = 0;

    function createDisplayString(colour, brand, size) {
        var filteredItem;
        var filteredItemData;
        if (!colour.startsWith('Select') && !brand.startsWith('Select') && !size.startsWith('Select')) {
            for (var k = 0; k < loadData.length; k++) {
                if ((colour === loadData[k].colour) && (brand === loadData[k].brand)) {
                    filteredItem = loadData[k].item_stock;
                    filteredItemData = loadData[k]
                }
            }
            for (var l = 0; l < filteredItem.length; l++) {
                if (size === filteredItem[l].size) {
                    filteredItem = filteredItem[l].stock;
                }
            }
            filteredItem = "We have " + filteredItem + " " + filteredItemData.colour + " " + filteredItemData.brand + "(s) in stock."
            return filteredItem;
        } else {
            return "Please make sure all data is entered"
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

    function createBasketItems(colourP, brandP, sizeP) {
        if (!colourP.startsWith('Select') 
            && !brandP.startsWith('Select') 
            && !sizeP.startsWith('Select')) {

            var currentShoe = { "size": sizeP, "colour": colourP, "brand": brandP, "qty": 1 };
            
            var existingShoe = getExistingShoe(currentShoe);

            if (existingShoe) {
                // update it
            } else {
                // add a new shoe to basketList
            }


            for (var x = 0; x < basketList.length; x++) {

                if (basketList[x].size === currentShoe.size 
                    && basketList[x].colour === currentShoe.colour 
                    && basketList[x].brand === currentShoe.brand) {

                    basketList[x].qty += 1;

                } else {
                    
                    basketList.push(currentShoe);
                    count++;

                }
                return basketList;
            }
        }
        
    }

    return {
        colours: buildColourList,
        brand: buildBrandList,
        size: buildSizeList,
        createString: createDisplayString,
        buildBasket: createBasketItems
    }
}