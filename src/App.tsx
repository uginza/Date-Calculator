import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Person} from "./Person-Component/Person";
import {v4 as uuidv4} from 'uuid';

//types
export type NewNameType = {
    id: string
    name: string
}

export type PersonsType = NewNameType[]


function App() {

    const [name, setText] = useState('')
    const [persons, setPerson] = useState<PersonsType>([])
    const [date,setDate] = useState<string>()


    const addPerson = () => {
        if (name) {
            const newPerson = {
                id: uuidv4(),
                name: name,
                date:date
            }
            setPerson([...persons, newPerson])

        }
    }
    console.log(persons)
    const removePerson = (id: string) => {
setPerson([...persons.filter(p=>p.id !== id)])
    }

    const changeTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const changeDateHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setDate(e.currentTarget.value)
    }

    return (
        <div className="App">
            <input value={name} onChange={changeTextHandler}/>
            <button onClick={addPerson}>Добавить</button>
            <div>{persons.map((person) => {
                return (
                    <Person key={person.id} person={person} removePerson={removePerson} onChange={changeDateHandler}/>
                )
            })}</div>
        </div>
    );
}

export default App;
