import { conexion } from "../db.js";

export const getProducts = async (req,res) => {
    try {
        const [rows] = await conexion.query('SELECT * FROM products')
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            
        })
        res.send(error)
    }
}
export const getProduct = async (req,res) => {
    try {
        const [rows] = await conexion.query('SELECT * FROM products WHERE id = ?', req.params.id)
        if(rows.length <= 0){
            res.status(404).json({
                message: 'Product not Found'
            })
        }
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const postProduct = async (req,res) => {
    try {
        const {name, description, price, imageUrl, brand, category  } = req.body
        const [rows] = await conexion.query('INSERT INTO products (name, description, price, imageUrl, brand, category) VALUES (?,?,?,?,?,?)',[name, description, price, imageUrl, brand, category])
        res.send({
            id: rows.insertId,
            name,
            description,
            price,
            imageUrl,
            brand,
            category
        })
       
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const patchProduct = async (req,res) => {
    try {
        const {id} = req.params
        const {name, description, price, imageUrl, brand, category  } = req.body

        const [result] = await conexion.query('UPDATE products SET name = IFNULL(?, name), description = IFNULL(?, description), price = IFNULL(?, price), imageUrl = IFNULL(?, imageUrl), brand = IFNULL(?, brand), category = IFNULL(?, category) WHERE id = ?',[name, description, price, imageUrl, brand, category, id])
        
        if(result.affectedRows <= 0){
            return res.status(404).json({
                message: "Product not found"
            })
        }
        const [rows] = await conexion.query("SELECT * FROM products WHERE id = ?", [id])
        res.json(rows)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params

        const [result] = await conexion.query('DELETE FROM products WHERE id = ?',[id])
        res.sendStatus(204)
        if(result.affectedRows <= 0){
            return res.status(404).json({
                message: "Product not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
}