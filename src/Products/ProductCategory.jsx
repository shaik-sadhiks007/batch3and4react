import React, { useEffect, useState } from 'react'

function ProductCategory() {

    const [categories,setCategories] = useState([])

    async function fetchCategory() {

        let res = await fetch('https://dummyjson.com/products/category-list');

        let data = await res.json()

        setCategories(data.slice(0,5))
    }


    useEffect(() => {
        fetchCategory()
    },[])


    return (
        <div>
            <h1>categories of the products</h1>

            <button className='btn btn-outline-danger mx-2 mb-3'>
                All
            </button>

            {
                categories.map((ele,index) => (

                    <button key={index} className='btn btn-outline-danger mx-2 mb-3'>
                        {ele}
                    </button>

                ))
            }
        </div>
    )
}

export default ProductCategory
