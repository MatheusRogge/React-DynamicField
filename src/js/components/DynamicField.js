import React from 'react';

export default class DynamicField extends React.Component
{
    constructor()
    {
        super();

        this.state = { value: "" }
    }

    onChangeHandler(e)
    {
        const value = e.target.value;
        this.setState({value});

        if(this.props.changeHandler !== undefined)
        {
            this.props.changeHandler(e);
        }
    }

    render()
    {
        const props = this.props;

        if (props.type === "select")
        {
            return (
            <select onChange={this.onChangeHandler.bind(this)} value={this.state.value} {...props}>
                { props.options.map((v, k) => <option key={k} value={v.value}> { v.text } </option>) }
            </select>);
        }
        else
        {
            return <input onChange={this.onChangeHandler.bind(this)} value={this.state.value} {...props} />
        }
    }
}
