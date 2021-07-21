import React from 'react'

function Keypad() {
    function handleChange(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" name="keypadInput" onChange={handleChange}>
            </input>
        </div>
    )
}

export default Keypad;

