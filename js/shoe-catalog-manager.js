function ShoeCatalogManager() {
    var data = [
        {
            color: "blue",
            brand: "Nike",
            price: 350,
            stock: [
                { size: 7, stock: 2 },
                { size: 8, stock: 1 },
                { size: 9, stock: 3 },
                { size: 10, stock: 5 },
                { size: 11, stock: 3 },
                { size: 12, stock: 2 }
            ]
        },
        {
            color: "red",
            brand: "Nike",
            price: 400,
            in_stock: 5
        },
        {
            color: "Black",
            brand: "Nike",
            price: 900,
            in_stock: 11
        },
        {
            color: "White",
            brand: "Nike",
            price: 1000,
            in_stock: 7
        },
        {
            color: "Grey",
            brand: "Nike",
            price: 800,
            in_stock: 4
        },
        {
            color: "red",
            brand: "Adidas",
            price: 275,
            in_stock: 2
        },
        {
            color: "blue",
            brand: "Adidas",
            price: 320,
            in_stock: 3
        },
        {
            color: "Black",
            brand: "Adidas",
            price: 1200,
            in_stock: 9
        },
        {
            color: "White",
            brand: "Adidas",
            price: 1100,
            in_stock: 5
        },
        {
            color: "Grey",
            brand: "Adidas",
            price: 800,
            in_stock: 3
        },
        {
            color: "Red",
            brand: "New Balance",
            price: 420,
            in_stock: 8
        },
        {
            color: "Blue",
            brand: "New Balance",
            price: 370,
            in_stock: 6
        },
        {
            color: "White",
            brand: "New Balance",
            price: 900,
            in_stock: 10
        },
        {
            color: "Black",
            brand: "New Balance",
            price: 1180,
            in_stock: 13
        },
        {
            color: "Grey",
            brand: "New Balance",
            price: 960,
            in_stock: 1
        },
        {
            color: "Red",
            brand: "Vans",
            price: 850,
            in_stock: 15
        },
        {
            color: "Blue",
            brand: "Vans",
            price: 780,
            in_stock: 8
        },
        {
            color: "Black",
            brand: "Vans",
            price: 900,
            in_stock: 6
        },
        {
            color: "White",
            brand: "Vans",
            price: 500,
            in_stock: 10
        },
        {
            color: "Grey",
            brand: "Vans",
            price: 600,
            in_stock: 12
        }
    ];
    var colorList = ["Select colour","Red", "Blue", "Black", "White", "Grey"];
    var brandList = ["Select brand","Nike", "New Balance", "Adidas", "Vans"];
    var sizeList = ["Select shoe size",7, 8, 9, 10, 11, 12];

    function displayColor() {
        return colorList;
    }
    function displayBrand() {
        return brandList;
    }
    function displaySizes() {
        return sizeList;
    }
    return {
        colours: displayColor,
        brand: displayBrand,
        size: displaySizes
    }
}