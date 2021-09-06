import React, { useState } from 'react'

const PWCheckFunction = () => {
// Declare a new state variable, which we'll call "count"
    const [strength, setStrength] = useState('Blank')
    const [security, setSecurity] = useState('input')
    const [pointsTotal, setPointsTotal] = useState('0')

    const handleKeyDown = (event) => {
        if (event.key == " ") {
            event.preventDefault()
        }
    }

    const checkPassword = (event) => {
        checkStrength(event.target.value)
    }   

    const checkStrength = (password) => {
        let pointTotal = 0
   
        let tests = [/[a-z]/, /[A-Z]/, /[0-9]/, /[!@#$%^&*()]/, /.{8}/ , /.{12}/]

        tests.forEach (testToRun => {
            if (testToRun.test(password)) {pointTotal++}
        })

        if (pointTotal <= 2) {
            setStrength('Weak')
        } else if (pointTotal <= 4) {
            setStrength('Medium')
        } else if (pointTotal >= 5) {
            setStrength('Stronk')
        } else {
            setStrength('Error.')
        }
        setPointsTotal(pointTotal)
        return pointTotal
    } 

    const secureButtonToggle = () => {
        if (security == 'input') {
            setSecurity('password')
        } else {
            setSecurity('input')
        }

    }


    return (
        <div className="pwChecker">
            <h5>Password Strength Checker using a React Function: </h5>
            
            <input className="input-box" type={security} onKeyDown={handleKeyDown} onChange={checkPassword} />
            <input className='secureToggle' type='checkbox' onClick={secureButtonToggle}/>
            <p>Strength: {strength}.</p>
            <p>{pointsTotal} Points.</p>
        </div>
    );
}

export default PWCheckFunction

