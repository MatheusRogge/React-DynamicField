import React from "react";
import DynamicField from "./DynamicField";
import FormStore from "../stores/FormStore";

export default class Form extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            formFields: FormStore.getAll(),
            selectedType: 'text'
        };
    }

    typeChanged(e)
    {
        this.setState({selectedType: e.target.value});
    }
    
    render()
    {
        const formFields = this.state.formFields.map((value, key) => {
            return (
                <div key={value.id}>
                    <span><b>{value.placeholder}: </b></span>
                    <DynamicField {...value} />
                </div>
            );
        });
        
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
                            <select value={this.state.selectedType} onChange={this.typeChanged.bind(this)}>
                                <option value="text">Text</option>
                                <option value="checkbox">checkbox</option>
                            </select>
                        </span>

                    </section>
                    
                </div>

                <div>
                    <h1> With Flux Stores </h1>
                    <section>
                        {formFields}
                    </section>
                </div>
            </div>
        );
    }
}