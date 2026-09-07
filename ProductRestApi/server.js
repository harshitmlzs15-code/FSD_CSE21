const express = require("express");

const app = express();

app.use(express.json());

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Shoes",
        price: 3000,
        category: "Fashion"
    }
];


// GET all products
app.get("/api/products", (req, res) => {
    res.status(200).json(products);
});


// GET product by ID
app.get("/api/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
});


// POST - create product
app.post("/api/products", (req, res) => {

    const { name, price, category } = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({
            message: "Name, price and category are required"
        });
    }

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price,
        category: category
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});


// PUT - update product
app.put("/api/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const product = products.find(product => product.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price, category } = req.body;

    product.name = name;
    product.price = price;
    product.category = category;

    res.status(200).json(product);
});


// DELETE product
app.delete("/api/products/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const productIndex = products.findIndex(
        product => product.id === id
    );

    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const deletedProduct = products.splice(productIndex, 1);

    res.status(200).json({
        message: "Product deleted successfully",
        product: deletedProduct[0]
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});