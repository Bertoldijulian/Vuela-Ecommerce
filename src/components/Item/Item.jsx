import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({prods}) => {
  return (
    <>

    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prods.img}/>
      <Card.Body>
        <Link to={`/categoria/callerasypouch/${prods.id}`}>
          <Card.Title>{prods.articulo}</Card.Title>
        </Link>
        <Card.Text>
          ${prods.precio}
        </Card.Text>
        <Link to={`/categoria/callerasypouch/${prods.id}`} className='ms-2  me-1'>
          <Button variant="primary">Mas Detalles</Button>
        </Link>
        
      </Card.Body>
    </Card>
     
    </>

  )
}

export default Item