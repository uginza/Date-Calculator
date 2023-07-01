import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Person} from "./Person-Component/Person";
import {v4 as uuidv4} from 'uuid';

//types
export type NewNameType = {
    id: string
    name:string
}

export type PersonsType= NewNameType[]


function App() {



    const [name, setText] = useState('')
    const [persons, setPerson] = useState<PersonsType>([])

    const addPerson = (name: string) => {
        if (name) {
            const newName = {
                id: uuidv4(),
                name: name,
            }
            setPerson([...persons,newName])
        }
    }

    const removePerson = () => {
    }

    const changeText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    return (
        <div className="App">
            <input value={name} onChange={changeText}/>
            <button onClick={addPerson}>Добавить</button>
            <div>{persons.map((p) => {
                return <Person/>
            })}</div>
        </div>
    );
}

export default App;
