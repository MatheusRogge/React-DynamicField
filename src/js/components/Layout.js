import React from "react"
import Form from "./Form";

export default class Layout extends React.Component
{
    constructor()
    {
        super();
        this.state = { title: "Welcome" };
    }
    
    changeTitle(title)
    {
        this.setState({title});
    }
    
    render()
    {       
        return (
            <div>
                <Form />
            </div>
        );
    }
}