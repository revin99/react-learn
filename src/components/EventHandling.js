import { useState } from "react"


const EventHandling = () => {
    const [count, setCount]= useState(0)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }

    return(
        <div>
            <h1>Event handling example</h1>
            <p>Count : {count} </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default EventHandling