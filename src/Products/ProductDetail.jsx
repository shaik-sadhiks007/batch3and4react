import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    // useparams is the function (hooks) it will store the dynamic variables in the obj
    // {
    //     id : 3
    // }

    const { id } = useParams();

    console.log(id, 'id ')


    const [product, setProduct] = useState({})

    async function fetchProduct() {

        let res = await fetch(`https://dummyjson.com/products/${id}`)

        let data = await res.json()

        console.log(data, 'data in the pd')

        setProduct(data)
    }


    useEffect(

        () => {
            fetchProduct()
        },[]
    )


    return (
        <div>
            <h1>product detail</h1>

            <img src={product?.images?.[0]} 
            alt={product.title}
            width="300px"

            
            />

            <h1>{product.title}</h1>

            <p>{product.category}</p>

            <h1>{product.price}</h1>

            <h5>{product.brand}</h5>


        </div>
    )
}

export default ProductDetail
