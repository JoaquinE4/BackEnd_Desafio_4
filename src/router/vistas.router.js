import { Router } from 'express';
import ProductManager from "../dao/ProductManager.js"
import  path   from "path"
import __dirname from "../utils.js" 
 
const productManager = new ProductManager(path.join(__dirname,  "data", "productos.json"))

export const router = Router()

router.get("/", (req, res)=>{
    let productos = productManager.getProducts()
    res.setHeader("Content-type", "text/html")
    res.status(200).render("home", {productos})
})

router.get("/realtimeproducts",(req,res)=>{
    let productos = productManager.getProducts()
    res.setHeader("Content-type", "text/html")
    res.status(200).render("realTimeProducts", {productos})
})
