import React from 'react';

class CreditCardChecker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: ''
        }
        this.checkBank = this.checkBank.bind(this)
        this.updateCard = this.updateCard.bind(this)

    }

    checkBank() {
        const testNumber = this.state.cardNumber
        
        if (/^3[47]/.test(testNumber)) {
            return 'AMEX'
        } else if (/^6001/.test(testNumber)) {
            return 'Discover'
        } else if (/^5[1-5]/.test(testNumber)) {
            return 'MasterCard'
        } else if (/^4/.test(testNumber)) {
            return 'Visa'
        } else {
            return '##'
        }
    } 

    updateCard(event) {
        this.setState({ cardNumber: event.target.value })
    }
    
    render() {
        return (
            <div className="ccChecker">
                <h5>Credit Card Bank Checker:</h5>
                
                <input type="number" onChange={this.updateCard} />
                <span> <p>Bank: {this.checkBank()}</p></span> 
            </div>
        )
    }
}

export default CreditCardChecker;