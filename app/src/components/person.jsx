import React from 'react';

function Person(props) {

    // const removePerson = () => {
    //     props.onRemove(props.id);
    // }

    return (
        <div className='table container'>
            <table>
            <th>{props.name}</th>
            <th>{props.age}</th>
            {/* <p>{} <button onClick = {removePerson}>Remove</button></p> */}
            </table>
            
        </div>
    );
}

export default Person;
