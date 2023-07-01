import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    const [text,setText]=useState('')
    const [persons,serPerson]=useState([])

    const addPerson=()=>{}

    const removePerson=()=>{}

    const changeText=(e:ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
    }

    return (
    <div className="App">
        <input value={text} onChange={changeText}/>
        <button onClick={()=>{}}>Добавить</button>
        <div>{persons.map((p)=>{return <Person/>})}</div>
    </div>
  );
}

export default App;
