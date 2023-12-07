import mainCategoryModel from "../models/mainCategoryModel.js";
export const getAllMainCategory = async (req, res) => {
  try {
    const mainCategories = await mainCategoryModel.find();
    res.status(200).json(mainCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMainCategory = async (req, res) => {
    try {
        const {name}=req.body;
        const mainCategory = await mainCategoryModel.create({name});
        res.status(201).json(mainCategory);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
