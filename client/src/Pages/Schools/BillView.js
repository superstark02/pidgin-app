import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import { getSubCollection } from '../../Database/getCollection'
import '../../CSS/Pages/Schools/SelectedSchools.css'
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import deleteDoc from '../../Database/deleteDoc';
import Checkbox from '@material-ui/core/Checkbox';

export class BillView extends Component {
    state = {
        list: [],
        total: 0,
        tax: 0,
        id: ""
    }

    getData = () => {
        var id = "YlTSGgoJG2R8Ii5qqnkXXd7gzSa2"
        //var id = window.Android.getUid()
        getSubCollection("Users", id, "List").then(snap => {
            this.setState({ list: snap })

            var i = 0, total = 0, tax = 0;
            for (i; i < snap.length; i++) {
                total = total + parseInt(snap[i].fees)
                tax = tax + parseInt(snap[i].fees) * 0.2
            }
            this.setState({ tax: tax })
            this.setState({ total: total })
        })
    }

    remove_item = (id, school_id) => {
        deleteDoc("Users", id, "List", school_id).then(snap => {
            if (snap === 1) {
                this.getData()
            }
        })
    }

    componentDidMount() {
        this.setState({ id: "YlTSGgoJG2R8Ii5qqnkXXd7gzSa2" })
        this.getData()
    }

    render() {
        return (
            <div>
                {
                    this.state.list !== null || this.state.list.length > 0 ? (
                        <div>

                            <div className="common-form-check wrap" >
                                <div style={{ width: "93%" }} >
                                    Go To Form
                                    <div style={{ display: 'flex', justifyContent: "space-between" }} >
                                        <div className="selected-school-adress" style={{ marginTop: "10px", fontFamily: "inherit" }} >
                                            Want to check Admission Form last time?
                                        </div>
                                        <div style={{ color: "#35baf6", width: "auto" }} className="wrap" >
                                            VIEW FORM
                                        </div>
                                    </div>

                                    <div className="selected-school-adress" style={{ fontFamily: "inherit", marginTop: "5px" }} >
                                        You will be mailed when the form is seen by school on the below email-id:
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: "space-between" }} >
                                        <div className="selected-school-adress" style={{ fontFamily: "inherit", fontWeight: "bolder", fontSize: "12px" }} >
                                            <b>ds.techin@gmail.com</b>
                                        </div>
                                        <div style={{ color: "#35baf6", width: "auto", marginLeft: "20px" }} className="wrap" >
                                            EDIT
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="cart-page" >

                                {
                                    this.state.list &&
                                    this.state.list.map(item => {
                                        return (
                                            <div className="list-item">
                                                <div className="wrap" style={{ width: "auto", minWidth: "15vw" }} >
                                                    <img src={item.logo} height="30vw" />
                                                </div>
                                                <div style={{ width: "100%" }} >
                                                    <div>
                                                        {item.name}
                                                    </div>
                                                    <div className="selected-school-adress" >
                                                        {item.address}
                                                    </div>
                                                    <div onClick={() => { this.remove_item(this.state.id, item.id) }} className="selected-school-adress" style={{ fontSize: "12px", color: "#f73378", fontFamily: "inherit" }} >
                                                        REMOVE
                                                    </div>
                                                </div>
                                                <div style={{ marginLeft: "5px" }} >
                                                    &#8377;{item.fees}
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="list-item" style={{ margin: "0px", padding: "0px" }} >
                                    <div>
                                        <div className="selected-school-adress" style={{ color: "#04BFBF" }} >
                                            Item Total
                                        </div>
                                    </div>
                                    <div className="selected-school-adress" style={{ color: "#04BFBF" }} >
                                        &#8377;{this.state.total}
                                    </div>
                                </div>

                                <div className="list-item" style={{ margin: "0px", padding: "0px" }} >
                                    <div>
                                        <div className="selected-school-adress" style={{ color: "#04BFBF" }} >
                                            Taxes {"&"} charges
                                        </div>
                                    </div>
                                    <div className="selected-school-adress" style={{ color: "#04BFBF" }} >
                                        &#8377;{this.state.tax}
                                    </div>
                                </div>

                                <div style={{ height: "0.5px", borderTop: "dashed 1px grey", width: "93%", marginTop: "20px" }} ></div>

                                <div className="cart-total" >
                                    <div>
                                        Grand Total:
                                    </div>
                                    <div>
                                        &#8377;{this.state.tax + this.state.total}
                                    </div>
                                </div>

                                <div className="pnp-bill" >
                                    <div style={{ marginRight: "5px", marginTop: "2px" }} >
                                        <CheckCircleOutlineRoundedIcon style={{ color: "#91ff35" }} />
                                    </div>
                                    <div>
                                        <div>
                                            Your data is secured
                                        </div>
                                        <div className="selected-school-adress" >
                                            The information provided by you is encrypted. It will not be read, shared or edited by the company.
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "93%", display: "flex" }} >
                                    <div>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="checkedA" color="primary" />}
                                                label="I approve the information provided for the form."
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div style={{ height: "60px" }} ></div>

                                <div className="wrap" >
                                    <button className="pay-button" >
                                        PAY & SUBMIT
                                    </button>
                                </div>

                            </div>
                        </div>
                    ) : (
                            <div classname="wrap" >
                                No Schools Selected
                            </div>
                        )
                }
            </div>
        )
    }
}

export default BillView
