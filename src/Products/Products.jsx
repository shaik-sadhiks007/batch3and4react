import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import ProductCategory from './ProductCategory';

function Products() {

    const [products, setProducts] = useState([]); // use empty because products are array of objs

    async function fetchProducts() {

        let response = await fetch("https://dummyjson.com/products");

        let data = await response.json(); // file into js obj


        console.log(data, 'data')

        setProducts(data.products);

        // console.log(data.products, 'data')
    }


    const [categories, setCategories] = useState([])

    const [selectedCategory, setSelectedCategory] = useState("beauty")


    const [filteredProducts, setFilteredProducts] = useState(products)

    async function fetchCategory() {

        let res = await fetch('https://dummyjson.com/products/category-list');

        let data = await res.json()

        setCategories(data.slice(0, 5))
    }


    function filterProducts() {

        console.log("function fillter")

        let filteredData = products.filter((ele, index) => ele.category === selectedCategory)

        console.log(filteredData,'filtereddata')

    }

    useEffect(() => {

        filterProducts()


    }, [products, selectedCategory])

    useEffect(() => {
        fetchCategory()

        fetchProducts()
    }, [])

    // syntax of the useEffect :

    // useEffect(  Callback, dependency   )

    // dependency --- [] ---- empty dependency ---- it will call the function only one time that too on the load of the page


    // useeffect ---- is called to handle the side effects (majorly async function)

    // note : when we are doing the api calls use the useEffect function

    // 2. when u add the dependency --- when the variable changes the useeffect automatically call the inner functions in the useeffect

    console.log(products, 'products')

    // fetchProducts()


    function handleSelectedCategory(cat) {
        setSelectedCategory(cat)
    }

    console.log(selectedCategory, 'selected cat')


    return (
        <div>

            <h1>products page</h1>


            {/* when we use the js ---- we have to write in the {}

            when we are using the html --- we have to use the () */}


            <div>
                <h1>categories of the products</h1>

                <button className='btn btn-outline-danger mx-2 mb-3'

                    onClick={() => handleSelectedCategory('all')}

                >
                    All
                </button>

                {
                    categories.map((ele, index) => (

                        <button key={index} className='btn btn-outline-danger mx-2 mb-3'

                            onClick={() => handleSelectedCategory(ele)}

                        >
                            {ele}
                        </button>

                    ))
                }
            </div>
            <div className='container'>


                <div className='row'>
                    {
                        // key property should be unique it is identify the child for the react js
                        products.map((ele, index) => (
                            <div className="card col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                                <img src={ele.images[0]} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <Link to={`/product/${ele.id}`}>
                                        <h5 className="card-title">{ele.title}</h5>
                                    </Link>

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
