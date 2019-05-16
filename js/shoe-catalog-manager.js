function ShoeCatalogManager(data) {
    var loadData = data;
    var colorList = ["Select colour"];
    var brandList = ["Select brand"];
    var sizeList = ["Select shoe size"];
    
    function buildColorList(){
        var dataMap = {};
        for(var x=0;x<loadData.length;x++){
            if(dataMap[loadData[x].color]===undefined){
                dataMap[loadData[x].color] = 0;
                colorList.push(loadData[x].color);
            }
        }
        
    }
    function buildBrandList(){
        var dataMap = {};
        for(var x=0;x<loadData.length;x++){
            if(dataMap[loadData[x].brand]===undefined){
                dataMap[loadData[x].brand] = 0;
                brandList.push(loadData[x].brand);
            }
        }
    }
    function buildSizeList(){
        var dataMap = {};
        for(var x=0;x<loadData.length;x++){
            for(var i=0;i<loadData[x].item_stock.length;i++)
            if(dataMap[loadData[x].item_stock[i].size]===undefined){
                dataMap[loadData[x].item_stock[i].size] = 0;
                sizeList.push(loadData[x].item_stock[i].size);
            }
        }
    }

    function displayColor() {
        buildColorList();
        return colorList;
    }
    function displayBrand() {
        buildBrandList();
        return brandList;
    }
    function displaySizes() {
        buildSizeList();
        return sizeList;
    }
    return {
        colours: displayColor,
        brand: displayBrand,
        size: displaySizes
    }
}