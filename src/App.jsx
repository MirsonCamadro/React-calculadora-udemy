import React from 'react'
import Button from './components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {

    const clickHandlerFunction = text => {
        console.log(text)
    }
    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
        <main className='react-calculator'>
            <Result />
            <div className="numbers">
                <Button text={"1"} clickHandler={clickHandlerFunction}/>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <Functions 
                onContentClear={() => console.log("clear")}
                onDelete={() => console.log("delete")}
            />
            <MathOperations 
                onClickOperation={operation => console.log(operation)}
                onClickEqual={equal => console.log(equal)}
            /> 
        </main>
    )
}

export default App
