var dropDownTemplateSource = document.querySelector(".dropDownTemplate").innerHTML;
var colourData = document.querySelector(".colourData");
var brandData = document.querySelector(".brandData");
var sizeData = document.querySelector(".sizeData");
var dropDownTemplate = Handlebars.compile(dropDownTemplateSource);
var shoeInstance = ShoeCatalogManager(records);

window.onload = function(){
    buildColourDropDown();
    buildBrandDropDown();
    buildsizeDropDown();
    console.log(records[1].item_stock.size)
}

function buildColourDropDown(){
    var colourOptions = { list: shoeInstance.colours()};
    var colourHTML = dropDownTemplate(colourOptions);
    colourData.innerHTML = colourHTML;
}
function buildBrandDropDown(){
    var brandOptions = { list: shoeInstance.brand()};
    var brandHTML = dropDownTemplate(brandOptions);
    brandData.innerHTML = brandHTML;
}
function buildsizeDropDown(){
    var sizeOptions = { list: shoeInstance.size()};
    var sizeHTML = dropDownTemplate(sizeOptions);
    sizeData.innerHTML = sizeHTML;
}