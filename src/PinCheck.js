import React from 'react';

class PinCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            securityToggle: 'text',
            isValidPin: false
        }
        this.isValidPin = this.isValidPin.bind(this)
        this.checkPin = this.checkPin.bind(this)
        this.secureButtonToggle = this.secureButtonToggle.bind(this)

    }

    checkPin(event) {
        
        if (this.isValidPin(event.target.value)) {
            console.log('passed')
            this.setState({isValidPin: 'Passed'}) 
        } else {
            this.setState({isValidPin: 'Failed'}) 
            console.log('failed')
        }
    }

    isValidPin(pin) {
        if (/^1111$/.test(pin)) {
            return false 
        } else if (/^\d{1}\d{1}\d{1}\d{1}$/.test(pin)) {
            return true
        } else {
            return false
        }
    }

    secureButtonToggle(event) {
        if (event.target.checked) {
            this.setState({ securityToggle: 'password' })
        } else {
            this.setState({ securityToggle: 'text' })
        }
        
    }
    
    render() {
        return (
            <div className="Pin Checker">
                <h3>Enter Pin:</h3>
                <p><input type='checkbox' onClick={this.secureButtonToggle}/>Tick to Hide PIN</p>
                <input type={this.state.securityToggle} onChange={this.checkPin} />
                <span> <p>PIN Strength Check: {this.state.isValidPin}</p></span> 

            </div>
        )
    }
}

export default PinCheck;