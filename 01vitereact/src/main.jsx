import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | Maggie</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://www.google.com",
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target = '_blank'>Visit Google</a>
)

const anotherUser = "maggie and react"

const reactElement = React.createElement(
    'a', 
    {href:'https://google.com', target:'_blank'},
    'Click me to Visit GooGle',
    anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement
  
)
