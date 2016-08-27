import React from 'react';

export default class DynamicField extends React.Component
{
    constructor()
    {
        super();
        
        this.state = {
            value: ""
        }
    }
    
    onChangeInput(e)
    {
        const value = e.target.value;
        this.setState({value});
    }
    
    render()
    {       
        return <input type={this.props.type} 
                      onChange={this.onChangeInput.bind(this)} 
                      placeholder={this.props.placeholder} 
                      value={this.state.value} 
                      required={this.props.required} />
    }    
}