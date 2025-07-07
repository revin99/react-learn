import { useState } from "react"

const User = () => {

    const [fname,setFname] = useState('Ramesh')
    const [lname,setLname] = useState('Fairy')

    const [user,setUser] = useState({
        fname:"Ramesh",
        lname: "Fairy"
    })

    function updateUser(){
        // setFname('Ram')
        // setLname('Jadhav')
        setUser({
            fname:"Ram",
            lname:"Jadhav"
        })
    }

    return(
        <div>
            <h1>User details</h1>
            <p>{user.fname}</p>
            <p>{user.lname}</p>

            <button onClick={updateUser}>Update user</button>
        </div>
    )

}

export default User