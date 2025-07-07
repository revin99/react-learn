import { useState } from "react"


const ConditionalRendering = () => {

    const [isLoggedIn, setisLoggedIn] = useState(false)
    function doLogin(){

        setisLoggedIn(true)

    }

    let message;
    
    if(isLoggedIn){
        message = <p>Welcome, User</p>
    }else{
        message = <p> Please Login!</p>
    }

    return(
        <div>
            {message}
            <button onClick={doLogin}>Login</button>
        </div>
    )

    

}

export default ConditionalRendering