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
    describe("Testing the function that creates the shopping list", function(){
        it("Should return 'We have 1 Blue Nike(s) in stock at R350 per.' with the options of 'Blue','Nike' and '8' selected", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.createString("Blue","Nike","8"),"We have 1 Blue Nike(s) in stock at R350 per.");
        })
        it("Should return 'We have 5 Black Adidas(s) in stock at R1200 per.' with the options of 'Black','Adidas' and '7' selected", function () {
            var shoeInstance = ShoeCatalogManager(records);
            assert.deepEqual(shoeInstance.createString("Black","Adidas","7"),"We have 5 Black Adidas(s) in stock at R1200 per.");
        })
    })
})