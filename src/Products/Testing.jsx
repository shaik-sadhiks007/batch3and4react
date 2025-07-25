import React, { useState } from 'react'
import SecondTesting from './SecondTesting'

function Testing() {

    const [user,setUser] = useState('hemanth');

    const [age,setAge] = useState(70)

    /// props ---- sending the data from parent to child


    return (
        <div>
            <h1>testing</h1>

            <SecondTesting person={user} age={age}/>

        </div>
    )
}

export default Testing
