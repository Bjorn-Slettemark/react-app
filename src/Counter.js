import React from 'react';
import {useState} from 'react';

function Counter() {

    //  [variable, method that changes the variable]
    const [count, setCount] = useState(0);


    const increment = () => setCount(count + 1);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;