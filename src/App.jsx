import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    // Array Destructuring
    const [stack, setStack] = useState("")
    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
        <main className='react-calculator'>
            <Result value={stack}/>
            <Numbers onClickNumber={number => {
                setStack(`${stack}${number}`)
            }}/>
            <Functions 
                onContentClear={() => {
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0){
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}
            />
            <MathOperations 
                onClickOperation={operation => {
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    setStack(eval(stack).toString())
                }}
            /> 
        </main>
    )
}

export default App

