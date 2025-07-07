import React from "react";

class Employee extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            fname:"Revin",
            lname:"Gohil"
        }
    }


    updateEmployee(){
        this.setState({
            fname:"Ram",
            lname:"Jadhav"
        })
    }

    render(){
        return(

            <div>
                <h1> Employee Details</h1>
                <p>{this.state.fname}</p>
                <p>{this.state.lname}</p>
                <button onClick={() => this.updateEmployee()}>Update</button>
            </div>
        )
    }

}

export default Employee