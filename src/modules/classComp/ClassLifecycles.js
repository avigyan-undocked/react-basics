import React, { Component } from "react";
import PropTypes from 'prop-types';

// const ErrorCreator = () => <div>{props.value}</div>

export default class ClassLifeCycles extends Component {
    constructor(props) {
        console.log("1 - Constructor called")
        console.log("------------------------------------------")
        super(props)
        this.state = {
            counter: 0,
        }
    }

    /*
    *   Used to copy props to state
    */
    static getDerivedStateFromProps(props, state) {
        console.log("2 - Get Derived State From Props")
        console.log("------------------------------------------")
        return {
            createError: props.createError,
        }
    }

    /*
    *   UNSAFE_componentWillMount is deprecated. Use constructor/componentDidMount instead.
    */
    componentDidMount() {
        console.log("4 - Component Did Mount")
        console.log("------------------------------------------")
    }

    shouldComponentUpdate(nextProps, nextState) {
        /*
            Example of a component that should not update when the props change.
            *To view live pass ignoreProps from Parent to Child.*

            if (nextProps.ignoreProp && 
                nextProps.ignoreProp === this.props.ignoreProp) {
                return false
            }
            return true
        */
        /*
            if (nextState.counter === this.state.counter) {
                console.log("Should Component Update from Child: false");
                return false
            }
        */
        console.log("Should Component Update from Child: true");
        return true;
    }

    /*
    *   UNSAFE_componentWillUpdate is deprecated
        componentWillUpdate() {
            console.log("4 - Component Will Update")
            console.log("------------------------------------------")
        }
    */

    /*
        The getSnapshotBeforeUpdate() method is invoked just before the DOM is being rendered. 
        It is used to store the previous values of the state after the DOM is updated.
        Any value returned by getSnapshotBeforeUpdate() method will be used as a parameter for componentDidUpdate() method. 
        This function is always used along with the componentDidUpdate() method but vice-versa isn’t true.
    */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Get Snapshot Before Update")
        console.log("------------------------------------------")
        return prevState
    }

    /*
    *   This is a private method
    */
    _onIncrement = () => {
        this.setState((prevState, props) => {
            return {
                // ...prevState  -----spreading previous state is not required
                counter: prevState.counter + 1
                /* 
                    this will make shouldComponentUpdate return false
                */
                // counter: prevState.counter
            }
        })
    }

    /*
    *   This is a private method
    */
    _onDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    /*
    *   This is a private method
    */
    _handleError = () => {
        this.setState({ error: null })
        this.props.removeError()
    }

    render() {
        console.log("3 - Render")
        console.log("------------------------------------------")

        if (this.state.error) {
            return (
                <div>
                    {this.state.error.message}
                    <button onClick={this._handleError}>
                        Remove Error
                    </button>
                </div>
            )
        }

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {!this.state.createError && <div style={{ padding: "20px", backgroundColor: "lightgreen" }}>
                    <button onClick={this._onIncrement}>Increment</button>
                    <h3>{this.state.counter}</h3>
                    <button onClick={this._onDecrement}>Decrement</button>
                </div>}
                {/* {this.state.createError && <ErrorCreator />} */}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("5 - Component Did Update")
        // console.log("Snapshot from getSnapshotBeforeUpdate: ", snapshot)
        console.log("------------------------------------------")
    }

    componentWillUnmount() {
        console.log("6 - Component Will Unmount")
        console.log("------------------------------------------")
    }

    componentDidCatch(error, info) {
        console.log("7 - Component Did Catch")
        console.log("------------------------------------------")
        this.setState({ error, info })
    }
}

ClassLifeCycles.propTypes = {
    createError: PropTypes.bool,
    removeError: PropTypes.func
};

ClassLifeCycles.defaultProps = {
    createError: false
}