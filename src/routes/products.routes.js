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
/**
 * @swagger
 * components: 
 *  schemas:
 *    Product:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: the product name
 *        Info: 
 *          type: string
 *          description: the product description
 *        price:  
 *          type: integer
 *          description: the product price
 *        imageUrl:
 *          type: string
 *          description: the product image Url
 *        brand:
 *          type: string
 *          description: the product brand name
 *        category:
 *          type: string
 *          description: the product category
 *      required:
 *         - name
 *         - Info 
 *         - price
 *         - imageUrl
 *         - brand
 *         - category
 *      example:
 *         name: Micro Amd Ryzen 5 4500 AM4
 *         Info: N° de núcleos de CPU 6 \\n N° de subprocesos 12 \\n Reloj de aumento máx. Hasta 4.1GHz \\n Reloj base 3.6GHz \\n Caché L1 total 384KB \\n Caché L2 total 3MB \\n Caché L3 total 8MB \\n TDP/TDP predeterminado 65W
 *         price: 137500
 *         imageUrl: https://firebasestorage.googleapis.com/v0/b/tiendagamer-2c0b1.appspot.com/o/ImagenesProductos%2FR545AM4?alt=media&token=8f3197bd-351a-460e-bae8-cf26cbaaa1be
 *         brand: Amd
 *         category: microprocesadores
 */
router.get('/products',getProducts )
/**
 * @swagger
 * /api/products:
 *  get: 
 *    summary: return all products
 *    tags: [Product]
 *    responses:
 *       200: 
 *          description: all products
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: array
 *                  items: 
 *                      $ref: '#/components/schemas/Product'     
 */

router.get('/products/:id',getProduct )
/**
 * @swagger
 * /api/products/{id}:
 *  get: 
 *    summary: return a product
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: the product id       
 *    responses:
 *       200: 
 *          description: a product
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/components/schemas/Product'   
 *       404:
 *          description:  user not found
 */       

router.post('/products',postProduct )
/**
 * @swagger
 * /api/products:
 *  post: 
 *    summary: create new product
 *    tags: [Product]
 *    requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  type: Product
 *                  $ref: '#/components/schemas/Product'
 *    responses:
 *       200: 
 *          description: new product created
 */


router.patch('/products/:id',patchProduct )
/**
 * @swagger
 * /api/products/{id}:
 *  patch: 
 *    summary: update a product
 *    tags: [Product]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: the product id   
 *    requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Product'    
 *    responses:
 *       200: 
 *          description: product updated
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/components/schemas/Product'   
 *       404:
 *          description:  product not found
 */  

router.delete('/products/:id',deleteProduct )
/**
 * @swagger
 * /api/products/{id}:
 *  delete: 
 *    summary: delete a product
 *    tags: [Product]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: the product id       
 *    responses:
 *       200: 
 *          description: product deleted
 *          content: 
 *            application/json:
 *              schema: 
 *                  type: object
 *                  $ref: '#/components/schemas/Product'   
 *       404:
 *          description:  product not found
 */ 
export default router