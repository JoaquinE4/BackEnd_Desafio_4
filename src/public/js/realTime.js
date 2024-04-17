const socket = io();

socket.on('nuevaConexion', data=>{
    Toastify({

        text: `${data} se ha conectado!`,

        duration: 3000

    }).showToast();
})


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