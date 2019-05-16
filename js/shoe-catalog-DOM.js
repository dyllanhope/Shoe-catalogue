var dropDownTemplateSource = document.querySelector(".dropDownTemplate").innerHTML;
var colourDropDown = document.getElementById("colourDrop");
var brandDropDown = document.getElementById("brandDrop");
var sizeDropDown = document.getElementById("sizeDrop");
var colourData = document.querySelector(".colourData");
var brandData = document.querySelector(".brandData");
var sizeData = document.querySelector(".sizeData");
var dropDownTemplate = Handlebars.compile(dropDownTemplateSource);
var shoeInstance = ShoeCatalogManager(records);

window.onload = function () {
    buildColourDropDown();
    buildBrandDropDown();
    buildsizeDropDown();
}

colourDropDown.onchange = function () {
    var colorFilter = shoeInstance.filterColour(colourDropDown.value);
    console.log(colorFilter);
}
brandDropDown.onchange = function () {
    var brandFilter = shoeInstance.filterBrand(brandDropDown.value);
    console.log(brandFilter);
}
sizeDropDown.onchange = function () {
    var sizeFilter = shoeInstance.filterSize(sizeDropDown.value);
    console.log(sizeFilter);
}

function buildColourDropDown() {
    var colourOptions = { list: shoeInstance.colours() };
    var colourHTML = dropDownTemplate(colourOptions);
    colourData.innerHTML = colourHTML;
}
function buildBrandDropDown() {
    var brandOptions = { list: shoeInstance.brand() };
    var brandHTML = dropDownTemplate(brandOptions);
    brandData.innerHTML = brandHTML;
}
function buildsizeDropDown() {
    var sizeOptions = { list: shoeInstance.size() };
    var sizeHTML = dropDownTemplate(sizeOptions);
    sizeData.innerHTML = sizeHTML;
}