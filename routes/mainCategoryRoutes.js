import express from 'express' 
import {getAllMainCategory,createMainCategory} from '../controller/mainCategoryController.js'
const router=express.Router()



router.get('/',getAllMainCategory)
router.post('/',createMainCategory)

export default router