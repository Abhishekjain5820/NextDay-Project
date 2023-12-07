import express from 'express' 
import {getAllSubCategory,createSubCategory} from '../controller/subCategoryController.js'
const router=express.Router()



router.get('/',getAllSubCategory)
router.post('/',createSubCategory)

export default router