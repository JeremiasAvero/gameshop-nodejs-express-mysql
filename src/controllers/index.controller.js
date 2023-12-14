
import { conexion } from "../db.js"

export const index = (req,res) => {
    res.json({
        message: "Welcome to TiendaGamer API"
    })
} 


export const ping = async (req,res) => {
    const [result] = await conexion.query('SELECT "pong" as result'); 
    res.json(result[0])
} 