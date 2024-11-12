import { useState } from "react"
import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux'


import { setCart, addSingleProduct } from './features/cart/cartSlice'
import { Link, useNavigate } from "react-router-dom";


let App=() => {

//   let navigate = useNavigate();
//   const redirectToProductPage=()=>{
//     navigate("/product-details/:id")
//  }

  let [products, setProducts] = useState([])

 
  let dispatch = useDispatch()

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
              setProducts(res.data)
            })
            .catch((error)=>{
              console.log(error)
            })
           
  },[])

  const addToCart= (product)=>{
    
    dispatch(addSingleProduct(product))

  }
  
  return(
    <>
    <Container>
        <h1 className='text-secondary'>Products</h1>
        <Row>
          {products.map((product,index)=>{

            return(

              <Col xs={6} sm={6} lg={4} xl={3} key={index}>
                  <Card className='card' >
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <p className='text-success'>$ {product.price}</p>
                      <Card.Text>
                        {product.description}
                      </Card.Text>
                      <Link to={`product-details/${product.id}`}>
                        <Button className='me-2' variant="primary" /*onClick={redirectToProductPage}*/>View Product</Button>
                      </Link>
                      <Button variant='warning' onClick={()=>addToCart(product)}>Add to cart</Button>
                    </Card.Body>
                  </Card>
              </Col>
          )
        })}
      </Row>
      </Container>

        <hr />
       
    </>
  )
}
export default App