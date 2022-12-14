import React from 'react'
import { useState } from 'react'

const ItemCount = ({inicial=1, stock=7, onAgregar}) => {
  
    
    const [count, setCount] = useState (inicial)
   
  
    const handleClick = () => {
      if(count < stock) {   
        setCount(count + 1)}
    }
  

    const restaCount = () => {
      if (count > 1) {
        setCount (count - 1)
      }
    }

    const handleBuy = () => {
      onAgregar(count)
    }
    
    return (
        <div>
            <>
                <button onClick={handleClick}> + </button>
                <button onClick={restaCount}> - </button>
                <p> Total: {count} </p>
                <br/>
                <button onClick={handleBuy}> Agregar al Carrito </button>
            </>
        </div>
        
  )
}

export default ItemCount