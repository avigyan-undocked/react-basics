import React from "react";

export class ChildClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            name: props.name
        }

        this._onClickHandler = this._onClickHandler.bind(this)
    }

    _onClickHandler() {
        this.setState(prev => {
            return {
                counter: prev.counter + 1,
                name: "Updated Name"
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this._onClickHandler} >Click to Change</button>
            </div>
        )
    }
}