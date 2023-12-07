import subCategoryModel from "../models/subCategoryModel.js";

export const getAllSubCategory = async (req, res) => {
  try {
    const subCategories = await subCategoryModel.find();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSubCategory = async (req, res) => {
    try {
        const { name, mainCategory } =req.body;
        const subCategory = await subCategoryModel.create({name,mainCategory});
        res.status(201).json(subCategory);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
