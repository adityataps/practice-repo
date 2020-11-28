import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'arial'
}

const title = React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Hello World! Child of h1'
)

ReactDOM.render(
    title,
    document.getElementById("root")
)