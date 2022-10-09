import React from 'react'
import Button from './Button';

import "./style.css"

const App = () =>{
    return(
        <div>
            <h1 style = {{textAlign : "center"}}>Hello, Akshita</h1>
            <Button btnName = "click"></Button>
            <Button btnName = "google"></Button>
        </div>
    )
}

export default App;