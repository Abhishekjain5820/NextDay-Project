import productModel from "../models/productModel.js"
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
    try {
        const { name, price, subCategory } = req.body;
        const product = await productModel.create({name,price,subCategory});
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};


