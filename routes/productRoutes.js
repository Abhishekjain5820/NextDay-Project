import express from 'express'
import {createProduct,getAllProducts} from '../controller/productController.js'
const router=express.Router()

router.post('/create-product',createProduct)
router.get('/get-product',getAllProducts)


export default router