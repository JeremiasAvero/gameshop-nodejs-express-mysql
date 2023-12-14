import express from 'express'
import indexRoutes from './routes/index.routes.js'
import productsRoutes from './routes/products.routes.js'

const app = express()
app.use(express.json())

app.use(indexRoutes)
app.use(productsRoutes)
app.use((req,res) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})
export default app