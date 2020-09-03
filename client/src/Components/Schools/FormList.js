import React, { Component } from 'react'
import '../../CSS/Components/Schools/FormList.css'
import bg from '../../Images/Schools/papers.jpg'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'

export class FormList extends Component {
    render() {
        return (
            <div>
                <Link to="/your-common-form" >
                    <ButtonBase style={{ width: "100%" }} >
                        <div style={{ width: "93%", display: "flex", justifyContent: "space-between" }} className="form-item" >
                            <div style={{ width: "50%", textAlign: "left" }} >
                                <div className="form-title" >
                                    Name
                        </div>
                                <div>
                                    9/2/2020
                        </div>
                            </div>
                            <div className="form-bg" >
                                <img src={bg} height="100px" />
                            </div>
                        </div>
                    </ButtonBase>
                </Link>
                <ButtonBase style={{ width: "100%" }} >
                    <div style={{ width: "93%", display: "flex", justifyContent: "space-between" }} className="form-item" >
                        <div style={{ width: "50%", textAlign: "left" }} >
                            <div className="form-title" >
                                Name
                        </div>
                            <div>
                                9/2/2020
                        </div>
                        </div>
                        <div className="form-bg" >
                            <img src={bg} height="100px" />
                        </div>
                    </div>
                </ButtonBase>
                <ButtonBase style={{ width: "100%" }} >
                    <div style={{ width: "93%", display: "flex", justifyContent: "space-between" }} className="form-item" >
                        <div style={{ width: "50%", textAlign: "left" }} >
                            <div className="form-title" >
                                Name
                        </div>
                            <div>
                                9/2/2020
                        </div>
                        </div>
                        <div className="form-bg" >
                            <img src={bg} height="100px" />
                        </div>
                    </div>
                </ButtonBase>
            </div>
        )
    }
}

export default FormList
