import DependencyProducts from "./Products/DependencyProducts"
import Products from "./Products/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./signup/Login"
import Header from "./components/Header"
import ProductDetail from "./Products/ProductDetail"
import Testing from "./Products/Testing"


function App() {

  const a = 5

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

        <Header />

        <Routes>

          <Route path="/" element={<Products />} />

          <Route path="/login" element={<Login />} />

          {/* here id is the variable which is representing the all the dynamic pages of that product */}

          {/* to make it dynamic use the colon (:) */}
          <Route path="/product/:id" element={<ProductDetail />} />


          <Route path="/testing-props" element={<Testing />} />






        </Routes>

      </BrowserRouter>

    </div>

  )

}

export default App
