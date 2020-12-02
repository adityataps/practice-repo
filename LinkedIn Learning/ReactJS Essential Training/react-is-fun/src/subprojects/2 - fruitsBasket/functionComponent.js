import React from "react";

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

export default FunctionComponent