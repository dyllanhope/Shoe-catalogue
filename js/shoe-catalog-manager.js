function ShoeCatalogManager(data) {
    var loadData = data;
    var basketList = [];
    var tracker = 0;
    var passed = false;
    var total = 0.00;
    var keepStock = 0;

    function createDisplayString(colour, brand, size) {
        var filteredItem;
        var filteredItemData;
        if (colour && brand && size) {
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
                filteredItem = "We have " + filteredItem + " " + filteredItemData.colour + " " + filteredItemData.brand + "(s) in stock at R" + filteredItemData.price + " per.";
                return filteredItem;
            } else {
                return "Please make sure all data is entered"
            }
        }
    }

    function buildColourList() {
        var colourList = ["Select colour"];
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
        var brandList = ["Select brand"];
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
        var sizeList = [];
        var dataMap = {};
        for (var x = 0; x < loadData.length; x++) {
            for (var i = 0; i < loadData[x].item_stock.length; i++)
                if (dataMap[loadData[x].item_stock[i].size] === undefined) {
                    dataMap[loadData[x].item_stock[i].size] = 0;
                    sizeList.push(loadData[x].item_stock[i].size);
                }
        }
        sizeList = sizeList.sort((a, b) => a - b);
        sizeList.unshift("Select shoe size");
        return sizeList;
    }

    function createBasketItems(colourP, brandP, sizeP) {
        if (colourP && brandP && sizeP) {
            if (!colourP.startsWith('Select')
                && !brandP.startsWith('Select')
                && !sizeP.startsWith('Select')) {

                var currentShoe = { "size": sizeP, "colour": colourP, "brand": brandP, "qty": 1, "cost": 0 };

                var existingShoeLoc = getExistingShoeLoc(currentShoe);
                var dataIndex = getStockLoc(currentShoe);

                if (existingShoeLoc > -1) {
                    if (loadData[dataIndex[0]].item_stock[dataIndex[1]].stock > 0) {
                        basketList[existingShoeLoc].qty++;
                        basketList[existingShoeLoc].cost += loadData[dataIndex[0]].price;
                        total += loadData[dataIndex[0]].price;
                        loadData[dataIndex[0]].item_stock[dataIndex[1]].stock--;
                    }
                } else if (loadData[dataIndex[0]].item_stock[dataIndex[1]].stock > 0) {
                    currentShoe.cost = loadData[dataIndex[0]].price;
                    total += loadData[dataIndex[0]].price;
                    basketList.push(currentShoe);
                    loadData[dataIndex[0]].item_stock[dataIndex[1]].stock--;
                }
            }
        }
        return basketList;
    }

    function getStockLoc(shoeData) {
        var coords;
        for (var x = 0; x < loadData.length; x++) {
            if (loadData[x].colour === shoeData.colour
                && loadData[x].brand === shoeData.brand) {

                for (var y = 0; y < loadData[x].item_stock.length; y++) {
                    if (loadData[x].item_stock[y].size === shoeData.size) {
                        coords = [x, y];
                        return coords;
                    } else {
                        coords = [x, -1];
                    }
                }
            } else {
                coords = -1;
            }
        }
        return coords;
    }

    function getExistingShoeLoc(shoeData) {
        for (var x = 0; x < basketList.length; x++) {
            if (basketList[x].size === shoeData.size
                && basketList[x].colour === shoeData.colour
                && basketList[x].brand === shoeData.brand) {

                return x;
            }
        }
        return -1;
    }

    function clearShoppingBasket() {
        for (var x = 0; x < loadData.length; x++) {
            for (var y = 0; y < basketList.length; y++) {
                if (loadData[x].colour === basketList[y].colour
                    && loadData[x].brand === basketList[y].brand) {
                    for (var z = 0; z < loadData[x].item_stock.length; z++) {
                        if (loadData[x].item_stock[z].size === basketList[y].size) {
                            loadData[x].item_stock[z].stock += basketList[y].qty;
                        }
                    }
                }
            }
        }
        total = 0.00;
        basketList = [];
    }

    function updateRecords(colour, brand, price, size, stock) {
        passed = false;
        if (colour && brand && price && size && stock) {
            passed = true;
            var upColour = colour.charAt(0).toUpperCase() + (colour.slice(1)).toLowerCase();
            var upBrand = brand.charAt(0).toUpperCase() + (brand.slice(1)).toLowerCase();
            var searchData = { "size": size, "colour": upColour, "brand": upBrand };
            var stockLoc = getStockLoc(searchData);
            if (stockLoc === -1) {
                loadData.push({
                    "colour": upColour,
                    "brand": upBrand,
                    "price": Number(price),
                    "item_stock": [
                        { "size": size, "stock": Number(stock) }
                    ]
                });
                keepStock += Number(stock);
            } else if (stockLoc[1] === -1) {
                loadData[stockLoc[0]].item_stock.push({ "size": size, "stock": Number(stock) });
                keepStock += Number(stock);
            } else {
                loadData[stockLoc[0]].item_stock[stockLoc[1]].stock += Number(stock);
                keepStock += Number(stock);
            }
        }
    }

    function resetBasket() {
        if (!basketList || !basketList.length) {
            return "You have no items in your basket";
        } else {
            basketList = [];
            total = 0.00;
            return "items checked out successfully";
        }
    }

    function displayPassing() {
        return passed;
    }
    function displayTotal() {
        return total.toFixed(2);
    }
    function displayBasketList() {
        return basketList;
    }
    function displayStock() {
        return keepStock;
    }
    function changeCurrentStockAdded() {
        keepStock = 0;
    }
    return {
        colours: buildColourList,
        brand: buildBrandList,
        size: buildSizeList,
        createString: createDisplayString,
        buildBasket: createBasketItems,
        clear: clearShoppingBasket,
        checkout: resetBasket,
        update: updateRecords,
        passing: displayPassing,
        total: displayTotal,
        showList: displayBasketList,
        stock: displayStock,
        newStockCount: changeCurrentStockAdded,
        find: getStockLoc
    }
}