import React from 'react'

function EachTodo({ todos,handleDelete }) {

    console.log(todos, 'in the child')


    return (
        <ul className='d-flex flex-column align-items-center gap-3 justify-content-center'>
            {
                todos.map((ele, index) => (

                    <li key={index}>

                        <input type="checkbox" checked={ele.completed ? true : false} />

                        <span>{ele.title}</span>

                        <button className='btn btn-primary mx-3'>
                            <i className="bi bi-pencil"></i>
                        </button>

                        <button className='btn btn-danger'
                            onClick={() => handleDelete(ele._id)}
                        >
                            <i className="bi bi-trash"></i>
                        </button>

                    </li>

                ))
            }
        </ul>
    )
}

export default EachTodo
