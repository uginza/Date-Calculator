import React, {useState} from "react";
import {NewNameType} from "../App";

type PersonPropsType = {
    person: NewNameType
    removePerson: (id:string) => void
}

export function Person(props: PersonPropsType) {
    return (
        <div key={props.person.id}>
            <input type={'date'}/>
            <div>{props.person.name}</div>
            <button onClick={()=>props.removePerson(props.person.id)}>X</button>
        </div>
    )
}

