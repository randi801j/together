import React from "react";
import { useState } from "react";

const Name = (props) => {
    const [age, setAge] = useState(props.age)
    const addone = () => {
        setAge(prevState => prevState + 1)
    }

    return (
        <div>
            <h1>{props.fn}</h1>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {props.hc} </h3>
            <button  onClick={addone}>Birthday Button {props.fn}</button>
        </div>
    )
}

export default Name;