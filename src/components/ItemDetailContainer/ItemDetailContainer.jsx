import ItemDetail from "./ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { prod } from "../Productos/Productos"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const [productos, setRemeras] = useState([])
    const {id} = useParams()
    
    
    useEffect (() => {
        prod(7)
        .then(respuesta => setRemeras(respuesta))
        .catch(err => console.log(err))
        .finally(() => console.log('finally'))
      
    }, [id])
   
    console.log(productos)
    
  return (
    <ItemDetail productos={productos}/>
  )
}

export default ItemDetailContainer