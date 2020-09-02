import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../CSS/Pages/Schools/CommonForm.css'
import '../../CSS/Pages/Home.css'
import Advantages from '../../Components/Schools/Advantages';
import FormList from '../../Components/Schools/FormList';

export class CommonForms extends Component {
    render() {
        return (
            <div>
                <AppBar name="Common Forms" goBack={this.props.history.goBack} />
                <Fab aria-label="add" style={{ position: "fixed", bottom: "0px", right: "0px", margin: "20px", backgroundColor: "#1fbecd", zIndex:"10000"}}>
                    <AddIcon style={{ color: "white" }} />
                </Fab>
                <div className="wrap" style={{flexDirection:"column"}} >
                    <div className="common-form-message" >
                        The details you fill in forms are encrypted and are not shared to anyone.
                        No one not even Pidgin can see it.
                    </div>
                    <Advantages/>

                    <div className="home-heading" style={{width:"93%", marginTop:"20px"}} >
                        Your Forms
                    </div>
                    <FormList/>
                </div>
            </div>
        )
    }
}

export default CommonForms
