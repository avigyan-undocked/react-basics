import React, { Component } from 'react';
import ClassLifeCycles from './ClassLifecycles';

class ClassCompCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: true,
            createError: false,
        }
    }

    _mount = () => {
        this.setState(prevState => ({mount: !prevState.mount}))
    }

    _createError = () => {
        this.setState({createError: true})
    }

    _onCallBack = () => {
        console.log("Callback Triggered")
        this.setState({createError: false})
    }

    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{marginBottom:"20px"}}>
                    <button onClick={this._mount}>{this.state.mount ? "UnMount" : "Mount"}</button>
                    {/* <button onClick={this._createError}>Create Error</button> */}
                </div>
                {this.state.mount && <ClassLifeCycles createError={this.state.createError} removeError={this._onCallBack} />}
            </div>
        );
    }
}

export default ClassCompCounter;