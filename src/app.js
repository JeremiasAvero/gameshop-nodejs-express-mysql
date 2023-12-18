import express from 'express'
import indexRoutes from './routes/index.routes.js'
import productsRoutes from './routes/products.routes.js'
import swagger from './swagger.js'

const app = express()
app.use(express.json())

app.use(indexRoutes)
app.use('/api',productsRoutes)
app.use(swagger);

app.use((req,res) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})
export default app