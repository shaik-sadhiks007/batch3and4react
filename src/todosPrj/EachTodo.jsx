import React, { useState } from 'react'

function EachTodo({ todos, handleDelete, handleCheckbox }) {

    console.log(todos, 'in the child')


    const [showModal, setShowModal] = useState(false);

    const [selectedTodo, setSelectedTodo] = useState('')

    const [selectedId, setSelectedId] = useState('')

    function handleEdit(ele) {

        setSelectedTodo(ele.title)

        setSelectedId(ele._id)

        setShowModal(true)

    }


    console.log(selectedTodo, 'selected todo')

    console.log(selectedId,'id')

    return (

        <>
            {
                showModal ? (
                    <div class="modal d-block" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Edit Todo</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label htmlFor="">Updated todo : </label>
                                    <input type="text" placeholder='enter the updated todo'


                                        onChange={(event) => setSelectedTodo(event.target.value)}

                                        value={selectedTodo}

                                    />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"

                                        onClick={() => setShowModal(false)}

                                    >Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }


            <ul className='d-flex flex-column align-items-center gap-3 justify-content-center'>
                {
                    todos.map((ele, index) => (

                        <li key={index}>

                            <input type="checkbox" checked={ele.completed ? true : false}

                                onChange={() => handleCheckbox(ele)}


                            />

                            <span>{ele.title}</span>

                            <button className='btn btn-primary mx-3'

                                onClick={() => handleEdit(ele)}

                            >
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
        </>

    )
}

export default EachTodo
