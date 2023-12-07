import cartModel from "../models/CartModel.js";
export const addToCart=async(req,res)=>{
   const { productId, quantity } = req.body;

  try {
    const updatedCart =  await cartModel.create({ productId, quantity });
    res.status(201).json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

export const showCart=async(req,res)=>{
    try {
        const allProducts=await cartModel.find();
        res.status(201).json(allProducts);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
  }
    }

