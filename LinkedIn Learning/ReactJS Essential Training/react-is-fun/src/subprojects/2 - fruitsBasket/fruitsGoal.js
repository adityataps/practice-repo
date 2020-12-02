import React, {Component} from "react";

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

export default FruitsGoal