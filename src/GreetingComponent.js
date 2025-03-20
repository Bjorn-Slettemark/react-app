import React from 'react';
import {useState} from 'react';

function GreetingComponent()
{
    const [greeting, setGreeting] = useState("Hello, World!");

    
    const updateGreeting = () => {
        setGreeting( "Goodbye, World!");
    };
    return (
        <div>
            <p>{greeting}</p>
            <button onClick={updateGreeting}> Update </button>
        </div>
    )
}

export default GreetingComponent;