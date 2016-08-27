import React from "react";
import DynamicField from "./DynamicField";
import FormStore from "../stores/FormStore";

export default class Form extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            formFields: FormStore.getAll()
        };
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
            <form>
                {formFields}
            </form>
        );
    }
}