import React from "react";
import { ChildClass } from "./Child";

export class ParentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Class Class"
        }
    }
    render() {
        return (
            <div>
                <h1><ChildClass name={this.state.name} /></h1>
            </div>
        )
    }
}