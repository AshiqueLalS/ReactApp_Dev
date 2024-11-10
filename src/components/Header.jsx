import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



function Header() {

    function getinputval(event){
        console.log(event.target.value)
    }
    
     let navigate = useNavigate();
     const count = useSelector(state=> state.counter.value)
     let prodCart = useSelector(state => state.cart.products)

     const redirectToCart=()=>{
        navigate("/cart")
     }

  return (
    <div>
        <Navbar bg="primary" expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Link to="/" className= "nav-link">Home</Link>
                <Link to="/Contact-us" className= "nav-link">Contact us</Link>
                <Button variant="outline-warning" onClick={redirectToCart}>Cart({prodCart.length})</Button>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange= {getinputval}
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header