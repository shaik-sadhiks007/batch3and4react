import { useState } from "react"



function Register() {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState(false)

    function handleUsername(event) {

        setError(false)
        setUsername(event.target.value)

    }

    function handlePassword(event) {

        setError(false)

        setPassword(event.target.value)

    }




    async function handleRegister() {
        console.log('reg funct')

        let res = await fetch("http://localhost:5000/api/auth/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(
                    {
                        username: username,
                        password: password
                    }
                )
            }
        )

        if (res.status == 200) {
            setPassword("")
            setUsername("")
        }

        if (res.status == 500) {

            setError(true)


        }

        let data = await res.json();

        console.log(data, 'data in register')
    }
    return (
        <div className='d-flex flex-column align-items-center gap-3'>
            <h1>Register</h1>

            {
                error ? (
                    <>
                        <p className="text-danger">username is already available, choose another</p>
                    </>
                ) : null
            }


            <input type="text" placeholder='enter username'

                onChange={(event) => handleUsername(event)}

            />

            <input type="text" placeholder='enter password'

                onChange={(event) => handlePassword(event)}


            />

            <button onClick={() => handleRegister()}>Register</button>
        </div>
    )
}

export default Register
