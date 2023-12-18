
import { conexion } from "../db.js"

export const index = (req,res) => {
    res.json({
        welcome: "Welcome to the Gamingshop API",
        documentation: "Go to /api-doc for read documentation"
    })
} 


export const ping = async (req,res) => {
    const [result] = await conexion.query('SELECT "pong" as result'); 
    res.json(result[0])
} 