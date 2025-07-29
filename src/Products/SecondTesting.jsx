
function SecondTesting({person,age,setAge}) {


    function handleAge() {
        setAge(80)
    }
    return (

        <div>
            <h1>Second Testing</h1>

            <h2>the user name is {person} and age is {age}</h2>

            <button onClick={() => handleAge()}>updateAge</button>

        </div>
    )
}

export default SecondTesting
