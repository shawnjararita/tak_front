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
        }, 4000)
    }

    copyCode() {

        this.codeField.current.select()
        // document.execCommand('copy')
        navigator.clipboard.writeText(this.codeField.current?.value)
        this.setState({ message: 'game id copied!' })
        // console.log(this.codeField.current?.value)
    }

    render() {
        return (
            <>
                <input
                    ref={this.codeField}
                    defaultValue={this.props.takGameId}
                />
                <button onClick={this.copyCode} style={{ marginLeft: '10px' }}>Copy the game id</button>
                <div>{this.state.message}</div>
            </>
        )
    }
}
export default CopyField