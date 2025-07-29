import React, { useEffect, useState } from 'react'
import EachTodo from './EachTodo'


function Todos() {


    const [todos, setTodos] = useState([]);

    const [inputText, setInputText] = useState('')



    async function fetchTodos() {

        let res = await fetch('http://localhost:5000/api/todo')

        let data = await res.json()

        setTodos(data)

    }

    function handleInputText(event) {

        let data = event.target.value

        setInputText(data)


    }


    async function handleSubmit() {

        if (inputText.trim() !== '') {

            let res = await fetch('http://localhost:5000/api/todo',
                {
                    // post method is saying to backend you have to create the data in the database
                    method: 'POST',

                    // headers saying what type of content i am sending
                    headers: {
                        "Content-Type": 'application/json'
                    },


                    // body means nothing data which u have to store in the database
                    body: JSON.stringify(
                        {
                            title: inputText
                        }
                    )
                }
            )

            let data = await res.json()

            setInputText('')

            console.log(data, 'data in the sumbit')

        }



        fetchTodos()

    }


    async function handleDelete(id) {

        let res = await fetch(`http://localhost:5000/api/todo/${id}`,
            {
                method: 'DELETE',

            }
        )

        fetchTodos()

    }

    useEffect(() => {

        fetchTodos()

    }, [])

    return (
        <div>
            <h1 className='text-center'>Todos Application</h1>

            <div className='d-flex justify-content-center mb-3'>
                <input type="text"
                    placeholder='enter todo'
                    value={inputText}
                    onChange={(event) => handleInputText(event)} />
                <button className='btn btn-success' onClick={() => handleSubmit()}>submit</button>
            </div>

            <EachTodo
                todos={todos}

                handleDelete={handleDelete}

            />

        </div>
    )
}

export default Todos
