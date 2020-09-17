import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Components/Schools/Schools.css'

export class GotToCart extends Component {
    render() {
        return (
            <div style={{position:"fixed",bottom:"65px",width:"100%"}} >
                <Link to="/list" >
                    <div className="blur" >
                        VIEW LIST
                    </div>
                </Link>
            </div>
        )
    }
}

export default GotToCart
