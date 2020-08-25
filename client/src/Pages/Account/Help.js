import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'

export class Help extends Component {
    render() {
        return (
            <div>
                <AppBar name="Help" goBack={this.props.history.goBack} />
            </div>
        )
    }
}

export default Help
