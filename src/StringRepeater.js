import React from 'react';

class StringRepeater extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            securityToggle: 'text',
            stringOutput: ''
        }
        this.inputUpdateHandler = this.inputUpdateHandler.bind(this)
        this.mumble = this.mumble.bind(this)
    }

    inputUpdateHandler(event) {
        let output = this.mumble(event.target.value)
        this.setState({stringOutput: output})
    }

    mumble(input) {
        let output = input.split('').map((character, index) => {
            return character.repeat(index+1)
        }).join('-')
        return output
    }

    render() {
        return (
            <div className="pwChecker">
                <h5 >String Repeater: </h5>
                <input type={this.state.securityToggle} onChange={this.inputUpdateHandler} />
                <p>Output: {this.state.stringOutput}</p>
            </div>
        )
    }
}

export default StringRepeater;