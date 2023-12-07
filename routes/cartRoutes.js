import express from 'express'
import {addToCart,showCart} from '../controller/cartController.js'
const router=express.Router()

router.post('/addToCart',addToCart)
router.get('/showCart',showCart)

export default router