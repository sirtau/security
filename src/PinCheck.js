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
            this.setState({isValidPin: 'Passed'}) 
        } else {
            this.setState({isValidPin: 'Failed'}) 
        }
    }



    isValidPin(pin) {
        let uniqueNum = pin
            .split('')
            .filter((value, index, self) => {
                return self.indexOf(value) === index
            })
            .length

        if (uniqueNum < 2) {
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
            <div className="pinChecker">
                <h5>Pin isValid Check:</h5>
                
                <input type={this.state.securityToggle} onChange={this.checkPin} />
                <input type='checkbox' onClick={this.secureButtonToggle}/>
                <p>Valid Pin: {this.state.isValidPin}</p>

            </div>
        )
    }
}

export default PinCheck;