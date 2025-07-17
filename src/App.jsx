import Login from './signup/Login'
import Register from './signup/Register'
import Newfile from './Newfile';


function App() {


  // javascript code written in the above of the return keyword

  let count = 0;

  console.log(count, 'count')


  function increment() {
    console.log('increment function')
  }



  return (


    <div>

      {/* empty tags called as react fragment */}

      <h1>code from app.jsx</h1>

      <h1>
        Count is {count}
      </h1>


      {/* <button onClick={increment}>
        increment
      </button> */}

      <button onClick={() => increment()}>
        increment
      </button>

      <button onClick={increment()}>
        increment
      </button>



      {/* <Newfile />

      <Register /> */}

      {/*  <Login />  function call */}





    </div>


  )

}

export default App
