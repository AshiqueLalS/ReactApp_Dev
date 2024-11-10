import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'

function CartChild2(props) {

    let [carts, setCarts] = useState(props.cartData)


  return (
    <>
    
    <Container>

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                    {carts?.map((cart,index)=>{
                        return(
                            <>
                            <tr>
                            <td>
                                <img src={cart.image}  style={{width:"50px"}}  />
                            </td>
                            <td>{cart.title}</td>
                            <td>${cart.price}</td>
                            <td> 
                                <button>+</button>
                                10
                                <button>-</button>
                                <button>Delete</button>
                            </td>
                            </tr>
                            </>
                        )

                    })}
                
                
            </tbody>
        </Table>
    </Container>
    </>
  )
}

export default CartChild2