import React from 'react';

function Person(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>

            <Person name="John" age="30" />
            <Person name="Mary" age="25" />
            <Person name="Alex" age="40" />
            <Person name="Sarah" age="20" /> 
        </div>
    );
}

export default Person;
