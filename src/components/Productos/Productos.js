let productos = [
    {
        id: 1,
        articulo: "Callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras1.jpg"
    },
    
    {
        id: 2,
        articulo: "Callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras2.jpg"
    },
    
    {
        id: 3,
        articulo: "Callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras3.jpg"
    },
    
    {
        id: 4,
        articulo: "Callera",
        precio: 2200,
        img: "../../Multimedia/img/calleras4.jpg"
    },
    
    {
        id: 5,
        articulo: "Callera",
        precio: 2700,
        img: "../../Multimedia/img/calleras5.jpg"
    },
    
    {
        id: 6,
        articulo: "Callera",
        precio: 2700,
        img: "../../Multimedia/img/calleras6.jpg"
    },

    {
        id: 7,
        articulo: "Remera",
        precio: 3000,
        img:"../../Multimedia/img/remera1.jpg"
    },
    
    {
        id: 8,
        articulo: "Pupera",
        precio: 2800,
        img: "../../Multimedia/img/pupera1.jpg"
    }
]

export const prod = (id) => {
    if(id){
        return new Promise ((resolve, rejected)=> {
            setTimeout(() =>{
                resolve(productos.find(producto => producto.id === id))
            }, 2000)
        })
    } else {
        return new Promise ((resolve, rejected)=> {
            setTimeout(() =>{
                resolve(productos)
            }, 2000)
        })
    }
}