import React from "react";
import DynamicField from "./DynamicField";
import FormStore from "../stores/FormStore";

export default class Form extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            selectedType: 'text'
        };
    }

    typeChanged(e)
    {
        this.setState({selectedType: e.target.value});
    }
    
    render()
    {
        const options = 
        [ 
            { value: 'text', text: 'Text' }, 
            { value: 'textarea', text: 'Text Area' }, 
            { value: 'number', text: 'Number' } 
        ];
        
        return (
            <div>
                <div>
                    <h1> Dynamic Types </h1>
                    <section>
                        <span>
                            <label>Dynamic Field: </label>
                            <DynamicField id="0" type={this.state.selectedType} />
                        </span> 
                        <br />
                        <span>
                            <label> Type of: </label>
                            <DynamicField type="select" options={options} changeHandler={this.typeChanged.bind(this)} />
                        </span>
                    </section>
                </div>
            </div>
        );
    }
}