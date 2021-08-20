import React from 'react';

class PinCheck extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: ''
        }
        this.handlePinChange = this.handlePinChange.bind(this)
        this.checkPin = this.checkPin.bind(this)

    }

    handlePinChange(value) {
        const newQuote = value
        this.setState({ quote: newQuote })
        
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
            <div className="Quote">
                <label >Quote: </label>
                
                <input type="text" onChange={this.checkPin} />
                <span> <p>Saved Quote: {this.state.quote}</p></span> 
            </div>
        )
    }
}

export default PinCheck;