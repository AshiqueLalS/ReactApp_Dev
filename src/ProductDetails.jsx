import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const [product, setProducts] = useState([])
    let {id} = useParams()

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/'+id)
            .then((res)=>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err)=>{
                console.log(err)
                alert("Something went wrong, please refresh page")
            })
    },[])
  return (
    <>
        <main>
            <section>
                <div>
                    <div >
                        <img src={product.image}  style={{width: "300px"}}/>
                    </div>
                    <div>
                        <h2>{product.title}</h2>
                        <p className='text-success'>${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default ProductDetails