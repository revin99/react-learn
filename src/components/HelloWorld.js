import React from "react"

const HelloWorld = () => {
    // const myElement = <h1> Hello world!</h1>

    // return myElement

    // return React.createElement('h1',null,'Hello World Create!')
    function handleclick(){
        alert("Button clicked")
    }

    const name = "Ramesh"

    return (
        <div>
            <h1 className="title"> Title </h1>
            <h2> Subtitle</h2>
            <p> Paragraph </p>
            <p>{name}</p>
            <button onClick={handleclick}> Click </button>
        </div>
    )
}

export default HelloWorld