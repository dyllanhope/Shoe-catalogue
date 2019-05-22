var dropDownTemplateSource = document.querySelector(".dropDownTemplate").innerHTML;
var basketTemplateSource = document.querySelector(".basketListTemplate").innerHTML;
var colourDropDown = document.getElementById("colourDrop");
var brandDropDown = document.getElementById("brandDrop");
var sizeDropDown = document.getElementById("sizeDrop");
var colourData = document.querySelector(".colourData");
var brandData = document.querySelector(".brandData");
var sizeData = document.querySelector(".sizeData");
var listData = document.querySelector(".listData");
var displayField = document.getElementById("display");
var addBtn = document.querySelector(".addButton");
var basketTemplate = Handlebars.compile(basketTemplateSource);
var clearBtn = document.querySelector(".clearButton");
var checkoutBtn = document.querySelector(".checkoutButton");
var recordEditor = document.querySelector(".recordUpdate");
var showEditor = document.querySelector(".showRecordEditor");
var updateBtn = document.querySelector(".updateRecords");

var dropDownTemplate = Handlebars.compile(dropDownTemplateSource);
var searchBtn = document.querySelector(".searchButton");
var shoeInstance = ShoeCatalogManager(records);

window.onload = function () {
    buildColourDropDown();
    buildBrandDropDown();
    buildsizeDropDown();
    recordEditor.style.display = "none";
}
updateBtn.addEventListener('click',function(){
    recordEditor.style.display = "none";
})
showEditor.addEventListener('click',function(){
    recordEditor.style.display = "unset";
})

searchBtn.addEventListener('click', function () {
    displayField.innerHTML = shoeInstance.createString(colourDropDown.value, brandDropDown.value, sizeDropDown.value);
})

addBtn.addEventListener('click', function () {
    var basketItems = { items: shoeInstance.buildBasket(colourDropDown.value, brandDropDown.value, sizeDropDown.value) };
    var basketHTML = basketTemplate(basketItems);
    listData.innerHTML = basketHTML;
    displayField.innerHTML = shoeInstance.createString(colourDropDown.value, brandDropDown.value, sizeDropDown.value);
})

clearBtn.addEventListener('click', function () {
    shoeInstance.clear();
    listData.innerHTML = '';
    displayField.innerHTML = shoeInstance.createString(colourDropDown.value, brandDropDown.value, sizeDropDown.value);
})

checkoutBtn.addEventListener('click', function () {
    displayField.innerHTML = shoeInstance.checkout();
    listData.innerHTML = '';
})

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


