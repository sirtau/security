import React from 'react';

class PasswordChecker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pin: ''
        }
        this.handlePinChange = this.handlePinChange.bind(this)
        this.checkPin = this.checkPin.bind(this)

    }

    handlePinChange(pinInput) {
        const newPin = pinInput
        this.setState({ pin: newPin })
        
    }

    checkPin(event) {
        this.handlePinChange(event.target.value)
        this.checkStrength(event.target.value)
    }

    checkStrength(pin) {
        console.log(`Pin is: ${pin}`)
    } 
    
    render() {
        return (
            <div className="Pin Checker">
                <label >Password: </label>
                
                <input type="text" onChange={this.checkPin} />
                <span> <p>Strength: {this.state.pin}</p></span> 
            </div>
        )
    }
}

export default PasswordChecker;