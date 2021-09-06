import React from 'react';

class CreditCardChecker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bankName: ''
        }
        this.checkBank = this.checkBank.bind(this)
        this.updateBank = this.updateBank.bind(this)
    }

    checkBank(event) {
        const testNumber = event.target.value
        
        if (/^3[47]/.test(testNumber)) {
            this.updateBank('AMEX')
        } else if (/^6001/.test(testNumber)) {
            this.updateBank('Discover')
        } else if (/^5[1-5]/.test(testNumber)) {
            this.updateBank('MasterCard')
        } else if (/^4/.test(testNumber)) {
            this.updateBank('Visa')
        } else {
            this.updateBank('##') 
        }
    } 

    updateBank(bank) {
        this.setState({ bankName: bank })
    }
    
    render() {
        return (
            <div className="ccChecker">
                <h5>Credit Card Bank Checker:</h5>
                
                <input type="number" onChange={this.checkBank} />
                <span> <p>Bank: {this.state.bankName}</p></span> 
            </div>
        )
    }
}

export default CreditCardChecker;