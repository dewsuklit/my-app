import React,{useState} from "react";
const Counter=()=>{
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);
    const [value, setValue] = useState("Type here!");
    const onTextchange=event=>setValue(event.target.value);
    return (<>
            <div>
                onClick={e=>console.log('onClick')}
                
            </div>
            <button onClick = {() => setCount(count+1)}>
                Click me
            </button>
            <p>You clicked {count} times</p>
            <button onClick = {() => setShow(!show)}></button>
            {(show)?"Hello world":" "}
            <input
            type="text"
            value={value}
            onChange={event=>onTextchange(event)}
            />
            <h3>
                {value.length}
            </h3>
    </>);
}

export default Counter();