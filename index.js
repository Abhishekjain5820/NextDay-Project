import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/connection.js';
import mainCategoryRoutes from './routes/mainCategoryRoutes.js'
import subCategoryRoutes from './routes/subCategoryRoutes..js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
dotenv.config()

const app=express()
connectDB();



//middleware 
app.use(express.json())

app.use('/main-category',mainCategoryRoutes)
app.use('/sub-category',subCategoryRoutes)
app.use('/product',productRoutes)
app.use('/cart',cartRoutes)

const PORT=process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
  });

