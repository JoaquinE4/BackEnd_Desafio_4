const socket = io();

const list = document.getElementById('list-group');

socket.on("nuevoProducto", newProduct => {
    list.innerHTML += `<li>${newProduct.title}</li>`;
});

socket.on('delete',productos=>{
   list.innerHTML=""
    productos.map(p=>{
        list.innerHTML+=`<li>${p.title}</li>`
    })
})