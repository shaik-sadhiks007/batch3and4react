import Login from './signup/Login'
import Register,{testing} from './signup/Register'
import Newfile from './Newfile';
import { useState} from 'react';



function App() {


  // javascript code written in the above of the return keyword

  let count = 0;

  // count = 10 // updation in js 

  const [newcount, setNewCount] = useState(0);

  // setNewCount(10) updation in the react js

  console.log(count, 'count')


  function increment() {
    console.log('increment function');

    count = count + 1

    console.log(count, 'count in function')


  }


  function newIncrement() {

    console.log('new increment function');

    // count = count + 1

    setNewCount(newcount + 1)

  }
  console.log(newcount, 'newcount in function')


  return (


    <div>

      {/* empty tags called as react fragment */}

      <h1>code from app.jsx</h1>

      <h1>
        Count is {count}
      </h1>


      <h1>
        new count is {newcount}
      </h1>


      {/* <button onClick={increment}>
        increment
      </button> */}

      <button onClick={() => increment()}>
        increment
      </button>

      <button onClick={() => newIncrement()}>
        new increment
      </button>
      {/* 
      <button onClick={increment}>
        increment
      </button> */}



      {/* <Newfile />

      <Register /> */}

      {/*  <Login />  function call */}





    </div>


  )

}

export default App
