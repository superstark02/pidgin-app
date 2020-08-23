import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'

export class YourClasses extends Component {

    render() {
        return (
            <div>
                <AppBar name="Your Classes" goBack={this.props.history.goBack} />
            </div>
        )
    }
}

export default YourClasses
