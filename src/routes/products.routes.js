import {
    getProduct, 
    getProducts, 
    postProduct, 
    patchProduct,
    deleteProduct
} 
from '../controllers/products.controller.js'
import { Router } from "express";

const router = Router()

router.get('/products',getProducts )
router.get('/products/:id',getProduct )
router.post('/products',postProduct )
router.patch('/products/:id',patchProduct )
router.delete('/products/:id',deleteProduct )

export default router