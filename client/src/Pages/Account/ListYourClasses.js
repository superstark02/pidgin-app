import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'

export class ListYourClasses extends Component {
    render() {
        return (
            <div>
                <AppBar name="List Your Classes" goBack={this.props.history.goBack} />
                <form>
                    <input placeholder="Name" />
                </form>
            </div>
        )
    }
}

export default ListYourClasses
