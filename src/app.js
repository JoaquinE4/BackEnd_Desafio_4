import express from "express"
import { router as productosRouter } from "./router/product.router.js"
import { router as cartsRouter } from "./router/cart.router.js"
import { router as vistasRouter } from "./router/vistas.router.js"
import { engine } from "express-handlebars"
import __dirname from "./utils.js"
import path from "path"
import { Server } from "socket.io"

const PORT=8080
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views",path.join(__dirname, "/views"));

app.use("/api/productos", productosRouter)
app.use("/api/carts", cartsRouter)
app.use("/", vistasRouter)




const server =
app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`));

 export const io = new Server(server)