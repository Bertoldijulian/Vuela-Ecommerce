import Item from "../Item/Item"

const ItemList = ({productos}) => {
    
    return (  
        
        <>
        {
            productos?.map(prods => <Item key={prods.id} prods={prods}/>)
        }
        </>

  )
}

export default ItemList