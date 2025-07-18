import React, { useState } from 'react'

function Products() {

    const [products, setProducts] = useState([]); // use empty because products are array of objs


    async function fetchProducts() {

        let response = await fetch("https://dummyjson.com/products");

        let data = await response.json(); // file into js obj

        setProducts(data.products);

        // console.log(data.products, 'data')
    }

    console.log(products, 'products')

    fetchProducts()

    return (
        <div>
            <h1>products page</h1>


            {/* when we use the js ---- we have to write in the {}

            when we are using the html --- we have to use the () */}

            <div className='container'>

                <div className='row'>
                    {
                        products.map((ele, index) => (
                            <div class="card col-12 col-sm-6 col-md-4 col-lg-3" >
                                <img src={ele.images[0]} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{ele.title}</h5>
                                    <p class="card-text">{ele.description}</p>
                                    <a href="#" class="btn btn-primary">Add to Cart</a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>





        </div>
    )
}

export default Products
