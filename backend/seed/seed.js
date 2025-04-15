const mongoose = require('mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');

const MONGO_URI = 'mongodb+srv://jainpalchhi2k6:Rentora123@rentora.rivuyny.mongodb.net/category';

const seed = async () => {
  await mongoose.connect(MONGO_URI);
  await Product.deleteMany({});
  await Category.deleteMany({});

  const categories = [
    { name: 'Electronics' },
    { name: 'Footwear' }
  ];
  await Category.insertMany(categories);

  const products = [
    {
      name: 'Wireless Mouse',
      price: 20.99,
      stock: 150,
      category: 'Electronics'
    },
    {
      name: 'Running Shoes',
      price: 70.99,
      stock: 200,
      category: 'Footwear'
    }
  ];
  await Product.insertMany(products);

  console.log("Database seeded successfully!");
  mongoose.disconnect();
};

seed();
