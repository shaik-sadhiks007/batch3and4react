import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Login() {

    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const navigate = useNavigate(); // initilisation of the navigate

    const [error, setError] = useState(false)

    function handleUsername(event) {

        setError(false)
        setUsername(event.target.value)

    }

    function handlePassword(event) {

        setError(false)

        setPassword(event.target.value)

    }


    async function handleLogin() {

        let res = await fetch("http://localhost:5000/api/auth/login",
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

        let data = await res.json();


        if (res.status == 200) {
            localStorage.setItem("token",data.token)
            navigate('/todos')
        }

        console.log(data, 'data in the login')
    }


    return (
        <div className='d-flex flex-column align-items-center gap-3'>
            <h1>Login</h1>

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

            <button onClick={() => handleLogin()}>Login</button>
        </div>
    )
}

export default Login
