import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Counter } from './features/counter/Counter'


function Cart() {


    let prodCart = useSelector(state => state.cart.products)

  return (
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
                
                    {prodCart?.map((cart,index)=>{
                        return(
                            <>
                            <tr>
                            <td>
                                <img src={cart.image}  style={{width:"50px"}}  />
                            </td>
                            <td>{cart.title}</td>
                            <td>${cart.price}</td>
                            <td> 
                            <div>
                                
                                <Counter  />
                                </div>
                            </td>
                            </tr>
                            </>
                        )

                    })}
                
                
            </tbody>
        </Table>
    </Container>
  )
}

export default Cart