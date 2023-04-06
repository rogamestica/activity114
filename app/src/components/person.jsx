import React from 'react';

function Person(props) {
    return (
        <div className='table container'>
            <table>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            </table>
        </div>
    );
}

export default Person;
