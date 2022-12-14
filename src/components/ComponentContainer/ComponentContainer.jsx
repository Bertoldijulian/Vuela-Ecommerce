
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import Titulo from "../ComponentContainer/Titulo"



const ComponentContainer = () => {

  return (
    <>
        <Titulo titulo='SOY VUELA'/>
        <ItemListContainer path="/categoria/callerasypouch"/>
        <ItemDetailContainer path="/categora/remeras"/>
    </>
  )
}

export default ComponentContainer