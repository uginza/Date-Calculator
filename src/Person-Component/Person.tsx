import React from "react";
import {NewNameType} from "../App";

type PersonPropsType = {
    person: NewNameType
    removePerson: (id:string) => void
}

export function Person(props: PersonPropsType) {

    return (
        <div key={props.person.id}>
            <div>{props.person.name}</div>
            <div onClick={()=>props.removePerson(props.person.id)}>X</div>
        </div>
    )
}

