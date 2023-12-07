import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subCategory: {
    type: mongoose.ObjectId,
    ref: "SubCategory",
    required: true,
  },
});

export default mongoose.model("Products", productSchema);
