import React, { useState, useEffect, use } from 'react'

function DependencyProducts() {

    const [products, setProducts] = useState([]); // use empty because products are array of objs

    const [showProducts, setShowProducts] = useState(false)

    async function fetchProducts() {

        let response = await fetch("https://dummyjson.com/products");

        let data = await response.json(); // file into js obj


        console.log(data, 'data')

        setProducts(data.products);

        // console.log(data.products, 'data')
    }


    useEffect(

        () => {
            fetchProducts()
        }, [showProducts]
    )



    function handleProducts() {


        setShowProducts(true)


    }


    return (
        <div>
            <h1>products page</h1>


            <button onClick={() => handleProducts()}>
                load the products
            </button>


            <div className='container'>

                {
                    showProducts ? (
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
                    ) : null
                }


            </div>





        </div>
    )
}

export default DependencyProducts
