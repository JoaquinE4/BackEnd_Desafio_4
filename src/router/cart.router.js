import { Router } from "express";
import path from "path";
import { CartManager } from "../dao/CartManager.js";
import __dirname from "../utils.js";

export const router = Router()

const cartManager = new CartManager(path.join(__dirname, "data", "carrito.json"))


router.post("/",(req,res)=>{
    let newCart = cartManager.addCart()
    res.json(newCart)
})

router.get("/:cid", (req,res)=>{
    let id = req.params.cid
    id = Number(id)
    if(isNaN(id)){
        res.jsom("No es un numero")
    }

    try{
        let getCart = cartManager.getCartById(id)
        return res.json({Message:"Se encontro carrito", getCart})
    }catch{
        return res.json({error:"No se encontro cart correspontiente"})
    }
})


router.post("/:cid/product/:pid",(req,res)=>{
    let cid = req.params.cid
    let pid = req.params.pid
    cid = Number(cid)
    pid = Number(pid)
    if(isNaN(cid) || isNaN(pid) ){
        return res.json("No corresponde a un ID válido");
    }

    try{
        cartManager.addProducts(cid, pid)

        res.json({ message: "Producto agregado al carrito correctamente" });

    }catch{
        res.json({ error: "no se puede"}); 
    }


})
