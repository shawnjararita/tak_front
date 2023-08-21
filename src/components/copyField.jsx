import React, { Component } from 'react'

class CopyField extends Component {
    constructor(props) {
        super(props)
        this.state = { message: '' }

        this.codeField = React.createRef()
        this.copyCode = this.copyCode.bind(this)
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({ message: '' })
        }, 3000)
    }

    copyCode() {
        this.codeField.current.select()
        // document.execCommand('copy')
        navigator.clipboard.writeText(this.props.yourcode)
        this.setState({ message: 'game id copied!' })
    }

    render() {
        return (
            <>
                <input
                    value={this.props.yourcode}
                    ref={this.codeField}
                />{this.state.message}
                <br />
                <button onClick={this.copyCode}>Copy the game id</button>
            </>
        )
    }
}
export default CopyField