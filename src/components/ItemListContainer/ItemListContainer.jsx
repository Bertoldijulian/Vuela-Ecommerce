
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import {prod} from "../Productos/Productos"

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const{callerasId} = useParams()
    
    useEffect (() =>{
      if(callerasId){
        prod()
        .then(respuesta => setProductos(respuesta.filter(producto => producto.calleras === callerasId )))
        .catch(err => console.log(err))
        .finally(() => console.log('finally'))
      } else {
        prod()
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
        .finally(() => console.log('finally'))
      }
        
    }, [callerasId])

    console.log(productos)

    
    const onAgregar = (total) => {
        console.log(`Compro ${total} productos`)
    }

  return (
    <>
        <ItemList productos={productos}/>
        <ItemCount inicial={1} stock={7} onAgregar={onAgregar}/>
    </>
  )
}

export default ItemListContainer