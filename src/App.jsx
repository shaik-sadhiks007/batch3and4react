import DependencyProducts from "./Products/DependencyProducts"
import Products from "./Products/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./signup/Login"
import Header from "./components/Header"
import ProductDetail from "./Products/ProductDetail"
import Testing from "./Products/Testing"
import Todos from "./todosPrj/Todos"
import Register from './signup/Register'
import { createContext, useState } from "react"

export const MyAuth = createContext()

// export const MyCart = createContext()



function App() {

  const [hemanth,setHemanth] = useState("testing data")


  return (


    <div>

      {/* <Products /> */}

      {/* <DependencyProducts/> */}

      {/* 
      BrowserRouter --- used to read the url from the address bar
      routes ---- container which holds the route

      route ---- on which path , which component to show 
      */}

      <BrowserRouter>
        {/* whatever component you want to show in the all pages we have to write it in the above of the Routes component */}


        <MyAuth.Provider value={{hemanth,setHemanth}}>

        
          <Header />

          <Routes>

            <Route path="/products" element={<Products />} />

            <Route path="/" element={<Login />} />


            <Route path="/register" element={<Register />} />


            {/* here id is the variable which is representing the all the dynamic pages of that product */}

            {/* to make it dynamic use the colon (:) */}
            <Route path="/product/:id" element={<ProductDetail />} />


            <Route path="/testing-props" element={<Testing />} />

            <Route path="/todos" element={<Todos />} />

          </Routes>

        </MyAuth.Provider>


      </BrowserRouter>

    </div>

  )

}

export default App
