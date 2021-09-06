import React from 'react';

class PasswordChecker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            securityToggle: 'text',
            pwStrength: ''
        }
        this.checkPassword = this.checkPassword.bind(this)
        this.secureButtonToggle = this.secureButtonToggle.bind(this)
    }

    checkPassword(event) {
        this.checkStrength(event.target.value)        
    }

    checkStrength(password) {
        let pwLength = password.length
        if (pwLength < 6) {
            this.setState({pwStrength: 'weak' })
        } else if (pwLength < 12) {
            this.setState({pwStrength: 'medium' })
        } else {
            this.setState({pwStrength: 'strong' })
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
            <div className="pwChecker">
                <h5 >Password Strength Checker: </h5>
                
                <input type={this.state.securityToggle} onChange={this.checkPassword} />
                <input type='checkbox' onClick={this.secureButtonToggle}/>
                <p>Strength: {this.state.pwStrength}</p>
            </div>
        )
    }
}

export default PasswordChecker;