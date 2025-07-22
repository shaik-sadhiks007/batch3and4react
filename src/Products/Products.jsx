import React, { useState, useEffect } from 'react'
import Header from '../components/Header';

function Products() {

    const [products, setProducts] = useState([]); // use empty because products are array of objs

    async function fetchProducts() {

        let response = await fetch("https://dummyjson.com/products");

        let data = await response.json(); // file into js obj


        console.log(data, 'data')

        setProducts(data.products);

        // console.log(data.products, 'data')
    }

    // syntax of the useEffect :

    // useEffect(  Callback, dependency   )

    // dependency --- [] ---- empty dependency ---- it will call the function only one time that too on the load of the page


    // useeffect ---- is called to handle the side effects (majorly async function)

    // note : when we are doing the api calls use the useEffect function

    // 2. when u add the dependency --- when the variable changes the useeffect automatically call the inner functions in the useeffect


    useEffect(

        () => {

            fetchProducts()

        }, []

    )

    console.log(products, 'products')

    // fetchProducts()

    return (
        <div>

            <h1>products page</h1>


            {/* when we use the js ---- we have to write in the {}

            when we are using the html --- we have to use the () */}

            <div className='container'>

                <div className='row'>
                    {
                        // key property should be unique it is identify the child for the react js
                        products.map((ele, index) => (
                            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <img src={ele.images[0]} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                    <p className="card-text">{ele.description}</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
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
