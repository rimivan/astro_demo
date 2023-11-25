import {useState} from "react";
// import React, {useState} from "react";

export default function Hellorct() {
    const [counter, setCounter] = useState<number>(0);
    return <div>
        <h1> Test React Component </h1>
        <button onClick={ () => setCounter(s => s + 1)}> React Button Component {counter} </button>
    </div>
}
