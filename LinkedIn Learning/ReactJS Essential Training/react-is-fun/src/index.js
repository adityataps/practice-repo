import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class HelloWorld extends React.Component {
    render() {
        return(
            <div>
                <p>
                    hello world?
                </p>
            </div>
        )
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let fruits = {
    apples: 10,
    bananas: 4,
    pears: 13,
    goal: 50
}

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

var FruitsStyle = {
    color: "orange",
    background: "black"
}

class FruitsGoal extends Component {
    render() {
        const {apples, bananas, pears, goal} = this.props
        const total = apples + bananas + pears
        const goalPercent = (total, goal) => {
            return 1.0 * total / goal
        }
        return (
            <div>
                <h1>
                    We have {total} fruits, and we need {goal} fruits.
                </h1>
                <h2 style={FruitsStyle}>
                    We're {goalPercent(total, goal)} percent of the way!
                </h2>
            </div>
        )
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const goalPercent = (total, goal) => {
    return 1.0 * total / goal
}

const FunctionComponent = ({apples, bananas, pears, goal}) => {
    return (
        <div>
            <h1>
                This text came from a function component!
            </h1>
            <p>
                {apples} apples
            </p>
            <p>
                {bananas} bananas
            </p>
            <p>
                {pears} pears
            </p>
            <p>
                goal is {goal}
            </p>
            <p>
                we're {goalPercent(apples + bananas + pears, goal)} percent of the way!
            </p>
        </div>
    )
}

//--------------------------------------------------------------------------------------------------------------------//

render(
    <div>

        {/*<HelloWorld />,*/}

        {/*<PropsMessage message={"This is a custom message!"} color={"purple"} />,*/}

        {/*<FruitsCount*/}
        {/*    apples={fruits.apples}*/}
        {/*    bananas={fruits.bananas}*/}
        {/*    pears={fruits.pears}*/}
        {/*    goal={fruits.goal}*/}
        {/*/>*/}
        {/*<FruitsGoal*/}
        {/*    apples={fruits.apples}*/}
        {/*    bananas={fruits.bananas}*/}
        {/*    pears={fruits.pears}*/}
        {/*    goal={fruits.goal}*/}
        {/*/>*/}
        {/*<FunctionComponent*/}
        {/*        apples={fruits.apples}*/}
        {/*        bananas={fruits.bananas}*/}
        {/*        pears={fruits.pears}*/}
        {/*        goal={fruits.goal}*/}
        {/*/>*/}



    </div>,
    document.getElementById("root")
)