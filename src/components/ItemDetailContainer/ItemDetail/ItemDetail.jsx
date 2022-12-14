import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({productos}) => {


  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productos.img}/>
      <Card.Body>
        <Link to={`/categoria/remeras/${productos.id}`}>
          <Card.Title>{productos.articulo}</Card.Title>
        </Link>
        <Card.Text>
          ${productos.precio}
        </Card.Text>
        <Link to={`/categoria/remeras/${productos.id}`} className='ms-2  me-1'>
          <Button variant="primary">Mas Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail