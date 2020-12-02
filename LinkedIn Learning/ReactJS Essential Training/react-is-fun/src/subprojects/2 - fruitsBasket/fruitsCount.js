import React, {Component} from "react";

class FruitsCount extends Component {
    render() {
        return (
            <div>
                <h1>
                    We have {this.props.apples + this.props.bananas + this.props.pears} fruits!
                </h1>
                <p>
                    We have {this.props.apples} apples.
                </p>
                <p>
                    We have {this.props.bananas} bananas.
                </p>
                <p>
                    We have {this.props.pears} pears.
                </p>
                <h2>
                    Our goal is {this.props.goal}!
                </h2>
            </div>
        )
    }
}

export default FruitsCount