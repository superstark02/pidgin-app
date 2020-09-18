import React, { Component } from 'react'
import '../../CSS/Components/Schools/FormList.css'
import bg from '../../Images/Schools/papers.jpg'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'


export class FormList extends Component {

    state = {
        form_list: null
    }

    render() {
        return (
            <div>
                {
                    this.props.list === null || this.props.list.length === 0 ? (
                        <div className="wrap" style={{height:"50vh",color:"rgba(0,0,0,0.3)",flexDirection:"column"}} >
                            <div>
                                No Forms
                            </div>
                            <div>
                                To add a form tap the + button 
                            </div>
                            <div>
                                in bottom left corner
                            </div>
                        </div>
                    ) : (
                            this.props.list.map(item => {
                                return (
                                    <Link to="/your-common-form" >
                                        <ButtonBase style={{ width: "100vw" }} >
                                            <div style={{ width: "93%", display: "flex", justifyContent: "space-between" }} className="form-item" >
                                                <div style={{ width: "50%", textAlign: "left" }} >
                                                    <div className="form-title" >
                                                        {item.name}
                                                    </div>
                                                    <div>
                                                        {item.date_created}
                                                    </div>
                                                    <div style={{marginTop:"10px"}} >
                                                        REMOVE
                                                    </div>
                                                </div>
                                                <div className="form-bg" >
                                                    <img src={bg} height="100px" />
                                                </div>
                                            </div>
                                        </ButtonBase>
                                    </Link>
                                )
                            })
                        )

                }
            </div>
        )
    }
}

export default FormList
