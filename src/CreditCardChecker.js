import React from 'react';

class CreditCardChecker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: ''
        }
        this.handleBankChange = this.handleBankChange.bind(this)
        this.checkBank = this.checkBank.bind(this)
        this.updateBank = this.updateBank.bind(this)

    }

    handleBankChange(CCInput) {
        const newNumber = CCInput
        this.setState({ cardNumber: newNumber })
        
    }

    updateBank(event) {
        this.checkBank(event.target.value)
    }

    checkBank(ccNumber) {
        if (/(^34)|(^37)/.test(ccNumber)) {
            this.handleBankChange('AMEX')
        } else if (/^6001/.test(ccNumber)) {
            this.handleBankChange('Discover')
        } else if (/^51|^52|^53|^54|^55/.test(ccNumber)) {
            this.handleBankChange('MasterCard')
        } else if (/^4/.test(ccNumber)) {
            this.handleBankChange('Visa')
        } else {
            this.handleBankChange('##')
        }
    } 
    
    render() {
        return (
            <div className="ccChecker">
                <h5>Credit Card Bank Checker:</h5>
                
                <input type="number" onChange={this.updateBank} />
                <span> <p>Bank: {this.state.cardNumber}</p></span> 
            </div>
        )
    }
}

export default CreditCardChecker;