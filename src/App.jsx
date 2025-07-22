import DependencyProducts from "./Products/DependencyProducts"
import Products from "./Products/Products"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./signup/Login"
import Header from "./components/Header"

function App() {

  const a = 5

  return (


    <div>

      {/* <Products /> */}

      {/* <DependencyProducts/> */}

      <BrowserRouter>


        {/* whatever component you want to show in the all pages we have to write it in the above of the Routes component */}
        
        <Header />

        <Routes>

          <Route path="/" element={<Products />} />

          <Route path="/login" element={<Login />} />


        </Routes>

      </BrowserRouter>

    </div>

  )

}

export default App
