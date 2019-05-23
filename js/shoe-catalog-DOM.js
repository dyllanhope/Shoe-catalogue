var dropDownTemplateSource = document.querySelector(".dropDownTemplate").innerHTML;
var basketTemplateSource = document.querySelector(".basketListTemplate").innerHTML;
// drop down menues
var colourDropDown = document.getElementById("colourDrop");
var brandDropDown = document.getElementById("brandDrop");
var sizeDropDown = document.getElementById("sizeDrop");
//data for templates
var colourData = document.querySelector(".colourData");
var brandData = document.querySelector(".brandData");
var sizeData = document.querySelector(".sizeData");
var listData = document.querySelector(".listData");
//buttons
var addBtn = document.querySelector(".addButton");
var clearBtn = document.querySelector(".clearButton");
var checkoutBtn = document.querySelector(".checkoutButton");
var searchBtn = document.querySelector(".searchButton");
var recordEditor = document.querySelector(".recordUpdate");
var showEditor = document.querySelector(".showRecordEditor");
var updateBtn = document.querySelector(".updateRecords");
//inputs for updating
var colourNew = document.querySelector(".colourUp");
var brandNew = document.querySelector(".brandUp");
var priceNew = document.querySelector(".priceUp");
var sizeNew = document.querySelector(".sizeUp");
var stockNew = document.querySelector(".stockUp");
//displays
var dispTotal = document.querySelector(".totalText");
var total = document.getElementById("total");
var messageField = document.getElementById("messageRecord");
var displayField = document.getElementById("display");
//template compilations
var basketTemplate = Handlebars.compile(basketTemplateSource);
var dropDownTemplate = Handlebars.compile(dropDownTemplateSource);

var shoeInstance = ShoeCatalogManager(records);

window.onload = function () {
    buildDropDowns();
    recordEditor.style.display = "none";
    dispTotal.style.display = "none";
}
updateBtn.addEventListener('click', function () {
    shoeInstance.update(colourNew.value, brandNew.value, priceNew.value, sizeNew.value, stockNew.value);
    if (shoeInstance.passing() === true) {
        messageField.innerHTML = "The record has been successfully added!";
    } else {
        messageField.innerHTML = "You have not filled every field.";
    }
    colourDropDown.innerHTML = '';
    brandDropDown.innerHTML = '';
    sizeDropDown.innerHTML = '';

    buildDropDowns();
})
showEditor.addEventListener('click', function () {
    if (shoeInstance.check()) {
        recordEditor.style.display = "unset";
    } else {
        recordEditor.style.display = "none";
    }
})

searchBtn.addEventListener('click', function () {
    displayField.innerHTML = shoeInstance.createString(colourDropDown.value, brandDropDown.value, sizeDropDown.value);
})

addBtn.addEventListener('click', function () {
    var basketItems = { items: shoeInstance.buildBasket(colourDropDown.value, brandDropDown.value, sizeDropDown.value) };
    var basketHTML = basketTemplate(basketItems);
    listData.innerHTML = basketHTML;
    dispTotal.style.display = "unset";
    total.innerHTML = shoeInstance.total();
    displayField.innerHTML = shoeInstance.createString(colourDropDown.value, brandDropDown.value, sizeDropDown.value);
})

clearBtn.addEventListener('click', function () {
    shoeInstance.clear();
    listData.innerHTML = '';
    dispTotal.style.display = "none";
    displayField.innerHTML = shoeInstance.createString(colourDropDown.value, brandDropDown.value, sizeDropDown.value);
})

checkoutBtn.addEventListener('click', function () {
    displayField.innerHTML = shoeInstance.checkout();
    total.style.display = "none";
    listData.innerHTML = '';
})

function buildDropDowns() {
    var colourOptions = { list: shoeInstance.colours() };
    var colourHTML = dropDownTemplate(colourOptions);
    colourData.innerHTML = colourHTML;

    var brandOptions = { list: shoeInstance.brand() };
    var brandHTML = dropDownTemplate(brandOptions);
    brandData.innerHTML = brandHTML;

    var sizeOptions = { list: shoeInstance.size() };
    var sizeHTML = dropDownTemplate(sizeOptions);
    sizeData.innerHTML = sizeHTML;
}


