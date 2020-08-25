import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'

export class YourPayments extends Component {
    render() {
        return (
            <div>
                <AppBar name="Your Payments" goBack={this.props.history.goBack} />
            </div>
        )
    }
}

export default YourPayments
