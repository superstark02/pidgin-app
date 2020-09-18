import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import { getSubCollection } from '../../Database/getCollection'
import '../../CSS/Pages/Schools/SelectedSchools.css'
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

export class SelectedSchools extends Component {

    state = {
        list:null
    }

    componentDidMount(){
        var id = "YlTSGgoJG2R8Ii5qqnkXXd7gzSa2"
        //var id = window.Android.getUid()
        getSubCollection("Users", id, "List").then(snap => {
            this.setState({ list: snap })
        })
    }

    render() {
        return (
            <div>
                <AppBar name="Your Selected Schools" goBack={this.props.history.goBack} />

                <div>
                    {
                        this.state.list &&
                        this.state.list.map(item => {
                            return (
                                <div className="list-item">
                                    <div className="wrap" style={{ width: "auto", minWidth: "15vw" }} >
                                        <img src={item.logo} height="30vw" />
                                    </div>
                                    <div>
                                        <div>
                                            {item.name}
                                        </div>
                                        <div className="selected-school-adress" >
                                            {item.address}
                                        </div>
                                        <div className="selected-school-adress" >
                                            Form Fees: &#8377;25
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: "5px" }} >
                                        <CancelRoundedIcon style={{color:"rgba(0,0,0,0.2)"}} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SelectedSchools
