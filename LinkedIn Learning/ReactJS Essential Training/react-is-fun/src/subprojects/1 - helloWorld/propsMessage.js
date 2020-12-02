import React, {Component} from "react";

class PropsMessage extends Component {
    render() {
        return(
            <div>
                <h1 style={{color: this.props.color}}>
                    {this.props.message}
                </h1>
            </div>
        )
    }
}

export default PropsMessage