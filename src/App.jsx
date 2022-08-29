import React from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
        <main className='react-calculator'>
            <Result />
            <Numbers onClickNumber={number => console.log(number)}/>
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
