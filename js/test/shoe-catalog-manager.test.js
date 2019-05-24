describe("Testing Shoe Catalog Manager", function () {
    describe("Testing the filters for options in the records", function(){
        it("Should return all the colour options in the record data", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.colours(), ["Select colour", "Blue", "Red", "Black", "White", "Grey"]);
        })
        it("Should return all the brand options from the record data", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.brand(), ["Select brand", "Nike", "Adidas", "New Balance", "Vans"]);
        })
        it("Should return all the size options from the record data", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.size(), ["Select shoe size", "7", "8", "9", "10", "11","12"]);
        })
    })
    describe("Testing the string function that displays stock after search", function(){
        it("Should return 'We have 1 Blue Nike(s) in stock at R350 per.' with the options of 'Blue','Nike' and '8' selected", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.createString("Blue","Nike","8"),"We have 1 Blue Nike(s) in stock at R350 per.");
        })
        it("Should return 'We have 5 Black Adidas(s) in stock at R1200 per.' with the options of 'Black','Adidas' and '7' selected", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.createString("Black","Adidas","7"),"We have 5 Black Adidas(s) in stock at R1200 per.");
        })
        it("Should return nothing with no input as nothing can be processed", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.createString(""),);
        })
        it("Should return an error message that all fields aren't being used", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.createString("Blue","Select brand","10"),"Please make sure all data is entered");
        })
    })
    describe("Testing the function that creates a list of wanted items for the basket", function(){
        it("Should return an object with the data (size 7, colour Black, brand Adidas,cost and qty) for the shoe added to list", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.buildBasket("Black","Adidas","7"),[{ "size": "7", "colour": "Black", "brand": "Adidas", "qty": 1, "cost": 1200 }]);
        })
        it("Should return an object with the data (size 9, colour Blue, brand Nike,cost and qty) for the shoe added to list", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.buildBasket("Blue","Nike","9"),[{ "size": "9", "colour": "Blue", "brand": "Nike", "qty": 1, "cost": 350 }]);
        })
        it("Should return an array of 2 objects 1 item was repeated therefore qty increased as well as cost for the blue Nikes", function () {
            var shoeInstance = ShoeCatalogManager(records);
            shoeInstance.buildBasket("Blue","Nike","9");
            shoeInstance.buildBasket("Red","Vans","11");
            assert.deepEqual(shoeInstance.buildBasket("Blue","Nike","9"),[{ "size": "9", "colour": "Blue", "brand": "Nike", "qty": 2, "cost": 700 },{ "size": "11", "colour": "Red", "brand": "Vans", "qty": 1, "cost": 850 }]);
        })
        it("Should return an empty array with no input as there was nothing added to add to the list", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.buildBasket(''),[]);
        })
    })
    describe("Testing that the totalling function works", function(){
        it("Should return the total of the list as 850,00 with one item in the basket", function () {
            var shoeInstance = ShoeCatalogManager(records);
            shoeInstance.buildBasket("Red","Vans","11");
            assert.equal(shoeInstance.total(),850.00)
        })
        it("Should return the total of the items combined as 1700,00", function () {
            var shoeInstance = ShoeCatalogManager(records);
            shoeInstance.buildBasket("Red","Vans","11");
            shoeInstance.buildBasket("Red","Vans","11");
            shoeInstance.buildBasket("Black","Adidas","9");
            assert.equal(shoeInstance.total(),2900.00)
        })
        it("Should return the total of the items combined as 0,00 with no items in the basket", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.equal(shoeInstance.total(),0.00)
        })
    })
    describe("Testing the shopping list clearing function", function(){
        it("Should return empty array as the list was cleared", function () {
            var shoeInstance = ShoeCatalogManager(records);
            shoeInstance.buildBasket("Red","Vans","11");
            shoeInstance.buildBasket("Black","New Balance","10");
            shoeInstance.buildBasket("Red","Vans","11");
            
            shoeInstance.clear();
            assert.deepEqual(shoeInstance.showList(),[]);
        })
    })
})